const myset = new Set();

myset.add(100);
myset.add(0.3);
myset.add("murat");
myset.add({a:1,b:2});
console.log(myset)

//bunun kısayolu 
const myset2 = new Set([100,0.3,"murat"]);
//console.log(myset2);
//console.log(myset2.size);
// console.log(myset2.delete("murat"));
// console.log(myset2);

//has metodu ile girilen değer bu sette var mı on bakar
//console.log(myset2.has(100)); //t-f döndürür

//forEach
// myset.forEach(function(value) {
//     console.log(value);
// });

//for of
// for(let value of myset){
//     console.log(value);
// }

//setlerden array oluşturma

const array = Array.from(myset);
console.log(array);