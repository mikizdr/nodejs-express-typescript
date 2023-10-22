import { Request, Response } from 'express';

export const welcome = (req: Request, res: Response): Response => {
    return res.send({ message: 'Welcome to home page of the application' });
};
