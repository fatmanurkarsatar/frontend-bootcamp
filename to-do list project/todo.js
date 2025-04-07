//tüm elementleri seçtik
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners(){ //tüm eventlistenerları aldık
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e) {
    
    if(confirm("tümünü silmek istediğinize emin misiniz?")){
        //arayüzden todoları temizleme
        //todoList.innerHTML = ""; //yavaş yöntem
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos"); //storage'dan sildik
    }
  }

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
           listItem.setAttribute("style","display : none !important"); //!important bu style özelliğini ne olursa olsun yap anlamında
        }else{
            listItem.setAttribute("style","display : block");
        }
      });
}

function deleteTodo(e){ //elemanları arayüzden sildik
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","todo başarıyla silindi");
    }
    //console.log(e.target); //ekranda nereye tıklarsak oranın hangi element olduğunu döndürüyor
}

function deleteTodoFromStorage (deletetodo){ //elemanları storage'den sildik
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1); //arrayden değeri siliyrouz
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
       addTodoToUI(todo); 
    });
  }
function addTodo(e){
    const newTodo = todoInput.value.trim(); //trim ile ortaya yazılan inputun başındaki ve sonundaki boşlukları sildik.
    
    if(newTodo === ""){
        showAlert("danger","Lütfen bir todo girin...");
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","todo başarıyla eklendi...");
    }


    e.preventDefault();
}
function getTodosFromStorage() { //storageden todoları alacak
    let todos;

    if(localStorage.getItem("todos") === null){
       todos = []; 
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

  }
function addTodoToStorage(newTodo) {
   let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

  }
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(function () {  //hata mesajı 1 sn sonra yok olacak
        alert.remove();
    },1000);
}


function addTodoToUI(newTodo) { //string değerini list item olarak UI'ya ekleyecek
    //listItem oluşturduk
    const listItem = document.createElement("li");
    //link oluşturduk
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    console.log(listItem);

    listItem.className = "list-group-item d-flex justify-content-between";

    //text node ekliyoruz
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todo liste listItem i ekleme
    todoList.appendChild(listItem);
    todoInput.value= "";
 }

