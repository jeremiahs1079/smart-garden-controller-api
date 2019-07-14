import { Router, Request, Response, NextFunction } from 'express';
import middleware from '../middleware';

type Wrapper = ((router: Router) => void);

type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void> | void;

type Route = {
    path: string;
    method: string;
    handler: Handler | Handler[];
};
    


export const applyMiddleWare = (middleware: Wrapper[], router: Router) => {
    for (const f of middleware) {
        f(router);
    }
};

export const applyRoutes = (routes: Route[], router: Router) => {
    for(const route of routes) {
        const {method, path, handler} = route;
        (router as any)[method](path, handler);
    }
};