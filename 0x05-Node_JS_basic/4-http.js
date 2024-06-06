const { createServer } = require('http');

function requestListener(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!', 'utf8');
}

const app = createServer(requestListener);
app.listen(1245, () => {
  console.log(`Server is running on port: ${1245}`);
});

module.exports = app;
