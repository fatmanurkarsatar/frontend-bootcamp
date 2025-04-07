//scope  kavramı : JavaScript'de "scope" (kapsam), bir değişkenin erişilebilir olduğu ve kullanılabileceği alanı belirtir. Bir değişkenin kapsamı, nerede tanımlandığına bağlı olarak belirlenir.

//global scope
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func(){
//     var value1 = 40; //buradaki değerler sadece o fonksiyona özgü oluyor 
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3);
// }
// Func();

// if(true){
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3);
// }
// console.log(a); //var değişkenleri dışarıda var olabilirken let ve const değşikenleri olmuyor bu yüzden                
// console.log(b); //b yi yazdırmaz ve hata verir           
// console.log(c);

// console.log(value1,value2,value3);
const database = "123456";

if(true){
    const database = "456789";  
}
console.log(database);