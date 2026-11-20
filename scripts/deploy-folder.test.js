const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const test = require('node:test')
const { getOptions, deploy } = require('./deploy-folder')

const credentials = { FTP_HOST: 'ftp.example.com', FTP_USER: 'user', FTP_PASSWORD: 'password' }

test('defaults to verified explicit FTPS and validates configuration', () => {
  const options = getOptions(credentials)
  assert.equal(options.secure, true)
  assert.equal(options.port, 21)
  assert.equal(options.secureOptions.minVersion, 'TLSv1.2')
  assert.notEqual(options.secureOptions.rejectUnauthorized, false)
  assert.equal(options.remotePath, '/')
  assert.throws(() => getOptions({ ...credentials, FTP_SECURE: 'typo' }), /FTP_SECURE/)
  assert.throws(() => getOptions({ ...credentials, FTP_PORT: '21abc' }), /FTP_PORT/)
  assert.throws(() => getOptions({ ...credentials, FTP_PASSWORD: '' }), /FTP_PASSWORD/)
})

test('supports implicit FTPS, a certificate hostname and a destination', () => {
  const options = getOptions({
    ...credentials,
    FTP_SECURE: 'implicit',
    FTP_SECURE_SERVERNAME: 'server.example.com',
    FTP_REMOTE_PATH: '/public_html',
  })
  assert.equal(options.secure, 'implicit')
  assert.equal(options.port, 990)
  assert.equal(options.secureOptions.servername, 'server.example.com')
  assert.equal(options.remotePath, '/public_html')
})

test('allows an explicit plaintext opt-in and custom port', () => {
  const options = getOptions({ ...credentials, FTP_SECURE: 'false', FTP_PORT: '2121' })
  assert.equal(options.secure, false)
  assert.equal(options.port, 2121)
})

test('uploads the build contents to the configured path and closes the client', async t => {
  const localDir = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-folder-'))
  t.after(() => fs.rmSync(localDir, { recursive: true }))
  const calls = []
  const client = {
    access: async options => calls.push(['access', options]),
    uploadFromDir: async (local, remote) => calls.push(['upload', local, remote]),
    close: () => calls.push(['close']),
  }
  const options = getOptions({ ...credentials, FTP_REMOTE_PATH: '/public_html' })
  await deploy(options, client, localDir)
  assert.equal(calls[0][1].secure, true)
  assert.equal(calls[0][1].remotePath, undefined)
  assert.deepEqual(calls[1], ['upload', localDir, '/public_html'])
  assert.deepEqual(calls[2], ['close'])
})

test('propagates connection failures without retrying and closes the client', async t => {
  const localDir = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-folder-'))
  t.after(() => fs.rmSync(localDir, { recursive: true }))
  const error = new Error('certificate mismatch')
  let attempts = 0
  let closed = false
  const client = {
    access: async () => { attempts++; throw error },
    uploadFromDir: async () => assert.fail('upload should not start'),
    close: () => { closed = true },
  }
  await assert.rejects(deploy(getOptions(credentials), client, localDir), error)
  assert.equal(attempts, 1)
  assert.equal(closed, true)
})

test('explains how to correct a plaintext rejection without retrying', async t => {
  const localDir = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-folder-'))
  t.after(() => fs.rmSync(localDir, { recursive: true }))
  const error = Object.assign(new Error('421 Please reconnect using TLS security mechanisms.'), { code: 421 })
  let attempts = 0
  const client = {
    access: async () => { attempts++; throw error },
    close: () => {},
  }
  await assert.rejects(
    deploy(getOptions({ ...credentials, FTP_SECURE: 'false' }), client, localDir),
    err => err.cause === error && /FTP_SECURE=explicit/.test(err.message)
  )
  assert.equal(attempts, 1)
})

test('explains certificate hostname mismatches without disabling verification', async t => {
  const localDir = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-folder-'))
  t.after(() => fs.rmSync(localDir, { recursive: true }))
  const error = Object.assign(new Error('certificate mismatch'), { code: 'ERR_TLS_CERT_ALTNAME_INVALID' })
  let attempts = 0
  const client = {
    access: async options => {
      attempts++
      assert.equal(options.secure, true)
      assert.notEqual(options.secureOptions.rejectUnauthorized, false)
      throw error
    },
    close: () => {},
  }
  await assert.rejects(
    deploy(getOptions(credentials), client, localDir),
    err => err.cause === error && /hostname provided by your hosting provider/.test(err.message)
  )
  assert.equal(attempts, 1)
})

test('closes the client when the build directory is missing', async t => {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'deploy-folder-'))
  t.after(() => fs.rmSync(parent, { recursive: true }))
  let closed = false
  const client = {
    access: async () => assert.fail('connection should not start'),
    close: () => { closed = true },
  }
  await assert.rejects(deploy(getOptions(credentials), client, path.join(parent, 'missing')), { code: 'ENOENT' })
  assert.equal(closed, true)
})
