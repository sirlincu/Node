"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versao = void 0;
exports.versao = '1,0'; //EXPORT EM ES6
function somar(x, y) {
    return x + y;
}
function subtrair(x, y) {
    return x - y;
}
function multiplicar(x, y) {
    return x * y;
}
exports.default = {
    somar,
    subtrair,
    multiplicar,
    versao: exports.versao
};
// module.exports.somar = somar;           EXPORTAÇÃO POR MEIO DO COMMOM.JS
// module.exports.subtrair = subtrair;
// module.exports.multiplicar = multiplicar;
