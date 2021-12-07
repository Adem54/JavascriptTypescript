<<<<<<< HEAD
//Neden model diyoruz model bizim compoenentlerimizde apiden alip kullaniciya gosterdigimiz veri tiplerine verdigimiz genel isimdir

export default class User {
  //burasi sablon old icin saf javascriptte direk firstName diye buna veri tipi veremiyorum deger de atayamiyorum, typescriptte olmd icin biz bunu javascriptte constructor dan set ediyoruuz.Constructordan da prototyping dedigimiz yapiyi  yapiyoruz
  constructor(id, firstName, lastName, city,age) {
      (this.id = id),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.city = city);
      (this.age=age);
  }
  //Bunlari olusturunca artik user olusturdugumz zaman constructor degerlerni vermemiz gerekiyor...

  //Aslina biz ne yapmaya calisiyoruz bize apiden user adinda bir data gelecek ve biz onu karsilayacak bir user olusturmaya calisiyoruz..¨
  //this ile prototyping yolu ile olusturdugumuz id,firstName,lastName,city degerlerine ise constructor a parametre yolu ile kullanicidan alacagimiz degerleri atamasnii yapiyoruz aynen C# da constructor icinde ayni olayi yapiyoruz ama C# da tabi biz direk degisken tanimalayabiliyoruz class icinde, ama javascriptte oyle birsey yok...
  // PROTOTYPING.....
  //Peki bu hareketi nasil yapiyuoruz tabi ki prototyping yolu ile.....
  //Prototyping ile biz this dedigimiz bu User in kendisidir yani aynen bizim user dan bir kullanici turetip de onun uzerinden de yeni bir eleman olusturmak gibi....
  //Ornegin let user2=new User(1,"Aden","Erbas","Skien") den sonra
  //user2.adress="Bvegen66" ile  yaptigimiz da bir prototypindir yukarda this ler ile yaptigimida bir prototyping islemidir......Buna cok dikkat edelimm..
  //Javascriptte hersey fonksiyon yani saf javascriptte aslinda class yok arka plan da hersey fonksiyon....
}


//User bizim temel sinifimiz base sinifimiz yani ortak ozellikleri tutacagimiz sinifimiz, ve diger modellerimizi employee,customer,employer gibi onlari olustururken baz alacagimiz sinifimizdir daha dogrusu inherit eddecegimiz sinifimizdir
=======
export default class User {
    constructor(id, firstName, lastName, city,age) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
