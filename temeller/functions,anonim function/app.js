//fonksiyon tanımlama

// function merhaba(){  //konsola hiçbirşey yazmaz
//     console.log("merhaba");
// }
// merhaba(); //fonksiyonu çağırarak yazdırdık.

// function square(x){
//     return x*x;
//     console.log("naber"); //hiçbir zaman çalışmaz
// }
// function cube(x){
//     return x*x*x;
// }

// let a = square(12);
// a = cube(a);
// console.log(a);

// function merhaba(){
//     return "merhaba";
// }
// console.log(merhaba());

//function Expression

// const merhaba = function(name){
//     console.log("merhaba" + " " +  name);
// };
// merhaba("melis");

//ımmediately Invoked Function Expression (IIFE)
//tanımlandığı yerde çalışan fonksiyon

// (function(name){
//     console.log("merhaba: " + name);
// })("murat");

const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);