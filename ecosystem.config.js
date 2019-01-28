module.exports = {
  apps: [
    {
      name: "nodejs-pm2-ec2-app",
      script: "./bin/www",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-17-39-8.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/home.pem",
      ref: "origin/master",
      repo: "git@github.com:Jaykong/nodejs-pm2-ec2-app.git",
      path: "/home/ubuntu/my-app",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
