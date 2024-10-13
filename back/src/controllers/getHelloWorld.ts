import { Request, Response } from 'express';
import { getHelloWorldService } from '../use-cases/getHelloWorldService';

export const getHelloWorld = async (req: Request, res: Response) => {
  const hello = await getHelloWorldService();
  res.status(200).json(hello);
};
