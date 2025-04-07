import {Request} from "./requests";
import {UI} from "./ui";

//elementleri seçme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

let updateState = null;
eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    form.addEventListener("submit",addEmployee);
    employeesList.addEventListener("click",UpdateOrDelete);
    updateEmployeeButton.addEventListener("click",updateEmployee);
  }
  function getAllEmployees(){
    request.get()
    .then(employees => {
        ui.addAllEmployeeToUI(employees);
    })
    .catch(err => console.log(err));
  }

  function addEmployee(e) {

    const employeeName = nameInput.value.trim();
    const employeeSurname = surnameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if(employeeName ==="" || employeeSurname === "" || employeeDepartment ===""|| employeeSalary ===""){
      alert("lütfen tüm alanları doldurunuz!");
    }else{
      request.post({name:employeeName,surname:employeeSurname,department:employeeDepartment,salary:Number(employeeSalary)})
      .then(employee => {
        ui.addEmployeeToUI(employee);
      })
      .catch(err => console.log(err));
    }



    ui.clearInputs();
    e.preventDefault();
    }

    function UpdateOrDelete(e) {
     
      if(e.target.id === "delete-employee"){
        deleteEmployee(e.target);
      }else if(e.target.id === "update-employee"){
        updateEmployeeController(e.target.parentElement.parentElement);
      }
       
      }

      function deleteEmployee(targetEmployee) {
        const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        request.delete(id)
        .then(message =>{
            ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
        
          }) 
        .catch(err => console.log(err));
      }
    function updateEmployeeController(targetEmployee){
      ui.toggleUpdateButton(targetEmployee);
      if(updateState === null){
        updateState = {
          updateId : targetEmployee.children[0].textContent,
          updateParent : targetEmployee
        }
      }else{
        updateState = null;
      }
    }


    function updateEmployee(){
      if(updateState){
        const data = {name:nameInput.value.trim(),surname:surnameInput.value.trim(),department:departmentInput.value.trim(),salary:Number(salaryInput.value.trim())}
        request.put(updateState.updateId,data)
        .then(updatedEmployee => {
          ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent);
        })
        .cath(err => console.log(err));
      }
    }

// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// request.post({name:"selin",surname:"say",department:"pazarlama",salary:8000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// request.put(1,{name:"selin",surname:"say",department:"bilişim",salary:10000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// request.delete(4)
// .then(message => console.log(message))
// .catch(err => console.log(err));