//Async await anahtar kelimeleri...
//Promise ler i daha etkili kullanabilmek icin getirilmis keywordlerdir..
//Async await ler tamamen bambaska kavramlar degildir

//Bir fonksiyonun basina async anahtar keliimesi yazarsak, bu fonksiyonun promise donecegini soylemis oluyoruz ancak biz burda herhangi bir promise donmuoruz , ve javascrtipt datayi resolve icerisine koymus oluyoruz.Basina async deyince bu fonksiyon artik promise donecek demis oluyoruz.Hemen bunu test edelim..
async function test(data){//Async ile baslayan bir fonks mutlaka promise donmek zorundadir
  return new Promise((resolve,reject)=>{
    resolve(data);//Biz direk return data dersek de javascript bunu otomatik olarak resolve icine alacaktir..
  })
 
}

//test("Merhaba").then(res=>console.log(res));

async function hello(message){
  return message;//Biz kendimiz promise olusturup resolve icinde dondurmesek bile, direk return message desek bile fonksiyon async ile basladigindan dolayi fonksiyon promise olarak donecektir..
}

//hello("hello").then(res=>console.log(res));

//Async i await ile kullanmak! await bir tane promisin await etmesini bekler..

async function mynewTest(data){
let promise= new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve("Bu bir degerdir")
},5000)//5 saniye sonra yazacak..a
//await in gorevi promise in gonderecegi resolve u bekelemek yani cevabi beklemek ve altindas kalan satirlari cevabi alana kadar bekletmek, calistirmamak.....
//Ayrica await sadece async olan fonksiyonlar icinde calisir, async olmayan bir fonksiyondsa await calismaz...
  })

  let response=await promise;//5 saniye beklyecek...ve kendi altindaki javascript kodlarini da bekeletecek
  //console.log(response);
  //console.log(data);

  return response;//Async function lar mutlaka promise donmek zorundadir biz promise donmesek bile javasdript bunu otomatik olarak yapacaktir...

}

mynewTest("Response Data").then(response=>console.log(response));



async function testData(data){
  let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (typeof data ==="string") {
        resolve(data);
      }else {
        reject(new Error("Lutfen string bir deger giriniz"))
      }
    },5000)
  })
  
 //return promise.then(res=>res); ya boyle then ile alirz
 //ya da then yerine await kullanalim
 let response=await promise
 return response;
 //Async Await lerin  kullanmilma amacai then leri daha efektif kullanmaktir....
}

testData(23)
.then(res=>console.log(res))
.catch(err=>console.log(err));


//Async await i fetch ile kullanmak!

async function getUsers(url){
  const response=await fetch(url);//Response object bu satir normal promsie yaparken ki ilk satir da (response=>response.json()) ilk satiridir ve json ile almamiz gerekecek veriyi.Yani response kendine ait bir format ile donuyor ve veri o objenin icinde akliyor veriiyi dogrudan alabilmek  icin normal promise de nasil 2 tane then yapiyuorsak burda da 2 tane await yaprak dogrudan veriyi aliriz..
  const data=await response.json();//then de yaptiiimiz islerin aynisini yapiyoruz aslinda ve burda verinin kendini almis oluyoruz...
  return data;//Istersek retur yapip fonksiyonu alirken bu islemi yapabilriz...
}

 getUsers("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res));