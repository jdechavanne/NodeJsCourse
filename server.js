const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DATABASE_URL, options)
  .then(() => {
    console.log(
      'successfully connected to the database'
    );
  })
  .catch((err) => {
    console.log(
      'error connecting to the database',
      err
    );
    process.exit();
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
