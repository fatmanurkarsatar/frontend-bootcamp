//window object
//console.log(this);

//document görütülemek için
// let value;
// value = document;
// value = document.all; //document'in elementlerini gösterir
// value = document.all.length; //documentteki elementlerin sayısını verir
// value = document.all[0];  //html etiketine gider.
// value = document.all[document.all.length-1]; //script etiketini gösterir

// const elements = document.all; //html collection
// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }

// const collections = Array.from(document.all); //foreach kullanabilmek için arraya çevirdik.
// collections.forEach(function(collection){
//     console.log(collection);
// });

// value = document.all[5]; //body etiketine eriştik
// value = document.body; //ile de body etiketine erişebiliriz
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.URL;
// value = document.characterSet;

// console.log(value);

//part-2

let value;

value = document;

//scriptler
value = document.scripts;
value = document.scripts[0];

//linkler
value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].getAttribute("href");
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].classList;


//formlar
value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms[0].name; //sıfırıncı indexteki değerin name özelliğini aldık




console.log(value);

