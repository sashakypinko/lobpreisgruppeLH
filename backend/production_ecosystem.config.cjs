module.exports = {
  apps: [{
    name: 'volvotyre_PRODUCTION',
    script: 'yarn',
    args: 'start',
    cwd: '/home/deploy/backend_production/current',
    interpreter: '/bin/bash',
    error_file: '/home/deploy/backend_production/logs/err.log',
    out_file: '/home/deploy/backend_production/logs/out.log',
    log_file: '/home/deploy/backend_production/logs/combined.log',
    time: true,
    env: {
      environment: 'production',
      NODE_ENV: 'production',
      PORT: 7001,
    },
  }],
};
