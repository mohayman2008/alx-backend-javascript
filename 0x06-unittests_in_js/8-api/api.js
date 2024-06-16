const express = require('express');

const PORT = 7865;
const app = express();

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = app;
