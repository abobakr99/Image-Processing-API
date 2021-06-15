import express from 'express';
const students = express.Router();

students.get('/', (req, res) => {
  res.send(' Students are here ');
});

export default students;
