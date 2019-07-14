import http from 'http';
import express from 'express';
import { applyMiddleWare, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers'
import routes from './services';

process.on('uncaughtException', e => {
    console.error(e);
    process.exit(1);
});

process.on('unhandledRejection', e => {
    console.error(e);
    process.exit(1);
});

const router = express();
applyMiddleWare(middleware, router);
applyRoutes(routes, router);
applyMiddleWare(errorHandlers, router);

const {PORT = 3000} = process.env;
const server =  http.createServer(router);

server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}...`));