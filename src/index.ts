import validator from 'validator';

let name: string = "lcu";

if(validator.isLowercase(name)){
    console.log(`A string ${name} é toda minuscula`);
}else {
    console.log(`A string ${name} não é toda minuscula`);
}