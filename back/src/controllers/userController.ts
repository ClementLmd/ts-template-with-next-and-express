import { Request, Response } from 'express';
import { createUser } from '../use-cases/createUser';
import { getAllUsers, getUserById } from '../use-cases/getUser';

export const createUserController = async (req: Request, res: Response) => {
  console.log('req.body', req.body);
  try {
    const userData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
    const newUser = await createUser(userData);
    res.status(200).json(newUser);
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.status(200).json(user);
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
