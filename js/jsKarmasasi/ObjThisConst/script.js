//
//NESNE OLUSTURMANIN 1.YONTEMI...
const person={
    name:"John",
    surname:"Doe",
    age:40,
    languages:["Turkish","English","Spanish"],
    fullName:function(){
        return this.name+ " "+ this.surname
    },
    address:{
        city:"Skien",
        district:"Klyve"
    }
}
//fullName bir methoddur...
//Biz veritabanina verileri girerken bir cok farkli baslik kolonu vardir ve biz bu kolonlardaki her bir veri aslinda degiskendir ama biz verileri toplu halde tutmak siteriz ve birbiri ile ilskileri bir aradu bulunmdurmnak istiyoruz...Yani bu sekilde cok daha pratik islem yapariz...

//dot notation
console.log(person.name);
console.log(person.name);
console.log(person.fullName());//invoke etmeliyiz..

person.job="Teacher";//Sonradan yeni bir property ekleyebiliyoruz prototoyping ile cok onemli!!!!!

console.log(person["name"]);
console.log(person.job);

console.log(person["fullName"]());

//Constructor fonksiyonu olusturarak javascript nesnesi olusturmak!!
//NESNE OLUSTURMANIN 2.YONTEMI!!
//CONSTRUCTOR FUNCTION NESNESI!!!!
//Biz constructor fonksiyon nesnelerini olusturacagimiz nesneler icin sablon olarak kullanabiliriz....
function Student(name, surname,age){
    console.log(this);//Student {}
this.name=name;
this.surname=surname;
this.age=age;
console.log(this);
}
//Burda this e dikkat edelim biz hangi degerleri verirsek onlari alir ve biz bu sablon uzerinden gelip istedigimiz kadar student insttancesi olusturabiliyoruz.....O an hangi nesneyi olusturuyorsan this onu isaret edecektir.....
//this asagida student1 iken bir altta student2 oluyor...

const student1=new Student("Adem","Erbas",33);
const student2=new Student("Ahmet","Erdem",33);
//const student3=new Student("Mehmet","Sayar",33);
//const student4=new Student("Serkan","Kar",33);
const students=[student1,student2]
console.log(students);

 //FUNCTION CONSTRUCTOR NESNELERI ARASINDSA OVERRIDE...   
//Eger biz ayni Student isminde bir tane daha function constructor olusturursak farkli parametrelere sahip o zaman en son olusturdugum constructor fonksiyonu bir onceki ayni isimle olusan constructor fonksiyonunu override eder yani ezer ve bundan once de ayni isimden olusturulan nesnelerde artik en son olusturdugmuz ayni isimdeki nesneye gore kendini olustururlar.........
function Student(name,surname){
    this.name=name;
    this.surname=surname;
}

const student5=new Student("Kamil","Arslan",38);
console.log(student5);

//NEW ANAHTAR KELIMESI!!!!
//new anahtar kelimesi
//javascript new i gorur gormez yeni bir tane bos bir nesne olusturacaktir......ve hangi degiskene atanacaksa olusturulan new adresi o degiskene verir, referransini o degisekene verecektir...
//Ayni zamanda new anahtar kelimesi calistiracagimiz fonksiyonun da bir constructor fonksiyon oldugunu soyler...

//NESNE OLUSTURMANIN 3.YONTEMI!!!
//Build-in javascript core da gomulu olarak bulunan Object Constructor fonksiyonunu  kullanmak!!!!!!!!
const student6=new Object();//ObjecConstructor(build-in by javascript core)
//Biz yukarda Student constructor fonksiyonunu manuel olarak yazmistik ancak javasscrip Object constructor nesnesinin bir contructor oldugunu biliyor ondan dolayi bunu manuel olarak yazmamiza gerek yok...
//Direk studen6 instancemize propertiesler ekleyebiliriz...
student6.name="Murat";
student6.surname="Erdem";
student6.age=45;
student6.fullName=function(){
    return this.name + "   " +this.surname;
}
//this her zaman current variable, current objecti veriyor yani student6...

//NESNE OLUSTURMANIN 4.YONTEMI
//Object.create() ile CREATE YONTEMI ILE NESNE YAZDIRMAK!!!!!
//Yeni bir nesne olustururken eski nesneyi kullanacagiz

//parametre olarak daha once olusturdugum person objesini veya nesnesii kullan diyoruz  yani person objesinin propertieslerini kullanabilirsin demis oluyoruz...Yani aslindsa inheritance aliyor diyebiliriz yani aslinda yaptigi sey su...


const adem=Object.create(person);
adem.name="Zehra";
adem.surname="Erbas";
adem.age=8;
console.log(adem);
console.log(adem.fullName());





