import { Response, Request } from "express";

export const home = (req: Request, res: Response)=>{
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
};