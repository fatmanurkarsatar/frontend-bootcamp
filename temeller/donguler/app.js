//while donguleri

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i = 10;

// while(i>0){
//     console.log(i);
//    i-=2;
// }

//break- continue kelimeleri

// let i = 0;     //break döngüyü tamamen bitirir
// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

// let i = 0;  
// while(i<10){
//     if(i ==3 || i== 5){
//         i++; 
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//do while döngüleri
/*let  i = 0;
do{
    console.log(i);
    i++;
}while(i<10);
*/

const langs = ["python","java","javascript"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);
//     index++;
// }

// for(let index =0;index<langs.length;index++){
//     console.log(langs[index]);
// }

//for-each
// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });

// const users = [
//     {name:"kerim",age:23},
//     {name:"melek",age:29},
//     {name:"kerime",age:33}
// ];

// const names = users.map(function(user){
//     return user.name;
// });
// const age = users.map(function(user){
//     return user.age
// });
// console.log(names); // ['kerim', 'melek', 'kerime']
// console.log(age);   // [23, 29, 33]

const user = {
    name: "fatma",
    age: 21
};

for(let key in user){
    console.log(key,user[key]);
}
