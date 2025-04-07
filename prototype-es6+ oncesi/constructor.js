function Employee(name,age,salary){
    this.name=name;
    this.age = age;
    this.salary = salary;
    
    console.log(this); //emp1 ve emp2 verileri geldi
}

const emp1 = new Employee("fatma",22,0);
const emp2 = new Employee("feris",45,1000);

