import express from 'express';
const teachers = express.Router();

teachers.get('/', (req, res) => {
  res.send(' Teachers are here ');
});

export default teachers;
