import { Router } from 'express';
import { getHelloWorldController } from '../controllers/getHelloWorldController';

const router = Router();

router.get('/', getHelloWorldController);

export default router;
