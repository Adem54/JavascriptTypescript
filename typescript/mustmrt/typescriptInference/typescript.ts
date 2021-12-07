{
//Infurance 
let kanal={
    name:"React Dersleri",
    follower:1345
}
//Biz typescriptte tip belirtmeden dogrudasn bir deger atamasi yaparsak, o zaman typescript biz hangi degeri atarsak o degiskenin tipini artik bizim atadigimiz deger cikarimi yaparak tipini belirliyor

let number1=24;
//number1="Adem"; number1 e ben once sayi yani number turunde bir deger girip sonra gelip ona eger string girmeye calisirsam typescript hata verecektir cunku ona ilk atama yaparken sayi atadigimiz icin artik onun tipi number oldu ve biz ona string deger atayamayiz...
let kanal2:{isim:string,takipci:number}={//Bir obje tanimlarken icindeki property tiplerini aciktan girersek bu sekilde girmeliyiz..
    isim:"React D",
    takipci:2323
}
//Bunu interface ifadesi ile ayri biryerde de type larimiz olusturabiliyoruz...
interface Kanal3 {isim:string,takipci:number};
let kanal3:Kanal3={
    isim:"React Ders",
    takipci:2376
}
//Ya da biz obje propertislerin type larini type keywordu  ile de onceden olusturabiliriz
type Kanal4={isim:string,takipci?:number};
let kanal4:Kanal4={
    isim:"React Dersler",
   // takipci:2334-Takipciyi yoruma alinca artik hata almayiz cunku tip tnaimlarken ? ile opsiyonel yapmis olduk
}
//Bir objeye degerleri girerken direk deger ismini girersek bu deger burda zorunlu demektir..
//Yani biz eger bir obje icindeki propertieslerin tipini belirlerken yazdgimiz propertiesleri biz obje nin propertieslerinin atamasini yaparken girmek zorundayz yoksa hata aliriz
//Peki biz burda bir obje olustururken once tipini yazarken tipini yazdgiimiz degiskenlerden opsiyonel yapmak istedigimiz olursa ne yapariz, opsiyonel dusunudugumz veri tipinin yanina sorun isareti koyariz...
//Bu sekilde donecegi deger tipini de gosterebiliriz istersek
const topla=(sayi1:number,sayi2:number):number=>sayi1+sayi2;
console.log(topla(4,6));
//Fonksiyonlara da type atayabiliriz..
type Topla2=(number1:number, number2:number)=>number;
const topla2=(number1:number, number2:number)=>number1+ number2;
//topla2 fonksiyonunun type i Topla2 dir
const sonuc= String(topla2(12,3));//sonuc da number olarak gozukuyor ustune gelince ama onu da stringe cevirebiliriz
//Bir de fonksiyonun parametre ve donecegi degerlerin turunu interface ile tanimlayalim
interface Topla3 { (number1:number, number2:number):number;}
const sonuc2= topla2(7,8);
//Olusturdugumuz degerler birden fazla typein birlesiminden olusan union degerler alabilir
type Kanal5={
    isim:string;
    //Unions type
    takipci?:number | string ;//Bu sekilde bu degiskene hem number hem de string deger atayabiliriz....? isareti de bu properties  opsiiyonel demektir..
}
//takipci ye atadgimz deger number ve string degerini kombine etmis deger de olablriz..
//Unions type
type Takipci=number | string ;
interface Kanal6 {
    isim:string;
    takipci?:Takipci;
}
//String yerine direk tip olarak 2 tane string yazip bu iki stringden herhangi biri olsun baskasi olmasin istersek iste bu 2 string degerini tip olarak atariz ve bu degerlerden disindsa tip olarak ne girersek girelim hata aliriz
//Literal types
type Isim="React Dersler" | "Diger";
interface Kanal7 {
    isim:Isim;//isme ya "React Dersleri" ya da "Diger" stringini girmeliyiz..
    takipci:Takipci;
}
const kanal7:Kanal7={
    isim:"Diger",//isme ya "React Dersleri" ya da "Diger" stringini girmeliyiz..
    takipci:2323
}
//Diziler
//Bu sekilde dogrudan verileri girerek dizi ve obje olusturursak typescript girilen degerden cikarim yaparak yani inference yaparak girilen deger tiplerini o degiskenin tippi olara atamis oluyor...
//interface Kanal3 {isim:string,takipci:number};
//Daha once olstrdugumuz bir tip olan Kanal3 tipinin bir dizi type olabilmesi icin asagidaki gibi kullaniriz..
const kanallar:Kanal3[]=[//type i Kanal3 girdikten sonra Kanal3 formatina uymayan veriler kabul edilmiyor ornegin kanallar dizimiz icindeki objelere isim ve takipci disinda baska property veremeyiz...
    {
        isim:"React Dersleri",
        takipci:1580
    },{
        isim:"Vue.js Dersleri",
        takipci:1510
    }
]
//Dizi olustururken Array<Kanal3> sekilde de olusturabiliriz
const kanallar2:Array<Kanal3>=[
    {
        isim:"React Dersleri",
        takipci:1580
    },{
        isim:"Vue.js Dersleri",
        takipci:1510
    }
]
//Interface veya type ile olsturdugumuz bir type baska bir type parametre olarak alabiliriz ve aldigi parametreleri interface icinde de kullanabiliriiz
//Generic Typlar denir bunlara
interface Kanal8<I,T> {
    isim:I;
    takipci:T;
}

//Generic Listler ile biz obje icindeki properties in tipini kontrol altina alabiliyoruz...
type Takipci2=number ;
type Isim2="Youtube Kanali" | "React Dersleri";
let kanal8:Kanal8<Isim2,Takipci2>[] =[
    {
        isim:"Youtube Kanali",//Isim  sadece Youtube Kanali olabilir
        takipci:2323//Burasi da sadece number tipinde olabilir..
    },
    {
        isim:"React Dersleri",//Isim  sadece Youtube Kanali olabilir
        takipci:2323//Burasi da sadece number tipinde olabilir..
    }
]

}

//Kisacasi biz typescript ile C# mantigindaki gibi guvenli tip dili gibi calismamizi sagliyor ve bu sayede biz uygulamalairmizi daha global, daha surdurulebilir ve daha kontrol altina alinabilir, daha SOLID e uygun yazabiliriz...Tum tipleri kontrol altina alabiliyoruz....