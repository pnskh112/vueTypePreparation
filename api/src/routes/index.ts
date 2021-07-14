import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { TestService } from '../services/TestService';
const app = express();
app.use(helmet());
app.use(cors());

const router = express.Router();

router.get('/helloworld',(req,res) => {
  res.status(200).send({ message: 'Hello, world' })
});

app.use((req,res) => {
  res.status(404);
  res.render('error', {
    param: {
      status: 404,
      message: 'not found'
    },
  });
});

router.get('/test',(req, res, next) => {
  const service = new TestService();
  service
    .test()
    .then(result => res.status(200).send(result))
    .catch(next);
});

module.exports = router;