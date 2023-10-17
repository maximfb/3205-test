import { Router } from 'express';
import { findAll, findByData } from '../services/entity';

const router = Router();

router.get('/', findAll);
router.post('/', findByData);

export default router