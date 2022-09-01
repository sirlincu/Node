import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRouters from './routers/index';
import painelRouters from './routers/painel';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}))

server.use(mainRouters);
server.use('/painel', painelRouters);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(80);
