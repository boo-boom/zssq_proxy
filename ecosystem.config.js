module.exports = {
  apps : [{
    name: 'ZSSQ-API',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '140.143.239.240',
      port: 22,
      ref  : 'origin/master',
      repo : 'git@github.com:boo-boom/zssq_proxy.git',
      path : '/home/ubuntu/www/zssq_proxy',
      "ssh_options": "StrictHostKeyChecking=no",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
