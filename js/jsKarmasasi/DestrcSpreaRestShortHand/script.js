let name4="Adem", age4=33;

const myObj={
    name4:name4,
    age4:age4
}
console.log(myObj);
console.log(myObj.name4);
console.log(myObj.age4);

//Biz bir nesne icerisindeki key isminin karsiligi olan value ismi eger degisken olarak geliyor ve propery ile ayni isimde ise o zaman value ismii yazmak yerine sadece property yi yazmamiz yeterlidir o arkada zaten key:value olarak calisiyor zaten

const myNewObj={
    name4,
    age4
}
//Bu ozelligi biz mesela bir web sayfamiz var kullanicinin gonderdigi veri ile yani parametremize alacagimiz deger ile bunlar i saklamak istdigimz yer yani fonks icinde kullanacagimiz verilerde ayni deisken ismi ile kullanabilcegimiz senaryolar cok fazla karssimiza cikacak dolayisi ile bu praktis de cok kullanilan bir ozelliktir...ve best practise dir....
console.log(myNewObj);

//OBJEYE DINAMIK PROPERTY LER ATAMA VE ISTEDIGIMIZ ZAMAN DEGISTIREBILME!!!!!!
//Computed Property Names
let prop1="name";
//Bu degiskeni bir tane nesneye property olarak atayacagiz mesela
let prop2="surname";

//Bis istiyoruz ki prop1 ve prop2 degiskenine ait olan degerler olusturacagimiz bir objede property olsunlar yani biz degiskene baglamak istiyoruz ki biz degiskeni degistirince objemizin propertiesleri de degissin diye
//Eski yontem..
let myObj2={}
//Degiskeni kullanmak istiyoruz ornegin biz...
myObj2[prop1]="adem";
myObj2[prop2]="erbas";
console.log(myObj2);

//ES6 da ise obje degiskenini olustururken de yapabiliriz
let myObj3={
    [prop1]:"Adem",
    [prop2]:"Erbas"
}

//Genelde javasccript kutuphanelerinde kullanilir cunku hazir kutuphaneler belirli ozelliklere sahip nesneleri arguman olarak kullairlar

//Obje icindeki ffonksiyonun fonksiyon keywordunu kaldirip da kullanadabiliriz
const person2={
    name:"John",
    surname:"Doe",
    age:40,
    languages:["Turkish","English","Spanish"],
   fullName(){
        return this.name+ " "+ this.surname
    },
}
console.log(person2.fullName());

//Object Destructing
//Biz nesneler icindeki values degerlerini degiskenlere atayarak kullanmak icin tutariz.Dolayisi ile biz 


const person={
    name2:"John",
    surname2:"Doe",
    age2:40,
    languages:["Turkish","English","Spanish"],
    fullName:function(){
        return this.name+ " "+ this.surname
    },
}

let{name2,age2}=person;
//{name2:name2, age2:age2}

console.log(name2+age2);



const person3={
    name3:"John",
    surname3:"Doe",
    age3:40,
    languages:["Turkish","English","Spanish"],
    fullName:function(){
        return this.name+ " "+ this.surname
    },
}

//BEST PRACTISE
//Olusturdugumuz degisken de obje icindeki propert isimleri ile ayni olmak zorundadirlar...
let {name3, ...kalanlar}=person3;
//let {name3:name3,} demektir bu ama shortHand yontemi ile yaziyoruz...

console.log(name3);
console.log(kalanlar);

//Biraz daha buyuk bir veri ile deneyelim

const users=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

  //Nesnelerden olusan bir array var elimizde
  //Bize bu array icerisindeki yalnizca id name ve username bilgileri gerekiyor onlari aldiktan sonra geri kalan verileri de ayri bir degiskene atmak istiyoruz ornegin
let myUsers=[];
let myReminds=[];
 for (let i = 0; i < users.length; i++) {
     const user = users[i];
     let {id,name,username,...reminds}=user;
     myUsers.push({id,name,username});
     myReminds.push({reminds});
     
 }

 console.log(myUsers);
 console.log(myReminds);

 console.log("map");
 const myUsers2=users.map((user)=>{
    let {id,name,username,...reminds}=user;
    return {id,name,username}
 })

 console.log(myUsers2);

 console.log("for of ...")
 for (const myUser3 of users){
     console.log(myUser3);
 }
//Dizi icindeki her bir elemani sira ile verdigimiz mahlas isme atar..C# daki foreach dongusu ile ayni islevi yapiyor....

for (const {id,name,username} of users){
    console.log(id +" "+ name + " "+ username);
}


let [firstObj, , thirdObj]=users;

console.log(firstObj);
console.log(thirdObj);


const person5={
    name5:"Jakson",
    surname5:"Doe",
    age5:40,

    fullName(){
        return this.name+ " "+ this.surname
    },
}

let person6={...person5};
console.log(person6);
//Spread operatoru dagit demektir yay demektir bunu biz nerde kullaniriz bakalim hemen ornegin bizden eger 
let sayilar=[23,45,12,33];

//Ya sayilari direk girecgiz buraya ya da eger elimizde bir dizimiz varsa ve bu dizi icindeki sayilari biz merak ediyorsak max olani o zaman dizimiz icindeki elemanlari Math.max methodunun icine sacariz, yayariz spread operatoru  ile
console.log(Math.max(56,65,32,14));
console.log(Math.max(...sayilar));

//Ama birde rest operatoru var bu da bize parametrede obje kullanmamiz gerekiginde lazm olacak veya parametremiz dinamik olacaksa ve biz parametremize kac tane paremetre gelirse gelsin yazabilmek istersek C# dai params ile ayni islev

function myNumber(...myParameter){
    console.log(myParameter);
}
//Bizim verdigimiz elemanlarin hepsini myParameter isimli dizi icerisinde topluyor...
//Burda istedigin kadar veri girebiliyorsun...
myNumber(2,"Mehmet",{name7:"Kasim"});

//IKI DIZIYI BIRLESTIRMEK ICIN KULLANIRIIZ....
const sayilar1 = [1, 2, 3];
const sayilar2 = [4, 5, 6];

//Iki diziyi bu sekilde birlestirebiliriz...
const birlesmisDizi = sayilar1.concat(sayilar2)
console.log(birlesmisDizi)
//Ama buna hic gerek yok...
const birlesmisDizi2 = [...sayilar1, ...sayilar2]
console.log(birlesmisDizi2)
//Bu sekildde spread operatoru ile yaparsak hem immutable yani degismezlik kuralin riayet etmis oluyoruz hemde kolay bir sekilde amaci gerceklestiriyoruz

//IKI OBJEYI BIRLESTIRMEK ISTEDGIMIZ ZAMAN...
const user = {name:"Adem", age:"33"}
const adress={city:"Skien",country:"Norway"}

const birlesmisObje={...user,...adress, age:24, school:"SkienVideregående"}
console.log(birlesmisObje)
//Dikkat edelim age i bir kez daha yazdik ama spread operatorulerinden sonra cunku tekrardan yazdigimiz age propertysine ait value degeri gecerli olmasi icin bunu yaptik en son yazildigi icin javascript onu okuyacak en son.. ve yeni ozellik de ekledik

const person7={
    name6:"Jakson",
    surname6:"Doe",
    age6:40,

    fullName(){
        return this.name+ " "+ this.surname
    },
}

//ES5 te vardi
console.log(Object.keys(person7));//propertislerimizi iceren array olarak donecektir
console.log(Object.values(person7));
console.log(Object.entries(person7));