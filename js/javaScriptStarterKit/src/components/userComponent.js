<<<<<<< HEAD
import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";


import Customer from "../models/customer.js";
import User from "../models/user.js";

import UserService from "../services/userService.js";



//Burasini da bizim ekranimiz gibi dusunebiliriz...
console.log("User compoenent loaded")

//Biz uygulamalarimizda farkli bilesenler icin onlara ozel yapilar olusturuyoruz.Component demek hepsi burada da ki sepet cartComponent, urundetay,urundetaycomponent gibi dusunebiliri..
//Biz userSErvice yi burda kullanmak istiyoruz yani ekranimiza basmak istiyoruz bize userService yi kullanmammiz gerekiyor
//Peki userService yi yani bir class i nasil kullanacagiz

//biz bunu otomatik ctrl+space e basarsak zaten userService icin alternatifleri gerirecektir ve biz yukariya import eden alternatifi seceriz ve eger import edilen yerde sonuna js yoksa biz sonuna js kendimiz koymaliyiz...
let logger2=new BaseLogger();
let userService=new UserService(logger2);
//Biz burayi new ledgimiz zaaman consturctor i calisacaktir...


//Javascriptte genellikle fonksiyon bazli gidiliyor ama fonksiyonlari kategorize edip class larin icine alarak kullanirsak buyuk projelerde cok daha rahat ederiz ki mesela loglama eklemek istiyruz fonksiyon bazli gidersek cok fazla ugrasiriz

//Burayi bizim formumuz oldugunu kabul edelim, yeni kullanici eklenecek ya mesela diyelim ki bir sisteme kaydoluyoruz orda ad,soyad,yas,d.tarihi,cinsiye,email kaydol mesela
//Kullanici ekranda bilgileri yaziyor oncelikle ne yapiyoruz biz o bilgiyi once kullanicidan alip objeye atiyoruz..normal basit obje ile de gidilebilir ama biz class  yapisi ile gidiyoruz
let user1=new User(1,"Ademm","Erbass","Skienn");
//User class ini new ledigimiz zaman constructor i calisacaktir...
//Bu cok onemli cunku user icin degerleri ben constructora gondererk olusturabilirim prototype ile....

//BURAYI DA AKLIMIZDA IYI TUTALIM JAVASCRIPT TYPESAFE BIR DIL OLMADIGI ICIN, BIZ ADD PARAMETRESINE USER GELECEGINI VARSAYIYORUZ KENDISININ OYLE BIR GARANTISI YOK BIZ ONU OYLE VARSAYIYORUZ...C# GIBI DEGIL...
userService.add(user1)//Elimizde artik 1 tane user nesnesi var ve ben artik onuntum bilgilerini okuyabilirim,

//userService.list()
//userService.getById()

//Single Responsibility-Bir fonkksiyon sadece bir is  yapmalidir, bir class sadece bir is  yapmalidir, birden fazla is yaparsan kendin tekrar etmek zorunda kalirsin
//Kullaniciya ait deger ve referans tutucularla, methodlari ayni class ta tutarsak o zaman bir user da hem user a ait degerler hem de methodlar yanlis olur bosu bosuna fazladan tutmus oluruz
//Ornegin ekleme yapmak icin bir tane kullanici nesnesine veya objesine ihtiyacim var...
//Eger bir parametre de ayri ayri yazilmis bir suru arka arkaya parametre varsa o zaman orda onumuzse sorunlar cikaracak diyebiliriz...Mesela add methdouna user gecmem gerekiyor...

//PROTOTYPING!!!!!!!
//BURASI ONEMLI DIKKATLI OKUALIMM
let customer={id:1, firstName:"Adem"}

//customer da olmaayan bir ozelligi varmis gibi cagirip deger atiyoruz
//Nasil oluyor da hic olmayan bir eleman set ediliyor, iste bu olayin adi prototyping dir...
customer.lastName="Erbas";
console.log(customer.lastName)
//Javascriptte sonradan bir deger ekleyebiliyoruz prototyping sayesinde
//Bu yapiyi kullanark ecmascript gelistiricileri burada bir gelistirme yapmislar


//LOGGER OLUSTURALIM VE USERSERVICE E CONSTRUCTORA VERELIM...
let logger1=new MongoLogger();//Burayi olusturunca yukariya import un eklenmesi gerekiyor//Dikkat edelim MongoLogger yerine BaseLogger veya ElasticLogger i koyuyoruz diger hicbirseye dokunmadan ve sistem hic bozulmadan ilerliyor...Iste surdurlebilir programlama yapisi...
// import { BaseLogger } from "../../crossCuttingConcerns/logging/logger.js";

let userService2=new UserService(logger1);

let user2=new User(2,"Zehra","Erbass","Porsgrunn");

userService.add(user2);

//Normalde bu olay su sekilde olacak...kullanici ekrna bilgilerini yazip submit edince userService.add(user3) otomatik calisacak bir kere yapilacak...
//console.log(userService.list())
//Aslinda bu bizim kullanici olarak sitemde kullanicilari listeledigimi sayfa
//console.log(userService.getById(2))
//Bu da kullanici detayina gittigim sayfa olarak dusuneliriz..
userService2.add(user2);


console.log("---------------------------------")

userService.load();


let customerToAdd=new Customer(1,"Sevim","Kasa","Adana","dfasdfdas");
//Prototyping ile ekle
customerToAdd.type="customer";
//Burda ya her bir model icin ona ozel bir nesne olusturacagiz
//Ya da prototype dan faydalanacagiz...Nesnellikte sinirlidir javscriptt
//Customer da type yok ama ben type da gecmek istiyrom,type sadec user da var

console.log(customerToAdd);
userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);

console.log(userService.getCustomerSorted());
=======
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))




let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("--------------------------")
userService.load()


let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
//22.00 Dersteyiz
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
