console.log("ES6 Inheritance")

//CALL VE APPLY ILE PROTOTYPE TABANLI KALITIM YAPMAK
//Peki biz bu fonksiyonları nerelerde kullanabiliriz ? Örneğin, Prototype tabanlı kalıtım yaparken bu fonksiyonlar oldukça yararlı olacaktır.
//Baska bir constructor cagirmak icin biz call veya aplly methodlarini kullanabiliriz...
//Bizim kalitima nerde ihtiyacimiz oluyor ornegin biz bir sirkette calisanlarimiz var ve biz bir tane temel bir constructor function yapmak istiyoruz Person isminde ve sonra uretecegimiz customer,employee gibi constructor func larini Person dan uretmek isteriz ki tekrar tekrar ortak olarak kullanacagimiz ozellikleri olusturup hem kendimizi tekrar etmeyelim hem de bellekte her seferinde ayn seyleri farkli yerde olusturup yer isgal etmeyelim..Yani biz Person i temel base func constructor yaptiktan sonra bundan sonra olusturacagimiz ve Person i miras almasini inherit etmesini saglayacagimiz diger Employee,Customer ve bundan sonra gelebilecdek yeni func constructor larda birer Person dir aslinda diyebiliriz..
console.log("Kullanim yeri");
function Person(name, age){
    this.name = name;
    this.age=age;
    
}
Person.prototype.showInfos=function(){
    console.log(this.name+ this.age);
}
const person1=new Person("Adem",33);
console.log(person1);
function Employee(salary,name,age){
    // this.name=name;
    // this.age=age;
    //BU SEKILDE PERSON CONST FUNC INA DIYORUZ KI SEN ARTIK THIS OLARAK EMPLOYEE YE TABI OL..VE ONU BIR NEVI MIRAS ALIYORUZ DIKKAT EDELIM DIREK EMPLOYEE CONST FUNC ICINDE YAPIYORUZ BUNU...OBJECT.CREATE ILE BIZ PROTOTYPE KALITIMI YAPIYORDUK..VE BOS BOSUNA TEKRAR TEKRAR NAME,AGE I HER SEFERIDNE YAZMAKTAN KURTULDUK SU ANDA VE KENIMIZI TEKRAR ETMEMIS OLDUK....
    Person.call(this,name,age);
    //Person.apply(this,[name,age]);

    this.salary = salary;
}
const emp2 = new Employee(5000,"Adem",29);
console.log(emp2);//Normalde kendi objesi, Employee prototypei ve en tmel Obje olan Object objesini kullanir
Employee.prototype=Object.create(Person.prototype);
//Overriding
Employee.prototype.showInfos=function(){
    console.log(this.name + this.age+ this.salary);
}
const emp1 = new Employee(6000,"Mustafa",25);
//Biz person a ait showInfo degil de direk Employee ile yazdigimiz showInfos u kullanmak istoyoruz yani miras aldigi Person a ait olan showINfos u override, yani ezmis olacagiz
console.log(emp1);
console.log(emp1.name);
console.log(emp1.age);
emp1.showInfos();

//ISTE BIZ YUKARDA YAPILAN ISLEMLERIN KARSILIGINI ECMASCRIPT6 ILE YAPACAGIGZZ...

class Person2{//Super class, base class dir
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){//Yukardaki Person func constrctorda prototype yazilan showInfos un karsiligi burasidir
        console.log(this.name+ this.age);
    }
}

//Biz yukarda eski  yontemle Employee constructor objemizi Person objesinden inherit ederek ondan turetmis idik simdi de ayni mantigi ES6 ile gelen class lar uzerinde yapalimm
class Employee2 extends Person2{//Employee class i Subclass,Childclass,Derivedclass olarak gecer...
    constructor(name,age,salary){
        super(name,age);//Bu islem eski yontemdeki  Person.call(this,name,age); bu isleme karsilik geliyor.Bu arada super demek superclass demekitr yani superclass, temel base class yani inherit edilen class dmektir o da Person2 dir.super isleminin C# daki karsiligi :base islemidir..super keywordu extend edilen miras alinan Person2 ye karsilik geliyor biz ornegin yukardak i showInfos fonks da kullanmak isteyebiliriz
        this.salary=salary;
    }
    showInfos(){//Override ediyoruz burda artik Employee2 den turetecegimz tum objeler showInfos methodu olarak biizm burda yazdigmizi kullanacaklar, Person2 dekini kullanmak yerine...
        console.log(this.name+ " " +this.age+"  "+ this.salary);
    }
    //En temel Obje prototypei olan Object constrctor nesnemizde bulunan toSTring i de override edeiblirz....
    toString(){
        console.log("Employee!");
    }
//Kenidmiz de ekstra methodlar yazabiliriz..
    raiseSalary(amount){
        this.salary=this.salary+amount;
    }
}
console.log("....................................")
const employee3=new Employee2("Zeynep",34,8000);
employee3.raiseSalary(1000);
employee3.showInfos();
//Tabi burda biz Employee2 ile Person2 yi extend yani inherit edince Employee2 icinde biz Person2 den gelen showInfos methodunu kullanabilyoruz ancak biz eger bu method ayni isimde kullanmak istiyoruz ama icerigiini degistirmek istersek de bunu kendimiz Employee2 ile yaparak override edebilriz artik bizim yazdigimiz showInfos methodu gecerli olur