
//Referans tipler
//Bellekte belli bir adresi tutan tiplerdir...
//Primitive tipler.Deger tutan tiplerdir
//Obje,array,function,class lar referans tiplerdir
let a="Mustafa";
let b="Mustafa";

if(a===b){
    console.log("Esittir")//Esittir
}
//Referans tipler karsilastirildiklarinda icindeki degere bakmaz bellekteki adresleri ayni mi ona bakar...
let array1=[1,2,3,4,5];
let array2=[1,2,3,4,5];
if(array1===array2){
    console.log("Esittir")
}else {
    console.log("Esit degildir")//Esit degildir
}

//Ayni yer i tutmalari icin de ornegin
array1=array2;//dersek eger o zaman array2 de artik array1 ile ayni adresi gosterir,array2 nin eski degeri de garbage collector tarafindan silinecektir

console.log(array1===array2);//true

let person1={
    name:"Adem",
    surname:"Erbas"
}

let person2={
    name:"Adem",
    surname:"Erbas"
}
console.log(person1===person2);//false.Bellekte farkli adresleri tutuyorlar
const key=[1,2,3];
const cities=new Map();
cities.set("Skien",5);
cities.set("Ski",4);
cities.set([1,2,3],"Array");//Burda key bir dizi, value ise bir stringdir...
cities.set(key,"Array");

console.log(cities.get("Skien"));//5 oluyor ancak
//key i dizi olan map elemenini set ile almaya calisirsak...

//Get ile Map elemani alinirken burda get parantezi icine yazdigmiz key degerini gidip Map in elemanlari ile deger esitlik kiyasi  yapiyor ondan dolayi dizi olunca deger olarak degil adres olarak bakacagi icin iceriklerindeki degerler esit olsa bile adresler farkli oldugu icin ayni degil farkli oluyor....
console.log(cities.get([1,2,3]));//Bu bize tabiki "Array" degerini getirmeyecek undefined getirecek cunku bizim gonderidgimiz dizi cities in icindeki dizi ile ayni adresi tutmuyor ondan dolayi olmuyor...Cok krititk bir ayrim...Referans tipler icin...
//Bunu alabilmekicin ise soyle yapariz key adinda bir degisken belirleyip o degiskene bir dizi olustutup onu esitleriz ve o degiskeni biz hem cities de set ile map e eleman tanimlarken kullaniriz hem de get ile elemani alirken ayni key i kullandigjimiz icin bu sefer get icine  yazdigmiz ayni key i gidecek ayni key ile kiyaslayacak ondan dolayi....esitlik olacak..

console.log(cities.get(key));//deriz bu sekilde onceden key degiskenini tanimlar sonra o degiskeni sadece direk kullanirsan  o zmaan sorunsuz bir skilde alacagiz