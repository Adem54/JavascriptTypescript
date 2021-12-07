
//OBJECT.CREATE ILE OLUSURKEN DOGRUDAN BASKA BIR OBJEYI NIN PROTOTYPE INI KALITIM ALARAK OLUSTURMA
//Bir objeyi olustururken prototype ini baska bir objeden olusturmamizi sagliyor..temel mantigi budur, yani aslinda baska bir objeyi kalitim almis oluyor yani Object.create ile prototypini aldigi objenin tum ozelliklerini inherit ederek almis oluyor ve kullanabiiliyor yani kalitim  yapmis oluyor...
const obj={
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}
console.log(obj);
//Biz istiyoruz ki yeni bir obje olusturalim ve objemizin prototype i obj objesinin prototype ini alsin diyoruz yani obj objesini inherit etmek istiyoruz onun ozelliklerini de kullanmak istyoruz olusturacagimiz objede.Yani obj objesini inerit etmis olacak ve onun ozellikerini kullanabilmis olacak
const newObj=Object.create(obj);
newObj.test1();
newObj.test2();
//Simdi obj objesini ozelliklerni aldi peki kendine ozel olacak ozellikler almak isterse ne yapacak onu da yine prototyping mantigi ile ekleyebilr
newObj.name="newObj";//Bu ozellik newObj objesine ozeldir
console.log(newObj);//{name: 'newObj'}
console.log(newObj.name);
console.log("Bir baska kalitim olayi!")
function Employee(){
}
Employee.prototype.test3=function(){
console.log("Test3");
}
Employee.prototype.test4=function(){
    console.log("Test4");
    }
    const employee1=new Employee();
    console.log(employee1);
//Peki biz eger bir baska constructor fonksiyon Employee nin prototypeinda olan methodlari miras almasini istersek ne yapariz
function Customer(name,age){
    this.name=name;
    this.age=age;
}
//Object.create ile kalitim, inheritance yapmak!
Customer.prototype=Object.create(Employee.prototype);//Biz Employeenin prototoype ini Customer in prototypina aktararak onu miras almis oluyoruz...
const customer1=new Customer("Zehra",8);
console.log("customer1: ",customer1);
customer1.test3();//customer1 uzerinden employee ye ait methodlari kullanabildik artik!...
customer1.test4();
//Employee Customer tarafindan miras alindi ve Employee ye yeni bir ozellik ekleyerek deneyelim Customerdan olusturulan bir instance kullanablecek mi o ozelligi
//Employee.city="Skien";//Bu mantikli birsey degil yani bu sekilde Employee constructor inin kendi icine eleman eklenmz zaten bu elemani da ora da goremeyiz direk constructor func uzerinden biz prototype gideriz ancak direk objeye eleman eklemek istersek  conctrctor icinde olustururuz 
Employee.prototype.country="Norway";
const employee3=new Employee();
employee3.city="Skien";
console.log(customer1.city);//city yi getirmez cunku bunu direk objenin icinde olusturuldu
console.log(customer1.country);//Burda Norway aliriz prototype da old icin
 Customer.prototype=new Employee();//BURDA CUSTOMER CONSTRUCTOR I EMPLOYEE YININ PROTOTYPINI INHERIT EDIYOR....HER IKISIDE
 const customer2=new Customer("Zehra",8);
 console.log("customer2: ",customer2);
console.log("---------------------------------------------------------")
console.log("Objenin baska bir constructtor func dan olusmus obje isntancesini inherit etmesi")
//INHERIT ETMENIN BASKA YOLU-BIR OBJENIN BIR CONSTRUCTOR FUNC OBJESININ NSTANCESINI INHERIT ETMESI!
//Bu da prototype keyworu uzerinden var olan bir objenin baska bir objeyi prototype yolu ile inherit ederek o objenin ozelliklerini kendi prototypeina almasi
function Person(name,age){
    this.name=name;
    this.age=age;
}
const newObj2={};
newObj2.prototype=new Person("Adem",33);
console.log(newObj2);

