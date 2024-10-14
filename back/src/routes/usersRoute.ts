import { Router } from 'express';
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from '../controllers/userController';

const router = Router();

router.post('/', createUserController);
router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);

export default router;
