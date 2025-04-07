//obje oluştururken prototipini başka bir objeden oluşturma

// const obj = {
//     test1:function(){
//         console.log("test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// // console.log(obj);

// const emp = Object.create(obj);
// emp.name="melis";
// emp.age=45;
// console.log(emp);

function Person () {

}

Person.prototype.test1 = function(){
    console.log("Test 1");
}

Person.prototype.test2 = function(){
    console.log("Test 2");
}

const person = new Person();
console.log(person);