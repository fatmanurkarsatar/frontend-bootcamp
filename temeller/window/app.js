//alert("selam");

//confirm işlemi
// const cevap = confirm("emin misiniz?");
// console.log(cevap);

// if(cevap){
//     console.log("siliniz");
// }else{
//     console.log("silmeyiniz");
// }

//prompt komutu
// const cevap = prompt("2 + 1 = ?");
// if(cevap==="3"){
//     console.log("doğru cevap")
// }else{
//     console.log("yanlış cevap");
// }

//location işlemleri

// let value;

// value = window;
// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;

//sayfa yenileme işlemi
// if(confirm("sayfa yenilensin mi?")){
//     window.location.reload();
// }else{
//     console.log("sayfa yenilenmedi")
// }
// console.log(value);

value = window.outerHeight;  //sayfanın uzunluk değerini ölçer
value = window.outerWidth;   //sayfanın genişlik değerini ölçer

value = window.innerHeight;  //sayfanın kenarlarını almadan uzunluğunu ölçer
value = innerWidth;         //sayfanın kenarlarını almadan genişliğini ölçer

value = window.scrollX;
console.log(value);