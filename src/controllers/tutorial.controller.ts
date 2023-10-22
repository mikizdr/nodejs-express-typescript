import { Request, Response } from 'express';

export default class TutorialController {
    async index(
        req: Request,
        res: Response
    ): Promise<Response<any, Record<string, any>>> {
        try {
            return res.status(200).json({
                message: 'All tutorials.',
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async create(
        req: Request,
        res: Response
    ): Promise<Response<any, Record<string, any>>> {
        try {
            return res.status(201).json({
                message: 'Tutorial created successfully.',
                reqBody: req.body,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async show(
        req: Request,
        res: Response
    ): Promise<Response<any, Record<string, any>>> {
        try {
            return res.status(200).json({
                message: 'One tutorial found',
                reqParamId: req.params.id,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async update(
        req: Request,
        res: Response
    ): Promise<Response<any, Record<string, any>>> {
        try {
            return res.status(200).json({
                message: 'Tutorial updated successfully.',
                reqParamId: req.params.id,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }

    async destroy(
        req: Request,
        res: Response
    ): Promise<Response<any, Record<string, any>>> {
        try {
            return res.status(200).json({
                message: 'Tutorial destroyed successfully.',
                reqParamId: req.params.id,
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error!',
            });
        }
    }
}
