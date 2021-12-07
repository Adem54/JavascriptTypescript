//Map-key-value
//Bu key herhangi bir veri tipidir
//Map in new ile olusturulmasindan hemen sunu anlamaliyiz haa demekki bu bir constructor function ve bu fonksiyondan biz yeni objeler turetebiliyoruz...... 
//Bir objedir tipi ve referans tipdir yani
let myMap=new Map();
console.log(typeof myMap);//Obj
console.log(myMap);//Obj
//Istedigimiz her tip de map olusturabiliriz..
const key1="Adem";
const key2={a:10, b:20};
const key3=()=>2;
//Simdi bunlari myMap imize ekleyelim bunun icinde set methodunu kullaniriz
//Set methodu ile key lere karsilik gelen degerleri ekleme
myMap.set(key1,"String Deger");
myMap.set(key2,"Object Literal Deger");
myMap.set(key3,"Function Deger");
console.log(myMap.get(key1));//key1 e karsilik gelen degerleri gorebiliriz
console.log(myMap.get(key2));//key2 e karsilik gelen degerleri gorebiliriz
console.log(myMap.get(key3));//key3 e karsilik gelen degerleri gorebiliriz
console.log(myMap);//Dizi notasyonundan farklidir kendine ozel birseyd
//myMap imiz icinde kac deger oldugunu bulabilmek icin size ozelliginden yararlaniriz
console.log(myMap.size);//3 tane eleman var diye geliyor
const cities=new Map();
cities.set("Skien",5);//"Skien"=>key, 5=value
cities.set("Porsgrunn",3);
cities.set("Krisiansend",6);
//Mapslerimiz uzerinde gezinme!
//Foreach
cities.forEach(function(value,key){
    console.log(key, value);
})
//Bu map ler C# daki dictionary lere karsilik geliyor.....
//For of ile gezinelim birde
//for(let value of cities){
 //   console.log(value);//Her bir value ["Skien",5] seklinde geliyor bize normalde yani value bize icinde key,value mizin oldugu bir dizi olarak geliyor...o zaman destructiong ile biz value  yerine eger icine atadigimiz 2 tane degisken ile dizi yazarsak o zaman dogrudan key, value mize erismis oluruz....
//}
//Bu sekilde destructiong i kullanarak bu islemi yapmis olduk!!!
for(let [key,value] of cities){
    console.log(key, value);
}
//Sadece keys leri alip onlar ustunde gezinmek istersek...
for(let key of cities.keys()){
    console.log(key);
}
//Sadece value leri almak istersek
for(let value of cities.values()){
    console.log(value);
}
//Maplerimiz ile Array Arasindaki Ilski
//Arraylerden map olusturma!
const array=[["key1","value1"],["key2","value2"]];//1.arrayimizi key1,value1 arrayi saklayacak
//Bu arraydan bir tane map olusturacagiz key1 imiz anahtar deger olacak ve ona karsilik gelen deger value1 olacak
const lastMap=new Map(array);
console.log(lastMap);

//Map den de array olusturalim.(Array.from)

const myCities=new Map();
myCities.set("Skien",5);//"Skien"=>key, 5=value
myCities.set("Porsgrunn",3);
myCities.set("Krisiansend",6);
const array2=Array.from(myCities);
console.log(array2);//1 dizi icinde 3 tane icinde key,value olan dizi alacagiz...
//0: (2) ['Skien', 5] 1: (2) ['Porsgrunn', 3] 2: (2) ['Krisiansend', 6]


