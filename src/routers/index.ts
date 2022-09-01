import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    // pegar os produtos do banco de dados
    // organizar as informações desses produtos
    // envia para o template engine
    let user = {
        name: 'cleito',
        age: 24
    }
    let showOld: boolean = false;

    if(user.age > 20){
        showOld = true;
    }

    res.render('pages/home', {
        user,
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 30}
        ],
        frasesDoDia: [
            'Bom dia',
            'O importante é o caminho',
            'Boa noite'
        ]
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.render('pages/sobre');
});

router.get('/nome', (req: Request, res: Response)=>{
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
});


router.get('/idade', (req: Request, res: Response)=>{
    res.render('pages/idade');
});

router.post('/idade', (req: Request, res: Response)=>{
    let mostrarIdade: boolean = false;
    let idade: number = 0;
    
    if(req.body.ano){
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento; 
        mostrarIdade = true;
    }
    
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
})

export default router;