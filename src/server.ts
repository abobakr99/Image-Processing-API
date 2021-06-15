import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api',express.static('public'))

app.use('/api', routes);

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
