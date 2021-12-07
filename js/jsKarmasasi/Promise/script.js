const todos=[{title:"Todo1", description:"Video cekimi yap"},{title:"Todo2", description:"Okula git"},{title:"Todo3", description:"Cocugu etkinige gotur"}]

let todoListEl=document.getElementById("todoList");


function todoList(){
  setTimeout(()=>{
    let todoItems="";
    todos.forEach(item=>{
      todoItems+=  `
      <li>  
          <b>${item.title}</b>
          <p>${item.description}</p>
      
      </li> 
      `
      todoListEl.innerHTML+=todoItems;
    })
  },1000)//Veritabanindan listelenmesi 1 sn zaman alacagini varsayiyoruz...
}



function newTodo(todo){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      todos.push(todo);
      //ekleme isleminde hata durumunda
      const e=false;
      if(!e){
        resolve(todos);
      }else{
        reject("hata var!");
      }
    },2000)
  })
 
}//veritabanina yaziyoruz burdas 2 sn zamnan aldigini varsayiyoruz ki cok normal dir bu
newTodo({
  title:"Todo 4",
  description:"Ailenle disari cik!"
}).then(response=> {
  console.log("Guncel Liste: ", response);
  todoList();
}).catch(e=>{
  console.log(e);
})
//Bir fonksiyonun isinin bitip bitmedigini anlayarak yola devam etmek istersek promise tam da bize goredir
//Ama promise ile alakali da soyle bir problem yasayabiiriz web sayfamizda 5-6 bolum var ve her birisi de ayri url ye istek atiyor...o zaman da then then then yapmak zorunda kalacagiz onun yerine biz PromiseAll diye bir keywrodumuzle  bu islemi yapariz..
//4 ayri yerden veri cekiyoruz mesela
const p1=Promise.resolve("P1");
const p2=new Promise((resolve, reject)=>
  setTimeout(resolve,2000,"deneme"));
const p3=12344522;
const p4=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

//PROMISE.ALL COK IYI HARIKA BIR OLAY...
Promise.all([p1,p2,p3,p4]).then(promises=>{
  console.log("promises: ", promises);
});