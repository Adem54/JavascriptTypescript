class Person {
  constructor(name, surname,age){
this.name=name;
this.surname=surname;
this.age=age;
  }
fullName(){
  return this.name+ " "+ this.surname;
}
static showName="Person";
static staMethod(){
  console.log("STATIC METHOD");
}
}
//DIKKAT!STATIC METHODLAR O CLASS A AIT OLAN METHOD VE PROPERTY LERDIR, NESNEYE DEGIL, INSTANCEYE DEGIL

console.log(Person);

let adem=new Person("Adem","Erbas",33);
//ben new anahtar kelimesi ile yeni bir obje olusturdugum zaman sirasi ile arka planda javascriptte su islemler gerceklesiyor
//1-Bellekte adem degisken ismine karsilik gelen yeni bir obje olusturabilmek icin bir adres tutar referans tutar yeni bir yer acar ve obje olusturur
//2-this anahtar kelimesini adem degiskenine baglar
//3-constructor i calistirir
console.log(adem);//Person {name: 'Adem', surname: 'Erbas', age: 33}
//console.log(adem.showName) undefined gelir
//console.log(adem.staMethod()) hata aliriz
console.log(Person.showName);
console.log(Person.staMethod());


//NELERI YEN I OGRENDIM!!!
//1-ONEMLI BIR NOKTA!!!
//BIZ BAZI METHODLARIN SADECE O CLASS A AIT OLMASINI ISTERIZ VE O CLASS TAN URETILEN OBJELERE INSTANCELERE DEGIL DE SADECE O CLASS TA BULUNSUN ISTERIZ MESELA BUNLARA STATIC METHOD VE STATIC OZELLIK DENIR..
//BU YONTEM REACT TE CONTEXTTYPE ICIN KULLANILIYOR....

//2-bir objenin Person class indan turetilip turetilmedigini anlamak icin
if(adem instanceof Person){
  console.log("adem objesi Person classindan turetilmis ve onun bir instancesidir")
}else{
  console.log("adem objesi Person classindan turetilmemistir")
}

//NELERI IYI ANLAMALIYIZ?
//1-Biz class icinde constructor disinda fonksiyon olusturdugumuz zaman onun arkada aldigi yer console.log yapip cek edersek eger, Person class indan olusan ilk ana objenin icindde yer almaz, gelip Person class indan turetilen nesnenin icinde bulunan prototype i yani temel Base Object nesnesi, onun atasi olan prototype in icinde yerini alir ve bu da suna sebep olur artik Person class indan uretilen tum nesneler in icinde fullName class icinde oldugu gibi kullanilacaktir ve ortak bir methoddur farki nedir peki constructor icinde olusturulanlarla 1.farki simdi yazdigimiz arka da prototype icinde bulunuyor 2.farki ise prototype icinde bulundugu icin eger Person class indan turetilen objelerden bir tanesi fullName icinde bir degisiklik yaparsak bu degisiklik Person class indan turetilen tum objelere de yansiyacaktir ondan dolayi prototype icinde bulunacak ozellkler bu hesaba katilarak orada olusturulmalidir....
//TAM OLARAK BU SEKILDE BULUNACAKTIR
// Person {name: 'Adem', surname: 'Erbas', age: 33}
// age: 33
// name: "Adem"
// surname: "Erbas"
// [[Prototype]]: Object
// constructor: class Person
// fullName: ƒ fullName()
// [[Prototype]]: Object

let zehra=new Person("Zehra","Erbas",8);
console.log(zehra);
// Person {name: 'Zehra', surname: 'Erbas', age: 8}
// age: 8
// name: "Zehra"
// surname: "Erbas"
// [[Prototype]]: Object
// constructor: class Person
// fullName: ƒ fullName()
// [[Prototype]]: Object

//NEDEN CLASS ILE CALISIRIZ
//Nesne yonelimli programlamada mumkun oldugunca problemi parcalara ayiririz buna Modulerlestirmek denir...
//Projede ilerde gelebilecek degisiklik taleplerinde bizim isimizi kolaylastirir projemiz degisiklige direnmez
//Bir hata ile karsilastigimizda isimizi kolaylastirir
//Plug and play mantigginda programimizi calistirma konusunda bizim isimizi kolaylastirir
//Class lar kendilerinden tureyecek olan nesnelere sablon gorevi gorurler...tasarim gorevi gorurler


//Customer class imiz ile Person  class inin inherit edelim

class Customer extends Person{};

let adem2=new Customer("Adem2","Erbas2",33);
console.log(adem2);
console.log(adem2.fullName());
//Customer {name: 'Adem2', surname: 'Erbas2', age: 33}
//age: 33 name: "Adem2" surname: "Erbas2" [[Prototype]]: Person a ait olan tum ozellikleri Customer kullanabiliyor onu inherit ettigi icin
//Yalniz su farka dikkat edelim biz Person class indan obje turettigimiz zamn instance olusturdugumuz zaman Prototype i Object base nesnesidir
// Person {name: 'Zehra', surname: 'Erbas', age: 8}
// age: 8
// name: "Zehra"
// surname: "Erbas"
// [[Prototype]]: Object

//Ama Person i inherit eden Customer class inin prototype ina bakacak olursak Person dir Person i inherit ettigi icin...
// Customer {name: 'Adem2', surname: 'Erbas2', age: 33}
// age: 33
// name: "Adem2"
// surname: "Erbas2"
// [[Prototype]]: Person

//PERSON CLASS INDAS OBJE+CONSTRUCTOR DA OLAN NAME,SURNAME,AGE ILE PERSON CLASS INI OLUSTURDUK BIZ
//AMA CUSTOMER CLASS INDA  PERSON=>CUSTOMER..ARTIK NAME,SURNAME,AGE,FULLNAME ORTAK HALE GELDI...VE PERSON A AIT OLAN TUM OZELLIKLERI ALDI....
//CUSTOMER BIR SUBCLASS DIR CHILD DA DENEBILIR
//PERSON ISE BIR SUPERCLASS TIR YANI PARENT DA DENEBILIR

console.log(adem2 instanceof Customer);
console.log(adem2 instanceof Person);
console.log(zehra instanceof Person);
console.log(zehra instanceof Customer);
//adem2 Customer dan turetilmis bir instancedir ve Customer instancesider true, ayrica Person class ini inherit ettigi icin onun da instancesidir...true zehra da zaten Person dan turetildigi icin Person instancesidir true, ama zehra Customer instancesi degildir false

console.log("-----------------------------------------")
//PEKI BIZ CUSTOMER A KENDISINE OZEL BIR PROPERTY EKLEMEK ISTERSEK NE YAPARIZ...

class Person2 {
  constructor(name, surname,age){
this.name=name;
this.surname=surname;
this.age=age;
  }
fullName(){
  return this.name+ " "+ this.surname;
}
}


class Employee extends Person2{
    constructor(name,surname,age,job){
      super(name,surname,age);//Bunlari super class dan al diyrozu ayni :base ozelligi gibi...,super class nedir base class olan Person dur dolayisi ile Person ozellikerini super sayesinde kullaniriz
      this.job=job;//job ise sana has bir ozellik diyoruz
  }

  makeMoney(){
    console.log("MAKE MONEY!");
  }
}



let zehra3=new Person2("Zehra3","Erbas3",8);
console.log(zehra3);
let adem3=new Employee("Adem3","Erbas3",33,"developer");
console.log(adem3);
console.log(adem3.fullName());
adem3.makeMoney();

//Employee nin prototype i Person2 dir ve Person2 nin prototype i ise Object tir
//Employee nin kendine ait olan job property si constructor icinde oldugu icin direk objenin icinde gorebiliyoruz arkada ama makeMoney property sini constructor disinda olusturdugumuz icin yine inspect edip inceledigimizde onu da kendi prototype i icerisinde oldugunu gorebiliriz ayrica bir de Person2 nin prottype i olan Object var ona da tiklayinca o zaman da fullName i goruyoruz..
//PERSON2+JOB+MAKEMONEY METHODU()=>EMPLOYEE


//COOOK ONEMLI BIR BILGI...THIS KEYWORDUNUN SUBCLASS LARDAKI DAVRANISI......
//BURAYA DIKKAT--NORMALDE BIZ BIR CLASS TAN INSTANCE OLUSTURDUGUMUZ ZAMAN GIDER MEMORY DE BIR ADRES TUTAR SONRA THIS KEYWORD UNU OLUSAN DEGISKENE BAGLAR SONRA DA CONSTRUCTOR I CALISTIRIRDIR ANCAK SUB CLASS ICIN BU DEGISIYOR YANI BIR CLASS I EXTENDS EDEN BIR CLASS ISE SUB CLASSTAN INSTANCE OLUSTURDUGUMUZ ZAMAN YENI BIR NESNE OLUSTURUP THIS KEYWORDUNU I ONA BAGLAMAIYOR, YENI BIR NESNE OLUSTURUP THIS  I ONA BAGLAMASIJNI SUPERCLASS DAN BEKLIYOR ONDAN DOLAYI BIZ EGER BIR SUBCLASS DA SUPER KEYWORDUNU CALISTIRMAZSAK VE THIS KEYWORDUNU KULLANIRSAK HATA ALIRIZ CUNKU THIS KEYWORDU SUPER CLASS TAN ONCE HENUZ OLUSMAMIZ OLUYOR ZATEN....
//BU ARADA AYNI MANTIK C# DA DA VAR EGER BIR CLASS I INHERIT EDEN BASKA BIR CLASS CONSTRUCTOR OLUSTURUYORSA O BASE CLASSIINI YANI INHERIT ETTGI CLASS ININ :BASE() DIYE CALISTIRMAZSA HATA ALINIR....ZATEN  SUPER KEYWORDU SUPER CLASSIN YANI PARENT CLASS IN OLUSMASINI SAGLIYOR ONCE VE SONRA ISLEMLERIMIZ SURUYOR ...CUNKU SUBCLASS IN THIS I SUPER CLASS TARAFINDAN OLUSTURULUYOR
//BU ARADA BU SOYLEDIGMZ SART EGER SUBCLASS TA CONSTRUCTOR KULLANILIYORSA CONSTRUCTOR ICINDE THIS I KULLANMADAN ONCE SUPER KEYWORDUNU CALISTIRMALIYIZ....


//javascriptden gelen Array class i inherit ediyor
//Javascript in Array methoduna yeni bir ozellik eklemis olduk..burda ve ismini ExtendedArray diye yazmis olduk
class ExtendedArray extends Array{
  shuffle(){
    //array elemanlarinin karistirilmasi
    this.sort(()=>Math.random() - 0.5);
  }
}

let myArr=new ExtendedArray(2,4,7,9,12);
console.log(myArr instanceof ExtendedArray);//true
console.log(myArr instanceof Array);//true


console.log(myArr);
myArr.shuffle();
console.log(myArr);