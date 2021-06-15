import express from 'express';
import students from './api/students';
import teachers from './api/teachers';
import images from './api/images';
import toJson from './api/toJson';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('routes are here ');
});

routes.use('/students', students);
routes.use('/teachers', teachers);
routes.use('/convert', toJson);
routes.use('/images', images);

export default routes;
