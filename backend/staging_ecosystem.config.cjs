module.exports = {
  apps: [{
    name: 'volvotyre_STAGING',
    script: 'yarn',
    args: 'start',
    cwd: '/home/deploy/backend_staging/current',
    interpreter: '/bin/bash',
    error_file: '/home/deploy/backend_staging/logs/err.log',
    out_file: '/home/deploy/backend_staging/logs/out.log',
    log_file: '/home/deploy/backend_staging/logs/combined.log',
    time: true,
    env: {
      environment: 'staging',
      NODE_ENV: 'staging',
      PORT: 6001,
    },
  }],
};
