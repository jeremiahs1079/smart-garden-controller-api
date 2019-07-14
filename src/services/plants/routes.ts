import { Request, Response } from 'express';

export default [
    {
        path: '/plants',
        method: 'get',
        handler: async (req: Request, res: Response) => {
            res.send('Hello Plants');
        }
    }
];