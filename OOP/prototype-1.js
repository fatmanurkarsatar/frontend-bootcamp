//prototype objeler arasında kalıtım yapmamızı sağlar

// const obje = new Object();
// const obje2 = new Object();
// obje.name = "melis";
// console.log(obje);
// console.log(obje2);

// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos; (name, age) =>{ 
//         console.log(this.name,this.age)
//     }; 
// }
//   const emp1 = new Employee("muhammet",29);
//   const emp2 = new Employee("mehmet",45);
// console.log(emp1);

function Employee(name,age) {
    this.name = name;
    this.age = age;
   
  }
  Employee.prototype.showInfos; (name,age) =>{
    console.log("isim: "+ this.name + "yaş: " + this.age);
  }

  const emp1 = new Employee("Mustafa",45);
  const emp2 = new Employee("oğuz",56);
  console.log(emp1);
  console.log(emp2);