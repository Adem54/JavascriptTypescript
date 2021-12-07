//This in javascriptte 2 tane konsepti vardir
//1-obj.func()---> this objeye referans verir
//2-this-->global objectte window nesnesini referans vardir...

console.log(this);//window nesnesidir..global olarak kullanirsak window nesnesini referans verecektir..
console.log(this.location);
console.log(this.location.href);

//window sun direk altinda olan propertiesleri biz this ile yazabilirz this global nesnesi window old zaman ama direk de kullanabiliriz...
console.log(this.innerHeight);
console.log(window.innerHeight);
console.log(innerHeight);
console.log(localStorage);
console.log(this.localStorage);
console.log(window.localStorage);

console.log(this === window);//true

//Bir fonksiyonun cagrildigi yere objeye gore degisen bir anahtar kelimedir

//ONEMLI BIR NOKKTA BURASI....

const name="Zeynep";
console.log("name: "+ name);
console.log(this.name);//Adem
//Eger const ile name degiskeni olusturmasa idik o zaman direk name i yazdirinca da window da olan name nesnesi  value si olan Adem sonucunu alacaktik..ama biz name kendimiz ayrica olusturunca artik yazdigimiz name const tipi ile olusturulan name demektir window nesnesi olan name i  yazdirmak icin this.name ya da window.name deriz...
//BU ACIKLAMADAN DA ARTIK SUNU ANLARIZ KI BIZ EGER herhangi bir tip vermeden dogrudan bir degisken olusturup deger atarask ornegin
myProfession="tailor";
//Hic bir veri tipi ile tanimlamadan myProfession ismli bir degisken olusturdugumuz zaman biz bu degiskeni direk window nesnesinin  yani this nesneisinin parametresine atmis gibi dusuenebiliriz ve cek edegbilrz console.log(this.myProfession);
console.log(window.myProfession);
console.log(this);

//--ONEMLI BIR NOKTA YUKARDAKI BOLUM!!!!!!

//Function Decleration
function func1(){
  this.name="Adem";//Bunu eklersek window objesine eklemis oluyoruz...
  console.log(this);
  console.log(this.location);
console.log(this.location.href);
console.log(".........");
console.log(this.age);
console.log(".........");
}
//func1 hoisting durumundan dolayi calistirmadan declere edebiliyoruz...ancak bu func2 icin gecerli degil cunku o function expression dir

//Function Expression
const func2=function(){
  this.age=33;//bunu eklersek window objesine bir property eklemis oluyoruz..
  console.log(this);
  console.log(this.location);
  console.log(this.location.href);
  console.log(".........");
  console.log(this.name);//func1 icinde olusuturup burda kullanbiiriz this cunku window u temsil ediyor
  console.log(".........");
}

//HOISTING--func expression da gecerli degil!!!
//Function expression da hoisting calismazkend function decleration da hoisting caliscak biz buraya function decleration i yazinca javascript onu kod satirinin en ustune alacagi icin bizim function deceleration i tanimladigimiz yerin ustunde function decleration daki herhangi bir degiskenin kullanima durumunda sorun olmuyor func1 yani func decleration ancak bu func2 yani expression function yani degiskene atanan functijon das hoisting olayi olmadigi icin bu sekilde olmuyor  func2 yani func expression func1 den asagida olursa func2 nin icinde olusturulan age okunamayacaktir ve undefined gelecektir...Ama func2 yu yukari alirsak herhangi bir sorun kalmayacaktir....




//Biz bu fonksiyonlar calisina kadar hicbirsey olmaz this ile ilgili ancak bu fonksiyonlar calistiktan sonra this devreye girecektir


func1();
func2();

//Her iki fonksiyon da da window u referans veriyor this olarak window u kabul ediyor neden cunku bu fonksiyonlar window objesinin icinde olusuyor biz ne demistik icinde bulundugu obje yi this olarak kabul edecektir...biz func1 ve func2 yi global obje olan window objesinin icinde olusturmus oluyoruz burada...

//this ile name ve age ozelliklerini ekledikten sonra
console.log(name);
console.log(this.name);
console.log(window.name);
console.log(age);
console.log(this.age);
console.log(window.age);

//

function Person(name,surname,age){
  
  this.name=name;
  this.surname=surname;
  this.age=age;
  this.fullName=function(){
    return this.name +"  " + this.surname;
  }
}

const kamil=new Person("Kamil","Kara",45);
console.log(kamil);

//THIS KEYWORDUNUN CALISMASI TAM OLARAK PERSON2 DE YAPTIGIMMIZ SIMULASYON GIBIDIR
function Person2(name,surname,age){
    const obj={};
  obj.name=name;
  obj.surname=surname;
  obj.age=age;
  obj.fullName=function(){
    return obj.name + "  " + obj.surname;
  }
  return obj;
}

const kamil2=new Person2("Kamil2","Kara2",48);
console.log(kamil2);
//Constructor function kullaniliyorsa o demek oluyor ki sen bir nesne doneceksin, bir nesne olusturucusun demektir....

//Birde class yazim seklini yazalim

class Person3{
  constructor(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
  }
  funnName(){
    this.name+" " + this.surname;
  }
}

const kamil3=new Person("Kamil3","Kara3",46);
console.log(kamil3);

//Construcctor ne yapiyordu arka planda sira ile
//1-Once bellekte bos bir nesne icin adres olusturur
//const obj={} aynen bunu yapmis gibi
//2-Sonra O bos nesneyi this e baglar artik this dedigin zaman o bos nesneyi referans vermis olursun
//3-En son da  constructor icine yazdiklarimizi calistirir....

const adem={
  name:"Adem",
  surname:"Erbas",
  age:33,
  fullName(){
    console.log(this);//this adem objesidir
   return this.name+ this.surname;  
  },
  mother:{
    name:"Leyla",
  surname:"Erbas",
  age:56,
  fullName(){
    console.log(this);//this mother property sine karsilik gelen obje yi referans edecektir
   return this.name+ this.surname;  
  }
  }
}

console.log(adem);
console.log(adem.fullName());
console.log("--------------------");
console.log(adem.mother.fullName());


const zehra={
  name:"Zehra",
  funcy:function(){
    console.log(this === zehra);//true
    console.log(this === window);
  }
}

console.log(zehra.funcy());//true

const funcy2=zehra.funcy;
console.log(funcy2());//false sonucunu aliyoruz bu sefer
//false-true yazacak yani this sonucu window objesine esit oluyor burda da...
console.log(funcy2);
//funcy2 nedir bir fonksiyondur direk o zaman dogrudan herhangi bir obje icinde bulunmayan fonksiyonlar icin this window nesnesidir 


const nihal={
  name:"Nihal",
  funcy3:function(){
    console.log(this===nihal);//true
    setTimeout(function(){
      console.log(this===nihal);//false
      console.log(this===window);//true
    },2000)//2 saniye bekledikten sonra calis..
  }
}

console.log(nihal.funcy3());
//setTimeout parametresinde bulunan anonim fonks icinde this window u referans eder bu ananonim fonskiyon belirli bir objes icinde bulunsa bile