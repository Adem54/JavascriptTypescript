

function Customer(first, last, city, country, age){//Bu parantez icindekiler kullanicidan gleen bilgiler
    //this ile olusturulmadan biz constructor icine direk bir degisken yazamayiz ve ondan dolayi this ile prototyping yapiyoruz...cok enteresan ve onemli dikkkatt...
    this.firstName=first;
    this.lastName=last;
    this.city=city;
    this.age=age;
    this.country=country;
}
//Yeni bir nesne olusturuyoruz fonksiyon nesnesidir...
let someCustomer=new Customer("Engin","Demirog","Ankara","Turkey",30);
//PROTOTYPING
//prototype keywordu ile de yeni ozellikler ekleyebiliriz
//Bu ozellikle bizi moduler yapilar olusturmak icin bizi tesvik eden en temel hususdur
//Javascript icin yazdigimiz modullerde cok ciddi fayda sagliyor
Customer.prototype.eMail="adem5434e@gmail.com";
Customer.prototype.fullName=function(){
    return this.firstName + "  "+ this.lastName;
}
alert(someCustomer.eMail);
alert(someCustomer.fullName());
//Ornegin bizim kullanacagimiz temel bir objemiz vardir ama bazi ozellikleri cok az  yerde kullaniyozdur geliriz sadece o az kullanacagimimz yerlerde yeni ozellikleri prototyping ile olusturarak kullaniriz...
//Javascript nesnel programlama gelistirmek icin guzel bir temel teskil ediyor...

someCustomer.profession="developer";
console.log(someCustomer.profession)