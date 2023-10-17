import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';

dotenv.config();

import rootRouter from './routes';

const app = express();
const port = process.env.PORT ?? 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rootRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${ port }`);
});