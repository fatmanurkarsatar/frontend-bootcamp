//id değerine göre element seçme

//id'si todo-form olan elementi seçer
let element;
element = document.getElementById("todo-form");
console.log(element); //id'yi yanlış yazarsan null döner

//class'a göre seçme
element = document.getElementsByClassName("list-group-item");
console.log(element);

//etiket ismine(tag) göre element seçme
element = document.getElementsByTagName("li"); //sayfadaki tüm li'leri seçer

//query selector bu üçünün birleştirilmiş halidir
//class'a göre seçim yaparsak ilk bulduğu elemanı alır
//tek bir element döner

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");
element = document.querySelector("li"); //sayfadaki ilk li elementini seçer

//birden çok element seçmek istediğimizde
element = document.querySelectorAll(".list-group-item");

console.log(element);



