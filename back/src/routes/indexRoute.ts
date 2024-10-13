import { Router } from 'express';
import { getHelloWorld } from '../controllers/getHelloWorld';

const router = Router();

router.get('/', getHelloWorld);

export default router;
