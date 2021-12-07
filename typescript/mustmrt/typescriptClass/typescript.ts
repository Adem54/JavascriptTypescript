 {
class Person {
    //En basta hangi ozellikleri var onlari belirtiyoruz,aynen C# daki gibi artik propertieslerini disarda yaziyoruz ve constructror i da oluor ayrica...
    //Disardan eerisilmesini engelleyebiliriz private ile
  /*private */  name:string;
  /* private*/ age:number;
  /* private */ phone:string;
    constructor(name:string,age:number,phone:string){
    this.name=name;
    this.age=age;
    this.phone=phone;
    console.log("Person created!");
    }
//
    showInfos(){
       console.log(`Name: ${this.name}  Age:${this.age} Phone: ${this.phone} `)
    }
}

//Employye ye Person u inherit etmesii istiyoruz'
//Dikkat edelim..burasi Perosn i miras aliyor ve super class olan Person u calistirdii zaman Person icindeki constructor i calistiriyo illk once ve eger Employee den Person i inherit edersek o zaman super i kullanmak zorundayiz Person a ati ozellik ve methodlari kullanabilmek icin...
class Employee extends Person{
    //Employeye ozel bir property ekliyoruz
    salary:number;
    constructor(name:string,age:number,phone:string,salary:number){
       super(name,age,phone);// super class i cagiriyoru, yani base class demektir:base C# daki ne karsilik gelir
       this.salary=salary;
}
changeDeparment(){
    console.log("Departman degistiriliyor");
}
showInfos(){//Person da kullanilan showInfos ozelligini override ettik...
    console.log(`Name: ${this.name}  Age:${this.age} Phone: ${this.phone} Salary: ${this.salary} `)
 }
 //Ya da biraz daha farkli bir sekilde kullanabiliriz..
 showInfosAgain(){
     super.showInfos();//super yani base class olan Person u bu sekilde de kullanabiliriz...
     console.log(` Salary:   ${this.salary}`)
 }
}
/*
let person1=new Person("Adem",33,"434343555");
person1.showInfos();
console.log(person1.name);
*/
let employee1=new Employee("Zehra",33,"490054555",4000);
employee1.showInfos();
employee1.changeDeparment();
employee1.showInfosAgain();

}