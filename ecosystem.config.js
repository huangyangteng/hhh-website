module.exports = {
  apps: [{
    name: 'website',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
    },
  }],
}
