type Product = {
    title: string,
    price: number
};


const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto Z', price: 30},
    {title: 'Produto G', price: 50}
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    // manda um preço e retorna uma lista com o filtro do preço
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};