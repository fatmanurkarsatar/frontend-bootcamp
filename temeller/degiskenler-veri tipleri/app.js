// değişken oluşturma

// var a = 45;
// var b = 4;
// var c = 5;
// console.log(a,b,c);

//primitive veri tipleri
// var a = 10; //number
// var b = 3.14; //number
// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);

//string 
// var name = "mustafa";
// console.log(name);
// console.log(typeof name);

// boolean 
// var a = true;
// console.log(a);
// console.log(typeof a);

// var a = null;
// console.log(a);
// console.log(typeof a);  //çıktı objext verir hatalıdır.

// var a; 
// console.log(a); //undefined değerini döndürür


//referance veri tipleri
// var numbers = [1,2,3,4,5,6];
// console.log(numbers);
// console.log(typeof numbers); //object veri tipi 
// console.log(numbers[0]);

// var person = {
//     name: "nur",
//     age: 25
// }
// console.log(person);

// var date = new Date();

// console.log(date);
// console.log(typeof date);

// var merhaba = function(){
//     console.log("merhaba");
// }
// console.log(merhaba);
// console.log(typeof merhaba);

//primitive- referenace farkı
//ilkel veri tipi
 var a = 10;
 var b = a;
 console.log(a,b);  //10 10
 a=20;
 console.log(a,b); //20 10

//referans veri tipi
var a = [1,2,3];
var b = a;
console.log(a,b);  //[1,2,3] [1,2,3]

a.push(4);

console.log(a,b);  //[1,2,3,4] [1,2,3,4]

