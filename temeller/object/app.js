// let value;

// const programmer = {
//     name: "fatma nur",
//     age : 21,
//     email: "nurkarsatar@gmail.com",
//     langs : ["java","python","javascript"],

//     address: {
//         city : "Kahramanmaraş",
//         street: "Süleymanşah"
//     },

//     work : function(){
//         connsole.log("programcı çalışıyor..")
//     }

// }

// value = programmer;

// value = programmer.email;
// //value = programmer["email"];

// value = programmer.langs;

// value = programmer.address;
// value = programmer.address.city;

// console.log(value);


//date-object

let value;

const now = new Date();  //şu anki zamanı almamızı sağlar

const date1 = new Date("9-19-1993 06:15:00");

const date2 = new Date("Septemner 19 1993");

const date3 = new Date("9/19/1993");

value = date1;

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();

//eğer doğum bilgilerini değiştirmek istiyorsak

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1994);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);

console.log(value);

