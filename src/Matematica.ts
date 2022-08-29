export let versao: string = '1,0';          //EXPORT EM ES6

function somar(x: number, y: number): number{
    return x + y;
}
function subtrair(x: number, y: number): number{
    return x - y;
}
function multiplicar(x: number, y: number): number{
    return x * y;
}

export default {
    somar,
    subtrair,
    multiplicar,
    versao
};

// module.exports.somar = somar;           EXPORTAÇÃO POR MEIO DO COMMOM.JS
// module.exports.subtrair = subtrair;
// module.exports.multiplicar = multiplicar;

