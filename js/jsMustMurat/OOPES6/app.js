console.log("ES6 OOP");
//Tarayicilar ES5 e gore calisiyor ama biz kodlarimiz ES6 ya gore yaziyoruz bizim kodlarimizi tarayicilarin anlasilmasi icin biz Babel kullaniriz, Babel bizim yazdigimiz ES6 yi ES5 e gore ceviriyor..

function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}

Employee.prototype.showInfos=function(){
    console.log(this.name+ this.age+this.salary);
}

const employee1=new Employee("Adem",33,8000);
console.log(employee1);
//Yukarda yazdigiimiz yontem ES6 dan onceki eski yontem ile constructor olusturma.Simdi ES6 ile yeni yontem constructor olusturmaya bakalim
//Biz Person olusturduugmuz zaman ES6 direk olarak constructor i olusturuyor  yani Person class ini new ledigmiz zaman otomatik olarak constructor calisacaktir.Sira ile once bellekte new ledigimiz elemani olusturur sonra this keywordunu bu olusan keyworde baga
class Person {
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    //Biz showInfos diye bir function i constructor disindsa ama class icinde yazarsak otomatik olarak kendisi prototype a ekleyecek yani bizim ES6 oncesi yaptigimz function constructor in disinda Employee.prototype.showInfos isleminin aynisini yapmis oluyoruz aslinda ama prototype a ekleme islemi arka da oluyor biz goremiyoruz...ONun icin prototoype a ekleyebilmemiz icin bizim constroctor disinda  yazmamiz gerekir class larda
    fullName=()=>{
        console.log(this.name+ this.age)
    }//Bu objenin icinde olusur
    showInfos(){
        console.log(this.name+ this.age+this.salary);
    }//Bu ise Person constructor prototype i icinde olusur...
    
}
//Iste ustte Employee ile yaptigimz islemin birebir karsiligi Person class i ile yaptigmiz islemidr...
const person1=new Person("Zehra",22,4000);
console.log(person1);
person1.showInfos();
