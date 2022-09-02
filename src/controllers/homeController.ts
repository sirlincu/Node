import { Response, Request } from "express";

import { Product } from '../models/Product';

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

    let list = Product.getAll();
    let expansiveList = Product.getFromPriceAfter(16);

    res.render('pages/home', {
        user,
        showOld,
        products: list,
        expensives: expansiveList,
        frasesDoDia: [
            'Bom dia',
            'O importante é o caminho',
            'Boa noite'
        ]
    });
};