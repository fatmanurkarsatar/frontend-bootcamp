 //tarayıcı
 //iki tane aynı isimli değişken olduğunda son tanımlanan değişkendeki değer yazılır

// var controllerB=(function(){
//     var firstName = "leyla";

//     return {
//         firstName
//     }
// })();

// console.log(controllerA.firstName);
// console.log(controllerB.firstName);

const scriptX = require("./scriptX");

scriptX.log('çınar');
console.log(scriptX.name);
//console.log(scriptX.age); //undefined hatası alınır