let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
];

function listUsers() {
  console.log(users);
}

let addNewUser = (user, callback) => {
  setTimeout(() => {
    users.push(user);
    callback();
  }),
    1000;
};

const newUser = {
  id: 5,
  name: "Chelsey Dietrich",
  username: "Kamren",
  email: "Lucio_Hettinger@annie.ca",
};

addNewUser(newUser, listUsers);

//Senkron ile asenkron karsilastirdigimiz zaman sunu bilelim asenkron senkron ve sira ile giden fonksiyonlar calistigi zaman da calismaya devam eder beklemez ama once senkron olan lar calisir ama bu su demek degildir tum asenkronlar senkron olan fonks lari bekleyecek hayir onlar da calismalarina devam ederler....

//Promise bir asenkron islemlerin nihai sounucunu temsil eden bir ifadedir
//Promise bir nesnedir

const promise1 = new Promise(function (resolve, reject) {
  const state = false;
  if (state) {
  
    resolve("Data");
  } else {
    reject("Hata aldik!");
  }
});

console.log(promise1.then(res=>console.log(res), rej=>console.log(rej)));
// console.log(promise1.
//   then((res) => console.log(res)).
//   catch((res) => console.log(res))
//   .finally(res=>console.log("Uansettt calisir burasi!")));
//Promsise in kendine ait 2 tane durumu var disardan ulasmayacagimz kendine ait olan
//Mesela bir rest api den verileri alacagiz baglanti kurduk.Biz o verileri aldigimizi dusunelim basarili birsekilde donerse veya islem donmesi sart degil basaril bir sekilde donmus iseresolve olarak donecektir bize...Yok herhangi bir problem alirsam reject olarak donecektir
//pending derse o bekliyor demektir sonucu almamis henuz.
//PROMISE STATE!
//PromisesState:pendling bekliyor demek ve promise imiz undefined donecektir...
//PromisesState:fulfilled islem basari ile tamamlandi...resolve
//PromisesState:rejected islem basarisiz-rejected

//Promsi de resolve ve reject parametrelerine biz donen data veya hata meseaji bunlari yazabiliriz...

//Promise tek bir donus yapar ve dondukten sonra onu degistiremeyiz


//COOK ONEMLI YENI OGRENDIM BUNU ILKDEFA
//THEN METHODU OPTIONAL OLARAK 2 TANE PARAMETRE ALABILIR,1.SI ZATEN SUREKLI OLARAK KULLANDIGIMIZ ONFULLFILLED-BASARILI OLMA DURUMUNDA 2.SI ISE YENI OGRENDIGIM ONREJECTED DURUMU ICIN YANI BIZ REJECTED DURUMUNDA THEN UZERINDEN DE HANDLE EDEBILIRIZ...

//console.log(promise1.then(res=>console.log(res), rej=>console.log(rej)));
console.log(promise1.then(()=>{
console.log("Ok verilerimiz aldik!")
},()=>{
  console.log("Hata aldik!")
}))

let users2 = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
];

let addMyNewUser=function(newUser){
  const promise3=new Promise(function(resolve,reject){
    users2.push(newUser);
    let status=true;
    if (status) {
      resolve(users2);
    }else {
reject("Error!")
    }
    
  })
  return promise3;
}

addMyNewUser({"id": 7,
"name": "Kurtis Weissnat",
"username": "Elwyn.Skiles",
"email": "Telly.Hoeger@billy.biz"}).then(response=>console.log("Users2:   ",response))


let addTwoNumbers=function(number1, number2){
  let promise4=new Promise((resolve,reject)=>{
    const sum=number1+ number2;
   (typeof number1 !== "number" || typeof number2 !== "number") 
   ? reject("Sayilardan ikisi de integer tipinde olmalidir")
   : resolve(sum);
  })
  return promise4;
}

addTwoNumbers(17,"adem").then((res)=>console.log(res))
.catch((res)=>console.log(res));