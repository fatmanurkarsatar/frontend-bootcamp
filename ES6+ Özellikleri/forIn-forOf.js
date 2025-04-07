const person = {
    name: "Nur Çimen",
    age: 23,
    salary: 3000,
};

const langs = ["Python","Java","C++","Php"];

const name = "Çimen";

//for ın: keylerde işlem yapar
for(let prop in person){
    console.log(prop); //sadece key leri verir
    console.log(prop,person[prop]) //keylerle birlikte değerleri de gösterir 
}

//array
for(let index in langs){ //index numaralarını verir
    console.log(index,langs[index]);
}

for (let index in name){
    console.log(index,name[index])
} //namedeki ismin tek tek harf indexsini verir

//for of: değerlerde iş yapar maps ve setlerde kullanılır
for (let value of person){ //hatalı kullanım
    console.log(value);
}

//doğru kullanım  // ç i m e n olarak alt alta yazdırdı
for(let value of name){
    console.log(value);
}