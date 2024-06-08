import express from 'express';

import router from './routes/index';

const DBPath = process.argv[2] || '';
const PORT = 1245;
const app = express();

app.use((req, res, next) => {
  req.DBPath = DBPath;
  next();
});

app.use(router);
app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

export { app as default, DBPath };
