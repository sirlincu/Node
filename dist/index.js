"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let name = "lcu";
if (validator_1.default.isLowercase(name)) {
    console.log(`A string ${name} é toda minuscula`);
}
else {
    console.log(`A string ${name} não é toda minuscula`);
}
