import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.send('HomePage.');
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário para Contato.');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa.');
});

router.get('/noticias', (req: Request, res: Response)=>{
    res.send('Lista de notícias.');
});

export default router;