const shell = require('shelljs');

const env = process.env.NODE_ENV;

if (env === 'production') {
  console.log('Starting Production...');
  shell.exec('npm run serve');
} else {
  console.log('Starting Development...');
  shell.exec('npm run dev');
}
