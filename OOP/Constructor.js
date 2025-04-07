// console.log(this); //global scope da en temel obje window objesidir.

// const emp1 = {
//     name:"emine",
//     age: 45,
//     showInfos: () =>  {console.log("bilgiler gösteriliyor...")}
//     };

// const emp2 = {
//     name: "eliz",
//     age: 25
// };
// emp1.salary = 4500; //sonradan özellik ekledik
// console.log(emp1.showInfos());

//constuctor metod

// function Employee(){
//     this.name = "melis";
// }

// const emp1 = new Employee();
// const emp2 = new Employee();
// emp2.name = "sude";
// console.log(emp1);
// console.log(emp2.name);

function Employers(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name,this.age,this.salary);
    }
    //console.log(this); //emp3 ve emp4 değerlerini yazdırdı
}

const emp3 = new Employers("melissa",45,45000);
const emp4 = new Employers("Bade",40,20000);
// console.log(Emp3);
//console.log(Emp4);

emp3.showInfos();
emp4.showInfos();


