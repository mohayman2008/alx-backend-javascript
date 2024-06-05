const process = require('process')

process.stdin.setEncoding('utf8');
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', async () => {
  const name = await process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
