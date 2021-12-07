//Inheritance

function Person (firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    //Burda biz operasyonlarimiz i da tanimalayarak onlari da Person function constructor nesnesini extend edecek olan nesneler in kullanabilmesini saglayabiliriz...
    add();
}

function Student(favoriteCourse){
    this.favoriteCourse=favoriteCourse;
}

//prototype kullanarak biz burda Student function class ina Person i miras alarak artik Student in de Person un ozelliklerini kullanabilmesini sagliyruz....
//BURASI COOOK ONEMLI!!!!
Student.prototype=new Person("Adem", "Erbas");

let student1=new Student("Programming");

alert(student1.firstName+ " "+ student1.lastName + " loves "+ student1.favoriteCourse);

student1.add();//Gordugmuz gibi student nesnesinde add operasyonu da kullanabiliyoruz....

//BURASI DA COOK ONEMLI-SUPER KEYWORKU KULLANIM VE INHERITANCE.....
//Inheritance yi super ile de yapariz biz, ornegin Person function nesnesini inherit ediuyoruz ve constructor icine super yazdigimiz zaman  super nedir super demek Person nesnesinin constructor i demektir yani ee o zaman Person function constructor nesnesininn parametreleri var onlari super icine yazmaliyiz kullanabilmek icin  ve sonrasinda da eger ekstra Person a ait eklemek istedigimiz ozellik varsa ekleriz.... artik Employee classs i Person a ait ozellikleri kullanabilecektir

 class Employee extends Person{
    constructor(firstName,lastName){
        super(firstName,lastName);//C# daki :base() aynisi
        this.age=33;//Bu employee nin kendine ozel property si
    }
}

let employee1=new Employee("Kaya","Minnos");

console.log(employee1.firstName);
console.log(employee1.lastName);
console.log(employee1.age);
employee1.add();//Ayni sekilde add operasyonu da kullanabilyoruz...


