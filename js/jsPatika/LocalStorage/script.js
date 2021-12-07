
//Local Storage.tarayicida veri saklamamiza yarayan lokal bir alandir

//Window.localStorage
console.log(localStorage);
localStorage.setItem("name","adem");
console.log(localStorage.getItem("name"));
//Localstorage mantiginda biz hangi domaine girdi isek yani hangi web sitesine girdi isek bilgiyi onun icerisinde tutuyor....
//Peki localStorage nerde tutuluyor..Web sitemizi inspect edersek arkada Application menu elemaninda Local Storage i gorebiliriz...Ayrica orda biz baska seyleri de gorebiliriz...Cookies,Session Storage,IndexedDB,Web SQL,Trust Tokens
//5mb lik bir limiti var localStorage
console.log(window);
//Verimzi siledebiliriz...
localStorage.removeItem("name");//localStorage deki elemanimizi silmis oluyoruz bu sekide...

//AYNI MANTIKTA SESSION STORAGE DE DE VERI TUTABILIYORUZ...
console.log(window.sessionStorage);
sessionStorage.setItem("lastName","erbas");
console.log(sessionStorage.getItem("lastName"));

//Localstorage icerisine Farkli Turde veri eklemek!

localStorage.setItem("user","ademErbas");
console.log(localStorage.getItem("user"));//Ekledigimiz veri dogrudan localStorage in objesine key:value olarak ekleniyor cunku localStorage zaten google in tarayicinin bunyesinde tuttugu bir objedir...
console.log(localStorage.key(0).isActive);

//Ama ben localStorage icerisine direk mesela bana ait bir objemiz koymak istiyorum
//Burda suna dikkat edelim biz obje olarak gonderiyoruz ama localStorage onu bizden string olarak bekliyor o zaman bizim bir objeyi gonderebilecegimiz en yakin ve mantikli string formati nedir tabi ki ya da json dir ki biz json kullanacagiz...
//Bunu JSON.stringify() ile json a cevirebiliriz..
let user={userName:"Zehra", isActive:true};
localStorage.setItem("userInfo", JSON.stringify(user));
//Ancak biz bu verileri almak istedigmiz zamanda verileri Json old icin biz obje gibi dot notasyonu ile propertieslerimize erisemiyoruz.Peki bunu nasil tekrar Objeye cevirecegiz alirken onu da JSON.parse() ile yapacagiz...

let userInfo=localStorage.getItem("userInfo");
console.log(JSON.parse(userInfo));
console.log(JSON.parse(userInfo).userName);
console.log(JSON.parse(userInfo).isActive);

//Number tutalim bakalim localStorage da
localStorage.setItem("myNumber","11");
let myNumber=localStorage.getItem("myNumber");
console.log(myNumber);//Geldi ama string geldi al bunu, int a cevir...
myNumber=parseInt(myNumber)
console.log(myNumber*3);


//Bir de dizi alalaim bakalim

let cities=["Skien","Porsgrunn","Larvik","Ski",23];

localStorage.setItem("cities",JSON.stringify(cities));

let myCities=JSON.parse(localStorage.getItem("cities"));
console.log(myCities);
console.log(myCities[0]);
console.log(myCities[4]*2);


console.log(".......................")
//Bir exersize yapalim increase-decrease islemlerini iceren...
//1-Increas e tiklayinca 1 arttirsin, decrease a tiklayinca 1 azaltsin ve renkleri de degissin ve de sayfayi yenileyince hangi sayida kaldi ise onu gorelimmm

let countArea=document.querySelector("#counter");
let counter=localStorage.getItem("counter");
countArea.innerHTML=counter;

countArea.style.width="137px";
countArea.style.backgroundColor="yellow";
countArea.style.textAlign="center";
countArea.style.color="black";
countArea.style.border="solid 1px";
countArea.style.margin="10px";

let increase=document.querySelector("#increase");
let decrease=document.querySelector("#decrease");
console.log(increase);
console.log(decrease);

function increaseAction(e){
    let value=e.target.value;
    counter++;
    value=counter;
    console.log(value);
    console.log(counter);
    localStorage.setItem("counter",counter);
    countArea.innerHTML=counter;
}

console.log(countArea.innerHTML);



increase.addEventListener("click",increaseAction);

decrease.addEventListener("click",function decrease(e){
    let value=e.target.value;
    counter--;
    value=counter;
    console.log(value);
    console.log(counter);
    localStorage.setItem("counter",counter);
    countArea.innerHTML=counter;
   
});

//let count2=localStorage.getItem("count2") ? localStorage.getItem("count2") : 0 bu satiri yazinca load eventini calistirmaya gerek kalmadi....
// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//     console.log(localStorage.getItem("counter"));
//     countArea.innerHTML=localStorage.getItem("counter");
//     console.log(countArea.innerHTML);
//     countArea2.innerHTML=localStorage.getItem("count2");

//   });


  
  let clear=document.querySelector("#clear");
  console.log(clear);

  clear.addEventListener("click", (e)=>{
    let value=e.target.value;
    counter=0;
    value=counter;
    console.log(value);
    console.log(counter);
    localStorage.setItem("counter",counter);
    countArea.innerHTML=counter;
  })


console.log(".....................................................");

console.log("Best Practise!");


let count2=localStorage.getItem("count2") ? Number(localStorage.getItem("count2")) : 0
console.log(typeof count2);
let countArea2=document.querySelector("#counter2");

countArea2.innerHTML=count2;

countArea2.style.width="137px";
countArea2.style.backgroundColor="yellow";
countArea2.style.textAlign="center";
countArea2.style.color="black";
countArea2.style.border="solid 1px";
countArea2.style.margin="10px";

let increase2=document.querySelector("#increase2");
let decrease2=document.querySelector("#decrease2");
let clear2=document.querySelector("#clear2");
console.log(increase2);
console.log(decrease2);
console.log(clear2);

increase2.addEventListener("click",clickEvent);
decrease2.addEventListener("click",clickEvent);
clear2.addEventListener("click",clickEvent);


function clickEvent(e){
    console.log(this.id);
    console.log(typeof count2);
   count2=parseInt(count2);
   console.log(typeof count2);
    this.id=="increase2" ? count2 +=1 : 
    this.id=="decrease2" ? count2 -=1 :
    this.id== "clear2" ? count2=0 :
     count2  
     localStorage.setItem("count2",count2);
     countArea2.innerHTML=count2;
}












