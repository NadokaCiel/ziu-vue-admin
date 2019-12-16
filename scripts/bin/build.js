const minimist = require('minimist'),
  argv = minimist(process.argv.slice(2)),
  PRJ_ENV = argv._[0] || 'production',
  bundleAnalyzerReport = argv.report || (argv.r || false);

// 编译环境配置
const conf = {
  development: require('../etc/development'),
  testing: require('../etc/testing'),
  staging: require('../etc/staging'),
  production: require('../etc/production'),
};

process.env.PRJ_ENV = PRJ_ENV;

if (bundleAnalyzerReport && PRJ_ENV !== 'development') {
  conf[PRJ_ENV].command.argvs.push('--report');
}

execFn(conf[PRJ_ENV].command);

function execFn({ cmd = 'npm', argvs = [] } = {}) {
  let exec = require('child_process').spawn;

  exec = exec(cmd, argvs, Object.assign({
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  }, {}));

  exec.on('exit', () => {
    console.log('\n System exit! \n');
  });
}
