import express, { Request, Response} from 'express';

const server = express();

const Homepage = (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
}; 


server.get('/noticia/:slug', Homepage);

server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
});

server.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params;

    res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

//site.com/voo/gru-rec


server.listen(80);
