const ftp = require('basic-ftp')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const buildDir = path.join(root, 'build')

function getOptions(env) {
  const { FTP_HOST: host, FTP_USER: user, FTP_PASSWORD: password } = env
  if (!host || !user || !password) {
    throw new Error('Set FTP_HOST, FTP_USER and FTP_PASSWORD in .env.')
  }

  const mode = (env.FTP_SECURE || 'explicit').trim().toLowerCase()
  const modes = { true: true, explicit: true, false: false, implicit: 'implicit' }
  if (!Object.prototype.hasOwnProperty.call(modes, mode)) {
    throw new Error('FTP_SECURE must be explicit, true, implicit or false.')
  }
  const secure = modes[mode]
  const portValue = env.FTP_PORT || (secure === 'implicit' ? '990' : '21')
  const port = Number(portValue)
  if (!/^\d+$/.test(portValue) || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('FTP_PORT must be an integer between 1 and 65535.')
  }

  return {
    host,
    port,
    user,
    password,
    secure,
    secureOptions: {
      minVersion: 'TLSv1.2',
      ...(env.FTP_SECURE_SERVERNAME ? { servername: env.FTP_SECURE_SERVERNAME } : {}),
    },
    remotePath: env.FTP_REMOTE_PATH || '/',
  }
}

async function deploy(options, client = new ftp.Client(), localDir = buildDir) {
  try {
    const stats = await fs.promises.stat(localDir)
    if (!stats.isDirectory()) throw new Error('The build path is not a directory.')

    const { remotePath, ...accessOptions } = options
    if (!accessOptions.secure) {
      console.warn('Warning: plaintext FTP sends credentials and files without encryption.')
    }
    try {
      await client.access(accessOptions)
    } catch (err) {
      if (!accessOptions.secure && err.code === 421 &&
          /cleartext|tls security mechanisms/i.test(err.message)) {
        throw new Error(
          `${err.message}\nSet FTP_SECURE=explicit in .env or in the overriding environment variable.`,
          { cause: err }
        )
      }
      if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
        throw new Error(
          `${err.message}\nUse the FTP hostname provided by your hosting provider that matches its certificate.`,
          { cause: err }
        )
      }
      throw err
    }
    console.log(`Uploading build contents to ${accessOptions.host}:${remotePath}`)
    await client.uploadFromDir(localDir, remotePath)
    console.log('Upload complete.')
  } finally {
    client.close()
  }
}

async function main() {
  const result = dotenv.config({ path: path.join(root, '.env'), quiet: true })
  if (result.error) throw result.error
  await deploy(getOptions(process.env))
}

if (require.main === module) {
  main().catch(err => {
    console.error('FTP upload failed:', err.message)
    process.exitCode = 1
  })
}

module.exports = { getOptions, deploy }
