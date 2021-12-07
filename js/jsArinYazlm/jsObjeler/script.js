//Diziler

//Biz dizileri bu sekilde de olusturabiliyoruz cunku diziler de bir nesnedir...

let sayilar=new Array(12,4,6,8,23);
//push ile dizinin sonuna yeni eleman ekleme
sayilar.push(125);


//unshift dizinin basina yeni elemena ekleme
sayilar.unshift("Mr");

//pop fonks ile dizinin son elemanini siler
sayilar.pop();

//shift fonks ile array in ilk elemanini silme
sayilar.shift();

//indexof ile elemanin indexini bulma
console.log(sayilar.indexOf(8));//dizi icinde indexi 3 tur


console.log(sayilar)


function Foo(name,age){
  this.name=name;
  this.age=age;
}


let myfunction=new Foo("Adem",33);

console.log(myfunction.name)
console.log(myfunction.age)

console.log("---------------------------")

let myArr=[4,6,9,12,15,19,24,7,8]

function toplaElementByArr(arr){
  let top=0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
        top+=element;  
  }
  return top;
}

console.log(toplaElementByArr(myArr));

function carpElementByArr(arr){
  let top=1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
        top*=element;  
  }
  return top;
}

console.log("Carp")

console.log(carpElementByArr(myArr));


//Fonskiyonlarda ayni isimde fonksiyon tekrar tanimlarisek kendinden ustteki calisan fonksiyonlarda en son calisan fonksiyonun sonucunnu verirler
//Ama bu degiskenlerde bu sekilde degil kendinen once tanimlanan degisskenler onceki yerlerde hangi degerle islem yapildi ise o islemler o andaki degerlerii ile isleme tabi tutulurlar...

let result=myArr.reduce((acc,element)=>acc=acc+element,0);
console.log(result);

let result2=myArr.reduce((acc,element)=>acc=acc*element,1);
console.log(result2);


//3 kitaptan olusan bir kutphanemiz bu 3 kitaptan bazisini okuduk bazisini okumadik biz hangisini okuyup okumadigimizi bize gostermesini istiyoruz
//kitap ismi,yazari ve okuyup okumadigmiza dair bilgileri yer alacak...
//
let library=[
  {
    title:"Heidi",
    author:"Keneddy",
    isRead:true
  },
  {
    title:"Define Adasi",
    author:"Alex",
    isRead:true
  },
  {
    title:"Kirmizi baslikli kiz",
    author:"John",
    isRead:false
  }

];

let booksIRead=library.filter((book)=>{
   return book.isRead==true;
})

console.log(booksIRead);

