import express from 'express';
import mainRouters from './routers/index';
import painelRouters from './routers/painel';

const server = express();

server.use(mainRouters);
server.use('/painel', painelRouters);

server.listen(80);
