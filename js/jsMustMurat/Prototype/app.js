//Prototype!
//Javascript in C,Java,python gibi diller class tabanli diller
//Javascript prototype tabanli bir dildir
//Javascriptte class lar soz dizimi standartlaridir arka planda bunlar object prototypelara donusturuluyor..

//Constructor

const person11={name:"Adem",lastName:"Erbas"}//Bu obje en temel constructor olan Object constructorindan olusuyor....dikkat edelim..normalde
console.log(person11);
const cities=["Skien","Porsgrunn"];
console.log(cities);
//Prototype ile ilgili ne bilmeliyiz!
//1)
//Javascriptte biz array olustururken(array lar da bir objedir esasinda) console a yazdirdigimizda kendi elemanlarinin haricinde bir de dikkat edersek prototype lar vardir ve onun icinde de bazi hazir fonksiyonlar vardir.Arraylarda array prototype i vardir ve array lara ait hazir fonksiyonlarin hepsi burdan gelir ayni sekilde Objelerin icindeki prototype icinde de bircok hazir method bulunuyor.Ve bu prototype lar her obje ve her dizi olstugundsa otomatik olarak gelir
//2)Javascriptin en temel constructor i Object constructor idir(Normal yollarla dogrudan obje olusturursak suslu parantezlerle bunlar en temel obje olan Object constructor indan olusur ancak biz kendimiz bir function constructor olusturur onlar uzerinden yani baska constructor lar uzerinden eger obje uretirsek artik prototype karsisinda yazan constructor degeri degisecek ve bizim constructor fonk ismi ne ise o olacaktir  yani en temel de hersey constructor uzerinden olusuyor biz normal yollarla dizi ve obje olsutrdugumuzda onlarin constructorlari Object constructoridir...) ve biz bu object constructor indan da en tememl objeyi uretebiliriz
const object=new Object();//Iste bu islem normal Object literal yani normal obje olusturdugumuz zaman suslu parantezlerle o anlama geliyor yani arka planda o yapiya donusturuluyor
object.name="Adem";
console.log(object);
//BURAYA DIKKAT!
//Dikkat edelim eger obje olusturusak [[Prototype]]:Object
//Eger dizi olusturursak [[Prototype]]:Array(0) seklinde bir prototoypi vardir
//3)Peki simdi sunu dusunelim bu obje ve dizi altinda otomatik gelen prottotype lar icinde bircok method var o zaman prototype icinde method yazmak ne demektir burda method olmasi ne demektir...Soyle dusunleim bizim bu dizi altinda gelen otomatik veya obje altinda gelen otomatik prototype icindeki methodlar bizim olusturacagimiz tum obje ve dizi lerde kullanabiliyoruz yani global hale gelmistir yani temel base ozellikleri barindriiyor demektir o zaman yani biz bir function constructor objesi olustururken ondan tureme ihtimali olan tum objelerin ortak ozellikleri ne oolacaksa bunlari prototype da dusunebiliriz..'Ama biz gelir de bu ortak ozellikleri bu objelerin icinde olusturursak o zaman ayni verilerden 2 farkli kopya almis olacagiz...yani orengin 2 obje olusturursak 2 farkli kopya allmis olacagiz....Yani prototype aslinda tum objelerin veya tum arraylarin en temel veya onlarin base objeleridir ortak methodlari tuttuklari objelerdir
const object2=new Object();

function Employee(name,age){
    this.name=name;
    this.age=age;
    this.showInfos=function(){
        console.log(this.name+ this.age);
    }
    // this.toString=function(){
    //     return "Bu bir toStringdir";
    //  }
}
const employee1=new Employee("Adem",33);
console.log(employee1);
//DIKKAT
//toString() methodu normalde en temel Object methodunda var ama biz bunu biz bir method cagirdigimiz zaman javascriptin ilk arayacagi  yer olan objenijn direk icine yazarsam artik o toString() i benim objem icin ezmis,override etmis olurum....
console.log(employee1.toString());
Employee.prototype.toString=()=>"Bu bir prototype toStringidir";
//Eger biz ana obje icinde olusturdugumuz toString() fonksiyonunu kaldirmadan buraya bir de Employee nin kendi prototype ina toString fonksiynu methodu yazarsak javascript ilk siradas objenin kendisini kontrol ettigi icin o zaman bizim Employee nin propertysine yazdigimz toString() methodunu biz goremeyiz ama gidip ana objemiz icine yazdigimiz toString() methodunu silersek Employee.prototype i icine yazdigimiz toString() i artik gorebiliriz cunku javascript sira ile once ana obje icine bakar var mi sonra gelip Employee constructor prototypeina bakar orda da  yoksa o zaman en temel obje olan olusturulan tum objelerde var olan Object objesinini otomatik gelen methodlarina bakar....
console.log(employee1.toString());
console.log(employee1);
//Biz Employee fonks constructurundan bir obje olusturdugumuz zaman arka da incelersek artik constructor Employee dir ve olustrudgumuz objenijn prototypei vardir ve o prototype icinde biz constructor in Employee oldugunu goruruz ve o prototype in  icinde de bir prototype vardir.Yani aslinda javascriptte isle su sekilde yuruyor, bizim kendi olustrudugmuz func constructtorinin bir kendine ait prototype i var birde javascripttin en temel constructor i olan ve olusturdugumuz tum objelerin icine otomaik gelen Obje constructor i vardir..Iste bunun adi prototype chaindir.Object prototype i her objenin icinde ilk karsimiza cikan prototype dir sonra da constructorimizin ismini orda goruruz ve o constructor imizn icinde de kendine ait prototype i vardir
//Simdi bu yapi bize ne kazandiriyor 
//1-Her olusturulan obje icinde en teml Object prototype bulunuyor ve onun icindeki hazir mehtodlari objeler kullanabilmis oluyor yani Obje constructori esasindsa temel, ve tum objelerin miras aldigi contructor objesidir
//2-PROTOTYPE ZINCIRININ CALISMA SEKLI!    Bir zincir seklinde calisir zincir su sekildedir 1-Once kendi objesinin icine bakar sonra kendi objesinin constructori olan Employee constructor prototype ina bakar ordsa da yoksa sonra gider en temel Object Constructor ini kontrol eder...SIRA ILE..Yani biz olustrdugumuz obje orneginde, instancesinde bir method calistirmak isteiddimgiz zaman ornegin employee1.toString() sira ile once obje icine bakar, sonra kendi Employee constructor inin protoyep ina bakar en sonda en temel constructor ve tum objelerde ototmaik var olan Object constructorina bakar orda da yoksa zaten hata aliriz...
//3-Prototype aslinda bizim objeler arasi inheritance yani kalitim yapmamizi saglar.Prototype sayesinde olusturudgumuz tum objeler icine hazir methodlarimiz geliyor.
//Biz javascriptin mantigini anlayip projelerimizde javascriptte nasil kulllanilmissa bizde oyle kullanabiliriz...En temelde prototype lar kalitim icin kullaniliyor ki ondan dolayi zaten biz hazir methodlari tum arrray ve tum objelerimizde kullanabiliyoruz...

//Prototype larin bir avantaji daha...
//showInfos adinda olusturdugmuz fonksiyona dikkat edelim....

function Person(name,age){
    this.name=name;
    this.age=age;
    // this.showInfos=function(){
    //     console.log(this.name+ this.age);
    // }
}

//DONT REPEAT YOURSELF..BELLEKTE BIR KEZ OLUSTUR VE TUM PERSON CONST.DAN OLUSAN OBJELERDE KULLAN!
Person.prototype.showInfos=function(){
    console.log(this.name+ this.age);
}
const person1=new Person("Adem",32);
const person2=new Person("Memet",37);
console.log(person1);
console.log(person1.showInfos());
console.log(person2);
console.log(person2.showInfos());
//Sirayla bir kendi objesi,2, ait oldugu Person constructor prototypei birde ana otomatik gelen constructor olan Object constructor prototype larini yukardan asagi goruruz ki javascriptte bu sira ile inceler prototype chain ini
//DIKKAT!Bizim showInfos u Person constructor fonks ununda  yazmamizin bize dezavantaji nedir?
//Bizim constructorimizin icerisinde dogrudan olustrdugumuz tum ozellikler showInfos da dahil, bu fonks constructorimiz uzerinden olusturdugumuz tum objelerde yeniden yeniden olusturulacaktir ornegin eger biz Person constructor fonks undan 100 tane instance obje olustrursak showInfos da name ve age gibi 100 adet olusturulacak 100 adet ayni methoddan bellekte yer almis olacak.Peki neden showInfos u ozellikle soyluyoruz cunku bu showInfos tum olusturulan objelerde ayni amac icin ve ayni isi yapacak yani bu demektir ki showInfos u biz Person constructorundan olusturulacak olan tum objelerde ortak olacagina karar vedigimiz bir methoddur, peki o zaman biz neden kendimizi tekrar edecegiz bu kadar her bir objede tekrar olustruyoruz onun yerine biz bunun yerine biz bu methodu Person protoype icine yazarsak bundan sonra Person constructorindan olusturulacak olan tum objelerde zaten otomatik olarak yer almis olacak biz onu bir kere prototype da olsturacagiz ama bizim Person constructorimizdan olusturdugmuz tum objeler onu kullanablecekkki hem bosuna bellegimizi mesgul etmemis oluruz hem de SOLID PRENSIPLERINE GORE DONT REPEAT YOURSELFE UYMUS OLURUZ....
//O zaman 1-Person objesinden olusturacagimz her bir objenin spesifik ozellgine gore kendisinin atayacagi ozellikleri constructor icine yazarken, Person constructorindan olusacak olan tum objelerde ortak olacak ozellik veya methodlari da Person un prototype ina yazmaliyiz....ve bellegimizi de bosuna isgal etmemis oluruz...TABI BU ARADA SUNU DA UNUTMAYALIM THIS KEYWORDU SAYESINDE BIZ BU PROTOTYPE LARIMIZA YAZDIGIMIZ VE KALITIM ISLEMINI UYGULARKEN DINAMIK HALE GETIREBILIRIZ YOKSA DIREK GIDIP STATIC BIR STRING GIRMENIN BIZE BIR FAYDASI OLMAZ BIZ THIS KEYWORDU ILE PROTPTYE ICINE  YZDIGIMIZ MEHTODUN HER BIR PERSONDAN OLUSAN OBJENIN KENDINE GORE ONU ALABILMESINI SAGLARIZ....
