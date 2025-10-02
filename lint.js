const { execSync } = require('child_process');

console.log('Running ESLint...');
const eslintResult = execSync('npm run lint', { cwd: process.cwd(), stdio: 'inherit' });

if (eslintResult.status !== 0) {
  console.error('ESLint failed');
  process.exit(eslintResult.status);
}

console.log('ESLint completed successfully');
process.exit(0);
