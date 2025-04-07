//destructing: objelerden değerleri daha kolay yoldan almayı sağlar

// let number1,number2;
// arr = [100,200,300,400];
// number = arr[0];
// number1 = arr[1];
// console.log(number1);

//destructing
//[number1,number2] = arr;
//yukarıda otomaktikmen birinci ve ikinci indeksin değeri 100 ve 200 oldu
//console.log(number1,number2);

//obje destructing
// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:number1,c:number2,e:number3} = numbers;
// console.log(number1,number2,number3);

//fucntion destructing
// const getLangs = () => ["python","java","c"];

// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1,lang2,lang3);

//obje
// const person = {
//     name: "Fatma Nur",
//     year: 2003,
//     salary: 0,
//     showInfos : () => console.log("bilgiler gösteriliyor...")

// }

// const {name:isim, year:yıl, salary:maas, showInfos:bilgileriGoster} = person
// console.log(isim, yıl, maas);
// bilgileriGoster();