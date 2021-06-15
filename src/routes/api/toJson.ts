import express from 'express';
import csv from 'csvtojson';
import { promises as fsPromises, promises } from 'fs';

const toJson = express.Router();

//let filePath: string = '.../users.csv'
//const csv=require('csvtojson')
async function readFile(filePath: string) {
  try {
    const data = await promises.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

toJson.get('/', (req, res) => {
  readFile('./sample.txt');
  console.log('Directroy ==== :' + __dirname);
  // console.log("File ==== :"+ filePath)

  res.send(' JSon Data ');
});

export default toJson;
