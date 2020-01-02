module.exports = {
  apps: [
    {
      name: 'game-ws',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memorty_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
