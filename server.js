const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});
const app = require('./app');

// SERVER
const port = process.env.PORT || 3000;
console.log(
  `Run node env on ${process.env.NODE_ENV} mode`
);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
