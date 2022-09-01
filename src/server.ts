import express, { Request, Response } from 'express';
import path from 'path';
import mainRouters from './routers/index';
import painelRouters from './routers/painel';

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouters);
server.use('/painel', painelRouters);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(80);
