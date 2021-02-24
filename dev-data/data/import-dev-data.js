const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log("Can't connect to the database", err);
  });

// reading the file;
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf8')
);

// import the data into the database;

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded !');
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

// Purge all existing data from db
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted !');
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
