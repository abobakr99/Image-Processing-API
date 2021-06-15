import express from 'express';
import sharp from 'sharp'
import fs from 'fs'
//import strings from '../../utilities/strings';

const images = express.Router();


images.get('/', (req, res) => {
    let width:number, height:number

    const filename = req.query.filename;
    console.log('======== '+filename)
    const widthStr = req.query.width;
    const heightStr= req.query.height;

    if (typeof(widthStr) == 'string') {
        width = parseInt(widthStr)
    }
    if (typeof(heightStr) == 'string') {
        height = parseInt(heightStr)
    }
    resize('nodejs.png', width, height).pipe(res)

    res.send({
        'filename': filename
       // 'width': width,
       // 'height': height
    });
});

const resize = (path:string, width:number, height:number)=> {
    const readStream = fs.createReadStream(path)
    let transform = sharp()
  
   // if (format) {
    //  transform = transform.toFormat(format)
  //  }
  
    if (width || height) {
      transform = transform.resize(width, height)
    }
  
    return readStream.pipe(transform)
  }
export default images;
