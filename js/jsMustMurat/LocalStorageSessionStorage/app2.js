//LocalStorage

//localStorage.setItem("name","Adem");
//Bizim buraya girdigimiz tum veriler string olarak kaydedilecektir
//ocalStorage.clear();//tum localStoragedki verileri siler


//Olmayan bir key ararsak
// console.log();//null dondurecektir...

// if(localStorage.getItem("name")=== null){
//     console.log("Sorguladiginiz veri bulunmamaktadir");
// }else {
//     console.log("Sorguladiginiz veri bulunuyor")
// }

//localstorage verileri sadece string olarak kabul edecektir ve tekrardan veriyi string olarak verecektir bize...Dolayisi ile biz localStorage a da kaydettigimiz string tipi disindaki verileri alirken 
//const todos=["Todo 1","Todo 2","Todo 3"];
//Bu sekilde json a cevireceegiz ve tekrar alirken de yine cevirme islemi uygulariz...
//localStorage.setItem("todos",JSON.stringify(todos));
//const value=JSON.parse(localStorage.getItem("todos"));
//JSON.stringfy ile localStorage a yazariz...
//JSON.parse ile de localStorage den verilerimiz aliriz...

//Formumuz icindeki input ve submit butonumuz ile input alanina girilen degeri dizi icerinde localStoraga atma!!
const form=document.querySelector("#todo-form");
const todoInput=document.getElementById("todo");
form.addEventListener("submit",addTodo);//Submit ne yapiyor tum form icinde bulunan input a girilen verilerin submit butonuna basinca action attributunde yonlendirilen sayfaya gonderiyor...
function addTodo(e){
    const value=todoInput.value;
    //Localstorage da bir array varsa bu degeri oraya eklemek istiyoruz..
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else {
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}