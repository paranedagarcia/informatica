# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### FTP/FTPS

Create a `.env` file in the project root (it is ignored by Git):

```dotenv
FTP_HOST=ftp.example.com
FTP_USER=your-username
FTP_PASSWORD=your-password
FTP_REMOTE_PATH=/public_html
FTP_SECURE=explicit
```

Run `node scripts/deploy-folder.js` to upload the contents of `build` recursively.
Existing files with matching names are overwritten; unrelated remote files are not removed.
The directory must already have been built. Note that `npm run build` currently also runs
the separate `scripts/deploy-ftp.js` post-build script.

Explicit FTPS on port 21 is the default. Set `FTP_SECURE=implicit` for implicit FTPS
(default port 990), or `FTP_SECURE=false` for unencrypted FTP. Override the port with
`FTP_PORT`. TLS certificates are verified; if the certificate is issued to a different
hostname, use the matching FTP hostname supplied by your hosting provider for `FTP_HOST`.
If connecting through an alias, `FTP_SECURE_SERVERNAME` can be set to the provider's
verified certificate hostname. Never disable verification. Existing environment variables
take precedence over `.env`; check them if plaintext FTP is used unexpectedly.

### GitHub Pages

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
