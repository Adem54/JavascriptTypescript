//OBJECT PROTOTYPE

//COOK ONEMLI BIR NOKTA....
//Javascriptte tum nesneler baska bir nesneden turetilerek olusturulur ya kendinden daha once ya da onun ata nesnesinden turetilir.Bir onceki nesneye de turetilen nesnenin prototype i denir


const person={
    name:"John",
    surname:"Doe",
    age:40,
    languages:["Turkish","English","Spanish"],
    fullName:function(){
        return this.name+ " "+ this.surname
    },
}
console.log(person);
console.log(person.name);
console.log(person.fullName());
//console.log(person.fullName2());//not a function
//console.log(person.job);//undefined
console.log(person.toString());//[object object]
//Person nesnesini olusturdugumuz zaman person nesnesini prototype i bir objecttir
//[[Prototype]]: Object ve icinde default olarak gelen bir cok properties ler vardir ve biz Person nesnesini olusturur olusturmaz person nesnesi prototype olarak Object nesnesini aliyor yani Object nesnesine ait olan tum methodlari ve proeprtieslerini aynisini person nesnemizde de kullanabiliyoruz ondan dolayi toString i kullanabiliyoruz...
console.log(person.hasOwnProperty("name"));//icinde var oldugu icin true geliyor person nesnesinin name isminde bir methodu var mi demektir...veya properties i var mi evet var true o zaman
//Bizim person nesnemiz kendi prototype i olan Object nesnesinin hasOwnProperty ve toString propertislerini inherit ediyor yani miras aliyor ve onlari kullanabiliyor....

//COOK ONEMLI BIR NOKTA....
//Dikkat edelim diziler de bir nesnedir aslinda ve bir prototype array(0) ata nesnesine sahiptir ve icinde bircok default ozleligi vardir toString gibi....


const myObj={};
console.log(myObj);
console.log(myObj.toString);
//Biz bos bir obje tanimlasak bile Javascript core icinde gomulu olan Object prototype olarak olusan bos nesnelerin de icinde olusarak geliyor dolayisi ile bos bile olsa javascirpte objeler icinde temel nesne olan Object nesnsi ile geliyor ve icinde  default method veya propertiesler ile geliyor...
//



const myArr=[1,4,6];
console.log(myArr);
console.log(myArr.toString());
//array icindeki array dizilerinin tamamnini(concat,map,filter,call,apply...push,pop) bizim olusturdugumuz array lerimiz kendi prototype lari olan Array(0) dan aliyor...


function Student(name, surname,age){
    console.log(this);//Student {}
this.name=name;
this.surname=surname;
this.age=age;
this.fullName=function(){
    return this.name + this.surname;
}

}

const erbas=new Student("Adem","Erbas",33);
console.log(erbas);
//Student {name:"Adem", surname:"Erbas",}
//erbas ismindeki yeni nesnemiz ozelliklerini propertieslerini Student constructor indan aliyor birde Object temel javascript nesnesinden aliyor daha da basitlestirirsek erbas nesnesinin protoype i Student tir Student in prototype i ise javasscript Object temel nesnesidir....
//OBJECT-name-surname-age-fullName()--->Student--->erbas
//erbas Student ten geliyor onu inherit ediyor Student ise OBJECT javascript nesnesini inherit ediyor...Dolayisi ile erbas nesnesi hem Studen constructor inin propertieslerini hem de js Object nesnesinin propertieslerini kullanabiliyor...

console.log(erbas.toString());
console.log(erbas.hasOwnProperty("age"));

console.log(erbas.__proto__);//Object ve Student constructorini getirir

const zehra=new Student("Zehra","Erbas",8);
console.log(zehra);
zehra.job="child";//Farkli bir property ekliyoruz..
console.log(zehra);

//Biz prototype zinciri uzerinden ilerliyoruz buna dikkat edelim...
console.log(zehra.toString());

//PROTOTYPE OZELLIGINI OVERRIDE ETME.....
//YENI BIRSEY PROTOYPE DA VAR OLAN BIR PROTOTYPE OZELLIGININ OVERRIDE, YANI EZEBIILIRZ YANI UZERINE YAZABILIRIZ...
zehra.toString=function(){
    return "Zehra";
}

console.log(zehra.toString());//Artol "Zehra" olarak donecektir...[Object object]  yerine
//Javascriptte tum nesneler kendinden daha once gelen nesneden urtilmistir iste kendinden once den kastettiimiz nesne kokte olan prototype dir....


//ISTE MUTHIS BIR BESTPRACTISE DAHA.....
//BASE CLASS OLUSTURMA MANTIGINDA, ORTAK KULLANDIGIMIZ YANI FULLNAME LER ORTAK OLACAK THIS OLD ICIN, AYRICA DA SOY ISIMLER DE ORTAK O ZAMAN SONUCU ORTAK OLACAK SEYLERI BIZ NEDEN HEM PERSON1 DE HEM DE PERSON2 DE ARGUMENT OLARAK VERELIM NEDEN KENDIMIZI TEKRAR EDELIM ONUN YERINE BIZ FULLNAME VE SURNAME I TEMEL DEFAULT OBJEMMIZ OLAN PROTOTYPE A EKLERIZ VE DONT REPEAT YOURSELF PRENSIBINI UYGULAMIS OLURUZ.....

function Person(name,/* surname*/ age){ 
this.name=name;
//this.surname=surname;
this.age=age;
//this.fullName=function(){
//    return this.name + this.surname;
//}
}

console.log(Person);

Person.prototype.fullName=function(){
    return this.name + this.surname;
}

Person.prototype.surname="Erbas";

const person1=new Person("Adem",33);
const person2=new Person("Zehra",8);

console.log(person1);
console.log(person1.fullName());
console.log(person1.surname);
console.log(person2);
console.log(person2.fullName());
console.log(person2.surname);


//person3 adinda bir nesnemiz olsun ama bu aileden olmasin yani soy ismi farkli ama fullName i kullannacakj surname i ise Erbas degil de bgaska kullanacak ne yapariz
const person3=new Person("Kemal",36);
person3.surname="Kara";
console.log(person3);

//Inheritance
//PROTOTYPEL INHERITANCE...
//Javascript in ES5 surumu inheritance kavramini prototypel inheritance olarak kullaniyor property ve methodu kendi prototype indan aliyor

const customer={
    name:"XXXXXXX",
    surname:"XXX",
    age:0,

    fullName:function(){
        return this.name+ " "+ this.surname
    }
}

const myZehra=Object.create(customer);//customer i inherit et diyoruz...customer a ait properties leri de bgu sekilde kullanabilmis olacak....Ama propertiesleri kullanarak kendi ne ozel olan verileri girmelidir
console.log(myZehra);//{}
//customer i inherit etmis kendisinin icinde direk customer daki ozellikler yok onlar direk gelmiyor ama customer a ait propertiesleri cagirirsa onlarin value degterlerinij geldigini goruyoruz...Yani customer in ozellikleri,propertiesleri myZehra nin prototype inin icersinde gozukuyor....
console.log(myZehra.name);//XXXXXXX
console.log(myZehra.surname);//XXX
console.log(myZehra.age);//0
//Ama biz gelip de name,surname ve age e yeniden deger atamasi  yaparsak o zaman ne yapmis oluyoruz bu propertiesleri dogrudan artik myZehra nesnesine almis olmanin yaninda bir de customer dan gelen default name,surname ve age degerlerinin de uzerine yazmis yani onlari override etmis yani ezmis oluyoruz....
//Biz nesnemiz uzerinden bir ozelligi dot notasyonu ile cagirdigimiz zaman nesne once kendi propertieslerinin  kontrol eder bulamazsa prototype zincirinde nesneden sonra gelen propertiesleri inceler orda da bulazsa daha icerdeki prototype lara kadar bakar ve nerde ilk karsilasirsa onun valuesini bize donderir ondan dolayi da biz prototype dan gelen default ozellikleri toString() gibi, eger istersek override edebiliyoruz....
myZehra.name="Zehra";
myZehra.surname="Erbas";
//age i biz kendimz atamadik o zaman gider bunu prototype dan alir...cagirdigimiz zaman...yani kendi icinde yok ama prototype inda var bir altinda yani prototype zincirine gore...

console.log(myZehra);

console.log(myZehra.hasOwnProperty("name"));//true
console.log(myZehra.hasOwnProperty("age"));//false cunku nesne icinde yok prototype inda var...

//Ama biz bu ozellik herhangi bir yerde var mi diye cek etmek istersek yani objenin kendi icinde olmasa bile prtotype in icinde , veya prototype zinciri icinde herhangi bir prototype icinde var mi diye sorgulamak istersek...

console.log("age" in myZehra);//true..gidip myZehra nin altinda prototype larin icinde vs var mi diye cek eder ve bulur-true

//C# ILE Javascript Karsilastirilmasi...javascriptte temel nesne build-in gomulu Object temel nesnesidir yani prototype dir aslinda..
//Prototypel Inheritance mantik olarak ne yapmaya calisir ortak ozellikleri prototype da toplamaya calisir ve bir nesneyi baskas bir nesneden turetmeye calisir....
//Normal C# gibi dillerde biz inheritance olustururken once bir Person class i olustururuz ve oraya Person i inherit edecek tum class larda yani Customer,Student,Employees,Employeer...tum hepsinde ortak olacak propertiesler Person class ina yaazilir ve Person u inherit edecek her bir class in icine de ihtiyaca gore kendilerine ait spesifik propertiesler eklenebilir....Iste ayni mantik burda da var.....Burda das ortak ozellikler prototype icinde toplanir ve ekstra her bir objenin kendine has ozellikeri de kendsi tarafindan eklenebilir....

