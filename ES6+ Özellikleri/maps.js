//mapler - key(anahtar) - value(değer)

// let myMap = new Map();
//console.log(typeof myMap);

// const key1 = "fatma";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// myMap.set(key1,"string");
// myMap.set(key2,"object");
// myMap.set(key3,"function");

//get 
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

//map boyutu
//console.log(myMap.size);

// const cities = new Map();
// cities.set("ankara",5);
// cities.set("new york",15);
// cities.set("izmir",19);

//for each
// cities.forEach(function(value,key) {
//     console.log(key,value);  
// });

//for of
// for(let [key,value] of cities){
//     console.log(key,value);
// }

//salt keys alacaksak
// for (let key of cities.keys()){
//     console.log(key)
// }

//salt değer alacaksak
// for (let value of cities.values()){
//     console.log(value)
// }

//arraylerden map oluşturma
// const array = [["key1","value1"],["key2","value2"]];
// const lastMap = new Map(array);
// console.log(lastMap);

//maplerden array oluşturma
const cities = new Map();
cities.set("ankara",5);
cities.set("new york",15);
cities.set("izmir",19);

const array = Array.from(cities);
//[["ankara",5],["new york",15],["izmir",19]]
console.log(array);