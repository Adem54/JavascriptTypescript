//Neler yapacagiz
//1-submit form inputa girilen veri todo larimiza eklnmeli
//Eklenince eklendi, veri girilmeden submit yapilirsa da kullaniciya uyari verilmeli...
//2.Sayfa yenilenince en son degisiklikler kaybolmamali, ekledigmiz veriler kaybolmamali
//3.Ekledigmiz todolara filtreleme yaparak arama yapabilmeliyiz....
//4.Tum todolari temizleyelim..

//Ekleyecegimiz todolari icine yazacagimiz..li elementi bu sekilde olmalidir
//  <li class="list-group-item d-flex justify-content-between">
// Todo 1
// <a href = "#" class ="delete-item">
//     <i class = "fa fa-remove"></i>
// </a>
// </li> 
//Verecegimiz alert mesaji da bu sekilde olmalidri bootstrap dan alindi
  //  <div class="alert alert-danger" role="alert">
    //This is a danger alert—check it out!
    //</div>


//1.Once elementlerimizi dom da secelim    
const todoInput=document.querySelector("#todo");
const form=document.querySelector("#todo-form");
const filter=document.querySelector("#filter");
const ulDom=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clearTodos=document.querySelector("#clear-todos");

console.log(filter);

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded", loadTodos);
    secondCardBody.addEventListener("click",deleteTodo);
filter.addEventListener("keyup",searchTodo);
    clearTodos.addEventListener("click",clearAllTodos);
}

//Kuallanicidan gelecek eleman her zaman parametreye alinacaktir
//Bizim bu fonksiyonu ornegin daha esnek kullanabilmemiz icin fonksiiyonu ne iicn yazdii ise o kullanmayi dusundugumuz elementlerin ortak kisimlari function icinde zaten yazilir ama degisen kisinlar hangisi ise onlar parametreye verilerek o fonksiyonun kapsami genisletilir ve daha kullanisli ve efektif hale getirilir....

function addTodoToUI(newTodo){
    const liDom=document.createElement("li");
    liDom.className="list-group-item d-flex justify-content-between";
    const aLink=document.createElement("a");
    aLink.className="delete-item";
    aLink.href="#";
    aLink.innerHTML=" <i class = 'fa fa-remove'></i>";
    liDom.appendChild(document.createTextNode(newTodo));
    liDom.appendChild(aLink);
    ulDom.appendChild(liDom);
    todoInput.value="";
}


//  <li class="list-group-item d-flex justify-content-between">
// Todo 1
// <a href = "#" class ="delete-item">
//     <i class = "fa fa-remove"></i>
// </a>
// </li> 
function addTodo(e){
  let newTodo=todoInput.value.trim();
  if(newTodo===""){
 
    showAlert("warning","Lutfen bir text girin!");
}else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success","Basari ile eklendi!");
}

   e.preventDefault();
}

function addTodoToStorage(newTodo){
   let todos=getTodosFromStorage();
   todos.push(newTodo);
   localStorage.setItem("todos",JSON.stringify(todos));
}

//Sadece todos u alma methodu....
function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos")===null){
      todos=[];
        }else {
          todos=  JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
}



  //  <div class="alert alert-danger" role="alert">
    //This is a danger alert—check it out!
    //</div>

function showAlert(type,message){
    let divAlert=document.createElement("div");
    divAlert.className=`alert alert-${type}`;
    divAlert.textContent=message;
    firstCardBody.appendChild(divAlert);
    setTimeout(function(){
        divAlert.remove();
    },1000)
}


function loadTodos(e){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });    
}

function deleteTodo(e){
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        removeTodoFromLocalStorage(e.target.parentElement.parentElement.textContent.trim());
    }
}

//localStorage dan kaldirma fonksiyonu yazalim

function removeTodoFromLocalStorage(deletetodo){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo,index){
        if (todo===deletetodo) {
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}

function clearAllTodos(){
    let liItems=document.querySelectorAll("li.list-group-item");
liItems.forEach(function(item){
    console.log("...");
    item.remove()
}) 
  
localStorage.removeItem("todos");
}

function searchTodo(e){

let searchedValue=e.target.value.toLowerCase();
console.log(searchedValue);
let liItems=document.querySelectorAll(".list-group-item");

liItems.forEach(function(item){
const listItem=item.textContent.toLowerCase();
    
    console.log()
   if((listItem.indexOf(searchedValue,1)===-1)){
    item.setAttribute("style","display:none !important");
   }else {
    item.setAttribute("style","display:block ");
   } 
})
}