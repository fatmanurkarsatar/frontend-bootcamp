let value;

// const value1 = 10;
// const value2 = 4;

//aritmetik operatörler

// value = value1 + value2;   //14
// value = value1 - value2;   //6
// value = value1 * value2;   //40
// value = value1 / value2;   //2.5
// value = value1 % value2;   //2

// value = Math.PI; //pi sayısı görülür
// value = Math.E;  //doğal logaritme kay sayısı

// value = Math.round(3.6); //4  sayıyı yukarı doğru yuvarlama yapar
// value = Math.round(3.5); //4
// value = Math.round(3.2); //3
// value = Math.ceil(3.2);  //4
// value = Math.ceil(3.7);  //4
// value = Math.floor(3.2); //aşağı yuvarlar 3
// value = Math.floor(3.7); //3

// value = Math.sqrt(3); //3'ün karekökünü alır 1.7320..
// value = Math.sqrt(16); //4

// value = Math.abs(-10); //mutlak değer alır 10

// value = Math.pow(8,3);  //üs alma işlemi yapar 8*8*8
// value = Math.pow(5,2);  //25

// value = Math.max(10, -1, 100, 89);  //değerler arassından en yükseğini döndürecek
// value = Math.min(10, -1, 100, 89);  //değerler arassından en düşüğünü döndürecek

// value = Math.random();  //0-1 arasında ondalıklı değer üreticek
// value = Math.random() * 20; //0-20 arasında değer üretecek 0 dahil 20 değil
// value = Math.random() * 20 + 1; //1-21 arasında değer üretecek 1 dahil 21 deil
// value = Math.floor(Math.random() * 20 + 1); //1-20 dahil sayı üretecek


//if koşulları

// const error = true;
// if(error == false){          //f döndürür
//     console.log("t");
// }else{
//     console.log("f");
// }

// const user = "mmc";
// if(user === "mc"){
//     console.log("kullanıcı bulundu");
// }else{
//     console.log("kullanıcı bulunamadı");
// }

// const sayi = -2;
// if(sayi == 5){
//     console.log("sayı pozitiftir");
// }else if(sayi == 0){
//     console.log("sayı sıfırdır");
// }else{
  //   console.log("sayı negatiftir");
 //}


//ternary operatör
// const number = 120;
// console.log(number === 100 ? "sayı 100":  "sayı 100 değil")

// if(number === 100) console.log("sayı 100");
// else console.log("sayı 100 değil");

//switch case

const process = 2;

switch(process){
    case 1:
        console.log("işlem 1");
        break;
    case 2:
        console.log("işlem 2");
        break;
    case 3:
        console.log("işlem 3");
        break;
    default:
        console.log("geçersiz işlem")
    
}


