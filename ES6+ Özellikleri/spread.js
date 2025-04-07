//spread operator:değerleri aralıklı yazmayı sağlar

// const langs = ["python","c","java","c++"];
// console.log(...langs); //spread operatörünü çalıştırır yani değerler arasında boşluk olur

// const langs2 = ["javascript","ruby",...langs];
// console.log(langs2); //dillerin hepsini yan yana yazdı

// const numbers = [1,2,3,4,5,6,7,8,9];
// const [a,b,...numbers2] = numbers; 
// console.log(a,b);
// console.log(numbers2); //3,4,5,6,7,8,9 yazdı

// const addNumbers = (a,b,c) => console.log(a+b+c);
// const numbers = [100,200,300];
// addNumbers(...numbers);