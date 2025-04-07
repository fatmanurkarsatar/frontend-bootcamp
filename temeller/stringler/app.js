// let value;

// const firstName = "louis";
// const lastName = "Armstrong";

// const langs = "java,python,c++";

// value = firstName + lastName;

// value = firstName + " " + lastName;

// value = "Fatma Nur";

// value = value + " " + "karsatar"; //value += " " + "karsatar"; aynısı


// value = firstName.length;
// value = firstName.concat("nur");

// value = firstName.toUpperCase();  //hepsini büyük harf yaptı
// value = firstName.toLowerCase();  //hepsini küçük harf yaptı

// value = firstName[0];  //l
// value = firstName[4];  //s    
// value = firstName.length-1;  //s

// //indexof
// value = firstName.indexOf("l");  //0
// value = firstName.indexOf("u");  //2

// //char at
// value = firstName.charAt(0); //0. indekxte hangi değer varsa onu döndürür

// //split
// value = langs.split(",");   //['java', 'python', 'c++']

// //replace 
// value = langs.replace("python","css"); //python yerine css yazdı

// //includes

// value = langs.includes("java"); //langs'in içinde java var mı true-false //true
// console.log(value);

//Template Literal

const name = "selin";
const department = "yazılım";
const salary = 4500;

//const a = "isim: " + name + "\n" + "departman: " + department + "\n" + "maaş: " + salary;
//const a = `ìsim:${name}\ndepartman:${department}\nmaaş:${salary}\n`;
//yukarıdaki ikisi aynı sonucu verir

// const html  = "<ul> " + 
//               "<li>" + name + "</li>" + 
//               "<li>" + department + "</li>" + 
//               "<li>" + salary + "</li>" + 
//               "</ul> ";

// document.body.innerHTML = html;

function a(){
    return "merhaba";
}
const html = `
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li>
            <li>${a()}</li>
        </ul>
        `;

document.body.innerHTML = html;