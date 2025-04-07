let value;

const numbers = [43,56,33,25,98,5];

//const numbers2 = new Array(1,56,98,33); böyle de tanımlanabilir

const langs = ["python","java","c++","js"];
const a = ["merhaba",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[5]; //son elemanı getirdi
value = numbers.length-1; //son elemanı getirdi

//herhangi bir indeksteki değeri değiştirme

numbers[2] = 1000;  //2. indise 1000 yazdı.

value = numbers;
value = numbers.indexOf(5);

//array sonuna değer ekleme  "push" metodu

numbers.push(89); //arrayın sonuna ekledi

numbers.unshift(77);  //arrayın başına ekledi

//arrayın sonundan değer atma
numbers.pop();

//arrayın başından değer atma
numbers.shift();

//verilen aralıktaki değerleri atma
numbers.splice(0,3);


//arrayi tersine çevirme
numbers.reverse();

//sıralama
numbers.sort();  //düzgün sıralama yapamadı

value = numbers.sort(function(x,y){ //küçükten büyüğe sıraladı
    return x-y;
})

value = numbers.sort(function(x,y){  //büyükten küçüğe
    return y-x;
})
console.log(value);