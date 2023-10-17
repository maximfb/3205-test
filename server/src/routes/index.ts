import { Router } from 'express';
import records from './entities';

const rootRouter = Router();

rootRouter.use('/entities', records)

export default rootRouter