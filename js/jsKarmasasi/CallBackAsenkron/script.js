// let merhaba=function(){
//   console.log("Bu bir callback");
// }

// setTimeout(merhaba,3000);

// console.log("Naber");//Once bu calisiyor sonra seTimeout fonks calisacaktir callbackk yani asenkron calisir.

//Eventlistener larda callback fonksiyonlarimiz vardir...


document.getElementById("btn").addEventListener("click", function(){
  console.log("Buttona basildi");
});

console.log("Naber");

//Biz apiden verileri , database den verileri cekecegimiz icin veriler hemen saniyede onumuze dusmyecektir onlar gelirken bu arada javascript senkron sekilde calisacaktir ama biz asenkron callisma sayesinde mesela bazi fonksiyonlarimiza database den gelen veri lazm parametre olarak eee onlar senkron calisirsa database den veri gelene kadar ucar gider ee veriyi de alamayinca patlar o zaman bizim uzaktan cektigimiz verileri kullanabilmek icin bu zaman olayini kontrol altina almamiz lazm iste bu kontrol altina alma olayini biz esasinda asenkron programlama sayesiinde yapariz ve deriz ki mesela once sen veriyi al sonra da ornegin su islemi yap veriyi almadan onu yapma deriz mesela....gibi...


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
      todoListEl.innerHTML=todoItems;
    })
  },1000)//Veritabanindan listelenmesi 1 sn zaman alacagini varsayiyoruz...
}


//Listeye yebni  bir eleman eklemek istersek ne yapacagiz

function newTodo(todo, callback){
  setTimeout(()=>{
    todos.push(todo);
    callback();
  },2000)
}//veritabanina yaziyoruz burdas 2 sn zamnan aldigini varsayiyoruz ki cok normal dir bu

newTodo({
  title:"Todo 4",
  description:"Ailenle disari cik!"
}, todoList)

todoList();//Burasi ekleme methodunu beklemeden calisiyor cunku yani kendi islemi 1 saniye suruyor sonra ekleme islemi daha olmadan veriyi listeliyor dolayisi ile biz de goremiyoruz veriyi

//O zaman ne yapariz biz ekleme islemini yaptigimiz yere geliriz ve hemen ekleme islemini yaptiktan sonra bizim listeleme fonksiyonumuz calisisn deriz ancak tabi alip da direk fonks orda calistirmak olmaz da biz oraya bir parametre daha veririz ve onun fonks olacagini dusunerek ve de hemen ekleme islemi sonrasina da calistiririz bunun bizim listeleme fonks oldugunu varsayariz ve ekleme fonks calistirirken de parametre olrak ekleme fonks gercek veririz
