
let email="hakanyalcinkaya@gmail.com";
let firstName="hakan";
let lastName="YALCINKAYA";

//string karakter sayisi-length

console.log(email.length);

//Ilk karakter bulmak

console.log(email[0]);
console.log(email.charAt(0));

//Son karakteri bulmak

console.log(email[email.length-1]);
console.log(email.charAt(email.length-1));

//Buyuk harf-kucuk harf

console.log(firstName.toUpperCase());//buyuk harfe cevirme
console.log(lastName.toLowerCase());//kucuk harfe cevirme

//String icinde istedgimiz veriyi bulma-search

console.log(email.search("@"));//kacinci indexten basladigini verir bize-15 geldi
console.log(email[15]);

//DIKKAT EDELIM ICINDE OLMAYAN BIRSEYI SEARCH ILE ARARSAK -1 SONUCUNU VERIR
console.log(email.search("olmayan"));
//indexof() methodu ile de olmayan bir veriyi ararsak o da -1 verecektir
console.log(email.indexOf("olmayan"));
//BU YONTEMI ICINDE ARADIGIMIZ SEY VARSA TRUE YOKSA FALSE OLSUN DIYE DONDUREREK ISLEMLER YAPABILIRIZ..

console.log(email[34]);//dizide yuksek bir sayi yazarsak olmayan bir eleman o da undefined verir

//indexof() methodu ile aradigimiz bir harfin kacinci index te oldugunu bulabiliyoruz
console.log(email.indexOf("@"));
//indexof() methodu ile de olmayan bir veriyi ararsak o da -1 verecektir
console.log(email.indexOf("olmayan"));

//Belli bir karaktere kadar olan karakterli almak 
console.log(email.slice(0,11));//dikkat edelim ismi aldik
console.log(email.slice(0,15));//dikkat edelim burda da domain bilgisine eristik
//domain isminden sonra @ ten sonraki kismi bulmak
//sabit olan degismeyen degiskenler buyuk harfle yazilabilir
let DOMAIN=email.slice(email.search("@"));
//eger sadece gmail.com almak istersek
let DOMAIN2=email.slice(email.search("@") + 1);
console.log(DOMAIN);//@gmail.com
console.log(DOMAIN2);//gmail.com
//@gmailden onceki kismi bulma yani domain ismini bulmus oluyoruz bu sekilde
console.log(email.slice(0,email.search("@")));//hakanyalcinkaya

//gmailden sonra . nin nerde gectigini bulalim
console.log(DOMAIN2.indexOf("."));//5.elemani . diyor

//Sadece gmail yazisini alalim
console.log(DOMAIN2.slice(0,DOMAIN2.indexOf(".")));

//burda da stringimiz icinde belli bir kismi degistirmek istersek-replace
console.log(email.replace("gmail.com","kodluyoruz.org"));
//hakanyalcinkaya@kodluyoruz.org

//Istegimmiz bilgi var mi yok mu bunu nasil arariz?-includes
console.log(email.includes("sadkfasdk"));//false aliriz
console.log(email.includes("@"));//true aliriz
console.log(email.indexOf("mdsfasmd"));//-1 gelir bu da istedgim bilginin olmadinigi gosterir
console.log(email.indexOf("edflasd"));//-1 aranan veri  yok demek

for (let i = 0; i < email.length; i++) {
    const element = email[i];
    console.log(element);//tek tek tum harfleri bu sekilde yazdirabiliyoruz...   
}

//Stringim istedigim karakter ile bittim i
console.log(email.endsWith("@"));//false
console.log(email.endsWith(".com"));//true

//Ilkharfleri buyuk yapmak!

let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}

`;
console.log(fullName);

//Slice ile istedigimiz indexten sonraki karakter leri almak icin o karakterlerde dahil
//firstName.slice(1)=>akan 

//Ayrica sunu unutmayalim ki biz bu tarz islemlere guzel isimler vererek onlari fonksiyonu veya methoda donusturup defalarca cok kolay birsekilde kullanabilirz...
