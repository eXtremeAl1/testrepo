//Global scope
var globalVar ="Ja sam globalna varijabla";
let globalLet ="i ja sam isto globalna variabla za let";
const globalConst ="Ja sam globalna konstanta";

{
    // block scope
    var blockVar ="Ja sam block-Scoped Var";
    let blockLet ="Ja sam block-scoped let";
    const blockConst ="Ja sam block-scoped const";
}
//global scope
console.log(globalVar);//ispis globalne var 
console.log(globalLet);//ispis globalne let
console.log(globalConst);// ispis globalne const varijable

//block Scope
//console.log(blockVar);
//console.log(blockLet);
console.log(blockConst);

function show (){
    var functionVar =" ja sam block var funcion";
    let funcionLet="ja sam block let funcion";
    const funcionConst ="ja sam block konstanta konstanta";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);