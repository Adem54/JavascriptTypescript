//Javascriptte nesne yonelimli yaklasim...
//classlara neden ihtiyac duyuldu

function Person(name,surname,age){
  this.name=name;
  this.surname=surname;
  this.age=age;
  this.fullName=fullName;
  
}

//Constructor function lari biz bir sablon yapip o sablon uzerinden nesneler uretmek icin kullaniyorduk

//Bu bestpractise degill.....
function fullName(){
  return this.name + " "+ this.surname;
}
//KENDIMIZI TEKRAR EDIYORUZ....HER SEFERINDE FULLNAME OLUSUYOR HER BIR OBJE OLUSUMUNDA...
const adem=new Person("Adem","Erbas",33);
const zehra=new Person("Zehra","Erbas",8);
const zeynep=new Person("Zeynep","Erbas",33);

//DO NOT REPEAT YOUR SELF-DRY
//Burda soyle bir problemimiz var kendimizi tekrar ediyoruz her bir obje olusturudugumuzda fullName property function i tekrar tekrar olusturuyoruz ama her birisinde ayni islevi yapiyor yani biz fullName propertiesini bir base nesne ye atsak da her seferinde olusturmak yerine 1 kez olusturup sonra onu Person nesnesinden olusturdugumuz tum nesnelerde kullansak iste o zaman hem SOLID hem de Do not repeat yourself prensibine uymus oluruz ve hem de her seferinde bellekte bir functon olusmasinin da onune gecmis oluruz....

//Bu sekilde de fullName adinda bir fonksiyon olusturdukta sonra o fonksiyonu biz prototyping ile propertimiz haline getirebiliriz ne ile Person nesnesinde urettigimiz bir instance uzerinden...Ancak bu dogru bir kullanim degildir cunku biz base nesne icinde bulunmasi gerekekn bir metdodu global de olsuturup da ortaya birakamayiz cunku bu sekilde kullanacagimiz cok fazla fonsk olacak....
console.log(adem.fullName());//Ayrica biz yine ayri ayri her bir instance iicin property olusturmaya calisiyoruz bu sekilde degil her bir instance nin altinda otomatik bulunsun yanii instanceye dot notasyonu yaptigimizda otoamatik gelsin onun ozelligi olarak yani inherite etmis gibi olsunlar

//BEST PRACTISE....
//Biz fullName i base nesne olan prototype Obje nesnesini icine alacagiz...


//Arka plan da incelersek propertieslerimiz arkada ana objenin icindedir ancak bir de Object prototype yani base olan nesnmiz var dir Person2 icinde iste biz fullName i prototype Object base nesnesine alacaggiz...
function Person2(name,surname,age){
  this.name=name;
  this.surname=surname;
  this.age=age;

  
}
Person2.prototype.fullName=function(){
  return this.name + "  "+ this.surname;
}

//FUNCTION CONSTRUCTOR DA PROTOYPING ILE EKLEDIGIMIZ FRIENDS DE KI PROBLEM....
//Ancak prototype kullanarak base nesneye prototype Object base nesnesine referans tipli veriler eklerken ozellikle bazi sorunlarla karsilasiyoruz...
//Mesela friends ekleyelim
Person2.prototype.friends=["Barbara","Marit"];//Base Object nesnesine prototype olarak ekleyecegimiz ozellikler Person2 nesnesinden olusacak tum nesnelerde ortak kullanilacak ozellikler olmalidr cunku Person2 nesnesinden olusacak tum nesneler e otomatik olark value leri alabilecekler...
//adem2.friends.push("Kristian");
//Ben adem2 ye arkadas ekleyince de Person2 den olusturulan tum instancelere de otomatik olarak geliyor
const adem2=new Person2("Adem","Erbas",33);
const zehra2=new Person2("Zehra","Erbas",8);
const zeynep2=new Person2("Zeynep","Erbas",33);
//GORDUGUMUZ GIBI BIZ FULLNAME DIREK CAGIRIYORUZ VE SONUCU ALABILIYORUZ DOGRUDAN CUNKU BIZ ONU BASE NESNEMIZ OLAN PROTOTYPE YANI OBJECT NESNEMIZE ATTIK
console.log(adem2.fullName());
console.log(zehra2.fullName());
console.log(zeynep2.fullName());

adem2.friends.push("Kristian");
//Ben adem2 ye arkadas ekleyince de Person2 den olusturulan tum instancelere de otomatik olarak geliyor
console.log(adem2.friends);
console.log(zehra2.friends);
//iSTE BU PROBLEMI CLSS KULLANARAK COZECEGIZ
//BU ARADA CLASS DEDIGIMIZ SEY DE ZATEN BIR FONKSIYODUR..BIR CONSTRUCTOR FONKSIYONDUR...
//NEDEN CLASS KULLANIRIZ....
//Bizim property sayimiz arrttikca isleirimiz karmasiklasiyuor ve kontrol edilemez hale geliyor iste bu tarz durumlar icin ayni isi yapan islevleri class lar altinda toplayabilmek icin orneting sepet islemi ile ilgili tumn obje,class function vs variable lari   1 tane cart isminde class olusturup  onun icine almak seklinde dusunerek daha da kurumsal ve profesyonel daha kolay yonetilebilir sekilde calisabilmek icin class lari kullanriiz...

//BIRDE NESNELERI CLASS LAR UZERINDEN OLLUSTURALIM
//Constructor fonksiyonlarinda buyuk harf Pascal Case ile deegisken ismi verilmeli class da da ayni sekildedir..
 class Person3{
  
  constructor(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.friends=["Barbara","Marit"];
  }
  fullName(){
    return this.name+ " "+ this.surname;
  }//Biz constructor function uzerinden islem yaparken fullName i gidip prototype a ekleyerek Person2 constrctor func dan uretilen instancelerin kullanmasini saglamistik bur da  ise fullName i yine gidip prototype icinde olusturmasi icin biz ne yaptik constructor icinde degil de disinda yazdik ve gidip prototype icersinde olustrumus oldu....
}

//Simdide class larimiz uzerinden obje olusturalim

let adem3=new Person3("Adem","Erbas",33);
let zehra3=new Person3("Zehra","Erbas",8);
let zeynep3=new Person3("Zeynep","Erbas",33);
console.log(adem3);
console.log(adem3.friends);
console.log(zehra3);
console.log(zehra3.friends);
console.log(zeynep3);

//new dedigimiz anda gider bellege ve
//1-Hafiza da olusacak olan nesne icin adres tutar yer ayirir
//2-this degerini o an hangi nesne icin olusturacaksak onun yerini aliyor
//3-constructor mehtodunu direk calistirir...

//DIKKAT ETMEMIZ GEREKENLER
//1)Biz constructor function uzerinden islem yaparken fullName i gidip prototype a ekleyerek Person2 constrctor func dan uretilen instancelerin kullanmasini saglamistik bur da  ise fullName i yine gidip prototype icinde olusturmasi icin biz ne yaptik constructor icinde degil de disinda yazdik ve gidip prototype icersinde olustrumus oldu....
//2)Biz burda javascript kullansak da arka planda javascript engine de yapilan islemlerin tamami ayni aslinda, class ile yazmamizin esprisi tamamen daha anlasilir bir seviyede  ve diger nesne yonelimli diller gibi anlasilir olmasi icindi yoksa baska bir espiri yok arka tarafta olan biten ayni seyler...

//FRIENS PROBLEMINI COZELIM
adem3.friends.push("Krisitan");

console.log(adem3);
console.log(adem3.friends);
console.log(zehra3);
console.log(zehra3.friends);

//ISTE BEST PRACTISE VE JAVASCRIPT CLASS LARININ GUCU!!!!

//GORDUGUMUZ GIBI PROBLEMI NASIL COZDU ORTAK OLAN ARKADASLARI DIREK CONSTRUCTOR ICINE YAZDIK SONRA DA KIMIN EKSTRA SADECE KENDINE OZEL ARKADASI VARSA O KENDINE EKLEYINCE DIGERLERINE DE EKLENMIYOR CUNKU BIZIM FRIENDS PROPERITY SI CONSTRUCTOR ICINDE YAZILI YANI ARKA PLAN DA CONSTRUCTOR ICINDE OLANLAR ANA NESNE PERSON3 ICINDE GOZUKUR, CONSTRUCTOR DISINA YAZDIKLARIMIZ ISE PROTOTYPE OBJECT NESNESI ICINDE GOZUKUR VE ORADAKI DEGISIKLIKLER TUM INSTANCELERE YANSIR ONDAN DOLAYI FULLNAME I ORAYA YAZDIK VE ORDA THIS KEYWORDUNU KULLANARAK ASLINDA BIR DINAMIK ISLEM DE YAPIYORUZ CUNKU THIS HANGI INSTANCE ILE CALISIRSA O INSTANCE YI TEMSIL EDIYOR VE HARIKA BIR YONTEM!!!!!

//Person3 class imizin tipinin kontrol edelim...
console.log(typeof(Person3));//function oldugunu gorebiliriz...
//CLASS LARI DA BIZ AYNI FONKSIYONLARDA OLDUGU GIBI 2 SKILDE TANIMLIYORUZ...1.SI YUKARDA KI GIBI CLASS DECLERATION-FUNCTION DECLERATION 2.SI DE FUNCTION EXPRESSION-CLASS EXPRESSION YANI BIR DEGISKENE ATAYARAK OLUSTURABILIYORUZ..

let Person5= class{
  constructor(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.friends=["Barbara","Marit"];
  }
  fullName(){
    return this.name+ " "+ this.surname;
  }
}