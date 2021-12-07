//Bir nesneye ait temel ozellikleri temel operasyonlari saklamak icin kullaniriz...
//Ornegin bir ogrenci nesnesinin adi,soyadi ve ogrencinin ihtiyac duydugu operasyonlari tutabiliriz farkli operasyonlar ile tutabiliriz....
//Yani projemizi moduler hale getirmek, ve buyuk projeleri yonetmek icin de yapabiliriz..

//sinif icinde kullanilabilir veya sinif disindas kullanilabilir yapma
//Bunlarin hepsini fonksiyonlar uzerinde yapiyoruz.Javascripte hersey fonksiyon uzerinde yapiliyor fonksiyonlar da birer nesnedir....UNUTMAYALIM!!!!!!

function Customer(firstName,lastName){//consturcotr function
    this.firstName=firstName;//C# da public olarak olusturulmus alanlara karsilik geliyor burasi ki burasi bir fonks constructor dir yani constructor icinde yazdigimz elemanlar.
    this.lastName=lastName;//public field
//Bazen de sadece bu nesne kullansin diye bu nesneye ozel private nesneler uretiriz
const someField="some value";//Sadece ve sadece bu fonks icerisindeki diger ozelliikler kullansin diye olustururuz--private field dir bu

this.sendProduct=function(){//operasyon-musterinin firstName,lastName public alan, someField private alan ama sendProduct isimli bir method, veya fonksiyon olusturduk ve bunu istedigimiz gibi kullanabiliriz...
  
    return "Product Send!";
}

}


//firtsName ve lastName degerleri direk Customer i constructor fonksyonunu yani ayni zmaanda bir nesnedir nesnesini olusturdugmuz zaman parametreye veririz

let firstName=customer1.firstName;
let lastName=customer1.lastName;
let sendProduct=customer1.sendProduct();
let someField=customer1.someField;
console.log(someField)//Bunun sonucu undefined gelecektir...
console.log(firstName);
console.log(lastName)
console.log(sendProduct)