
//Arrow functions Expression
//Arrow function lar daima expression olarak yazilirlar


let myFunc3=(num)=>{
  return num*num;
}

console.log(myFunc3(6));

let myFunc4=num=>num*num;//Tek satirlik kodumuz varsa suslu paranteze gerek kalmadan => ile return islemi yapilacaktir zaten...
console.log(myFunc4(8));
//Arrow function i kullanma sebebimiz arrow function larin kolay ve basit bir syntaxa sahip olmasi degildir
//Arrow funciton lardaki => ok isaretinin this ile arasindaki iliskiden kaynaklanir

//Normal fonksiyonda this iliskisi nasildir ona bir bakalim...
window.name="Ali";
function tellName(){
  console.log(this);//window gelir
  console.log(this.name);//Ali gelir
}

tellName();

const person={
  name:"Adem",
  tellName:function(){
    console.log(this);//person objesi
    console.log(this.name);//Adem ismini getirir
  }
}

person.tellName();

//Normalde standart bir fonksiyon hangi objenin icinde ise this olarak icinde bulundugu objeyi goserir eger hic bir obbje icinde degilse o zaman this window nesnesidir

//ARROW FUNCTION IN THIS ILE ILISKISI
window.surname="Erbas";
tellName2=()=>
  console.log(this);//window
  console.log(this.surname);//Erbas

  tellName2();


  const person2={
    surname:"Cakir",
    tellName2:()=> {
       console.log(this)//window
      console.log(this.surname);//Erbas ismini getirir
    } 
  }
  //BU COK KRITIK BIR BILGI!!!!!
  //Arrow function lar herhangi bir obje icinde calistirilsalar bile her zaman this olarak window u tanimlarlar window u referans olarak gosterirler
  window.age=44;
  const person3={
    age:33,
    tellName3:function(){
      console.log(this);//person3 objesi
      console.log(this.age);//person3.age degeri gelir
      setTimeout(function(){
        console.log(this);//window
        console.log(this.age);//window daki age degeri 44
      },2000)
    }
  }

  person3.tellName3();
  //Arrow function icinde bulundugu objeyi degil window objesini this olarak kabul eder her zaman

  //Arrowfunction lari biz genellikle callback fonksiyonlarda yani fonksiyon parametrelerinde kullanilir aynen setTimeout da oldugu gibi...
  //Arrow fonksiyonlarinin en yaygin kullanimi iste bu this ile iliskisinden dolayi kullanilir

  //Arrow function lari biz constructor fonksiyon olarak kullanamayiz...Neden cunku arrow function in kendine ait this i yoktur ve this olarak her zaman window u isaret ettiginden dolayi...ve ayni zamanda arrow function new lenemediginden dolayi

  //ARROW fonksiyonlari bir nesnesin methodu olarak kullanmak problemlidir

  window.year=2000;
  const myObj={
    year:2021,
    showYear:function(){
      console.log(this.year);//2021=myObj.year;
      console.log(this);//myObj
    },
    showYear2:()=>{
      console.log(this.year);//window.year
      console.log(this);//window
    }
  }
console.log(".....................................")
  myObj.showYear();
  myObj.showYear2();

  //Arrow function lar call,apply ve bind fonksiyonlari ile birlikte kullanilmaya uygun degildir
  //Call=>Bır fonksiyonu veya methodu ilgili oldugu methoddan baskas biryerde kullanabilmek icin call methodunu kullaniriz
  const student={
    name:"zehra",
    examResult:function(){
      return this.name + " "+ this.grade;
    }
  }

  const student1={
    firstName:"Adem",
    name:"adem",
    grade:80
  }
  const student2={
    firstName:"Adem",
    name:"adem",
    grade:70
  }

  //student nesnesi icinde name ve grade tanimalamadik
 console.log( student.examResult.call(student1));
  console.log( student.examResult.call(student2));
  //Baska bir nesneye ait olan bir methodu yani student nesnesine ait olan bir methodu once gelip student1 nesnesi icin sonra da gelip student2 nesnesi icin kullandik...

  //Peki biz gelip de bir nesne icinde ki methdu arrow function ile olusturrup sonra o methodu baska objeler icinde kullanmak istersek....
window.grade=95;
window.firstName="Zeynep";
const student4={
  
  showExamResult:()=>
  {return this.firstName + "  "+ this.grade}
}

console.log( student4.showExamResult.call(student1));//Zeynep 95
console.log( student4.showExamResult.call(student2));//Zeynep 95
//Her iki sonucda arrow function this olarak window u referans ald icin window da olan grade ve firstName degiskenlerinin valuelerini getirecektir

