//This is a function inside an object
let student={
    firstName:"Engin",
    lastName:"Demirog",
    fullName: function(){
        return this.firstName + this.lastName
    }
}

alert(student.fullName());

//Object constructor
//this is an object

//FONKSIYON ILE NESNE OLUSTURMA..FONKSIYONU OBJE GIBI KULLANMA....
//this keywordu nesnel programlama nin temelidir...
function Customer(first, last, city, country, age){//Bu parantez icindekiler kullanicidan gleen bilgiler
    //this ile olusturulmadan biz constructor icine direk bir degisken yazamayiz ve ondan dolayi this ile prototyping yapiyoruz...cok enteresan ve onemli dikkkatt...
    this.firstName=first;
    this.lastName=last;
    this.city=city;
    this.age=age;
    this.country=country;
}
//this den kastedilen ise fonksiyon sonucunda ortaya cikan nesnenin ta kendisidir.O an olusturulan customer nesnesinin firstName i,lastName,city si diye olusur...

//Yeni bir nesne olusturuyoruz fonksiyon nesnesidir...
let someCustomer=new Customer("Engin","Demirog","Ankara","Turkey",30);

//Javascriptte hersey birer nesnedir..Fonksiyonu bir nesne gibi kullanabiliyoruz...
//Eger bir obje olusturacaksk, bizim fonksiyonumu bir constructor gorevi goreceksek PascalCase ilk harf buyuk baslatilir.Dikkat edelim new Customer diye kullandik..yani yeni bir constructor olusturduk yani fonksiyonu constructor olarak kullandik.....
//Biz new Customer dedgimizde arkada customer turunde bir nesne olusuyor yani aslinda yuukardaki student nesnesi objesi ile ayni benzerlikte.
