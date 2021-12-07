//Object Oriented Programming
//this-constructor methods
console.log(window);
console.log(this);//Su anda uzerinde bulundugumuz objeyi veriyor ve bizim javascriptte en temel objemiz windows objemizdir....

const emp1={//Object Literal
    name:"Mustafa",
    age:25,
    showInfos:function(){console.log("Bilgiler gosteriliyor!")}
}
const emp2={
    name:"Adem",
    age:28
}
emp1.salary=5000;
console.log(emp1);
console.log(emp2);

//Biz bu objelerden 100 tane olusturmamiz gerekirse bu sekilde ayri ayri olusturmak cok da mantikli degil!Biz onun yerine bir tane yapici fonksiyon yazariz ve ondan istedigimiz kadar obje olustururuz
//Constructor func lar buyuk harfle baslamalidir...PascalCase
function Employee(name,age){
    this.name=name;
    this.age=age;
    //Bu degerini verirken this.name,this.age gibi verdigimiz degerler ortak base function da yani burdan uretecegimiz tum objelerde kullanilacak olan ozellikleri biz bu sekilde veririz ki bunlar olusturacagimiz tum objeler icin sabit olacaktir
    this.fullName=()=>this.name+this.age;
    console.log("this: ",this);//Bu this bize neyi verir bizim bu funciton contructor dan olustrudugmuz tum objeleri verecektir...
    this.city="Skien";//Direk deger olarak bu function cosntructor indan olusan tum objelerde kullanilacak degerler buraya yazilir...
}
Employee.prototype.salary=6000;//Bu ise bu objeden olusan tum prototype larin icerisine gelecketir...
const emp3=new Employee("Hasan",32);
console.log(emp3.salary);
const emp4=new Employee("Sercan",22);
console.log(emp4.salary);
const emp5=new Employee("Osman",37);
console.log(emp5.salary);


// Employee {name: 'Hasan', age: 32} Employee {name: 'Sercan', age: 22} Employee {name: 'Osman', age: 37}
console.log(emp3.fullName());//Hasan,32

console.log(emp3, emp4, emp5);
//COOK ONEMLI...ISIN MANTIGINI ANLAMAK ICIN
//Ornegin javascript tte new lenen hazir fonksiyonlar vardir bunlardan bir tanesi DateConstructor dir bir fonks new leniyorsa o constructor func dir ayrica eger javascriptte hazir bir new lenebilir fonksiyonlar karsilasirsak aynen Date gibi o zaman sunu bilmeliyiz ki onun icerisine this ile yazilmis ozellkler var ve biz o ozellikleri alip kullanabiliyoruz....
let date1=new Date();
let date2=new Date();