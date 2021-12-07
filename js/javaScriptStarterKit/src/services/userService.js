<<<<<<< HEAD
import { users } from ".././data/users.js";
import DataError from "../models/dataError.js";

//JAVASCRIPT OBJECT ORIENTED
//Biz class lari degiskenlerimizi tutarken ve de operasyonmlari yani fonksiyonlari tutarken kullaniriz
//Deger tutucu class lar ve operasyon tutucu class lar
//Bizim bir suru fonksiyonlarmiz var mesela ve biz fonksiyonlarmzi gruplandirmak isteyebiliriz ve bunlar i biz nesnelerin icinde tutup bunlara bagimliliklar eklersek o zaman cok faydalidir
//Biz bunlara servisler diyoruz cunku uygulamalarda sepete urun eklyoruz urun cikariyoruz, sepeti guncelliyoruz yani sepet ile ilgili  yaptigimiz islemleri mesela bir class icine yerlestirebiliriz ornegin...
//Fonksiyonmlarimiz gruplamak amacli class larin icine ekliyoruz

//export disardan import edilebilir demektir
//default ise ben user servici import ettigimde default olarak bunu import et demektir..
//default dedigimiz icin bu class i import edilirken direk bu isimle
//import UserService from "../userService.js" bu sekilde kullanilabilir demektir.Ama default olmasa idi sadece export olsa idi o zaman biz burdaki ismi {} suslu parantezler icinde kulllanacaktik cunku o birden fazla olabilecegi icin
export default class UserService {
  constructor(loggerService) {
    //UserService ye bana bir tane loggerService verdiyoruz biz buraya loggerServicemizi injection  yapmis oluyoruz...
    // this.users=[]//Normalde biz veriyi veritabanindan alacagiz bizeveri gelecek ordan  hazir bir sekilde...
    this.loggerService = loggerService; //prototyping ile bir tane loggerService olusturuyoruz ve gelen loggerServiceyi ona atiyoruz, bu islem enjekte etmektir aslinda, denpendency injection dir
    //Tamam constructor iicinde yapiyoruz..dikkat buna...
    //Verilerimizi burda ayiralim...
    this.customers = [];
    this.employees = [];
    this.errors = [];
  }

  //Biz dikkat edelim constructor da bos bir dizi olusturuyoruz ilk once..ki bu aslinda global bir durumdur her zaman yeni bir veri olusturulacaksa ya da bir yerden veri geliyor ve sen bu veriyi kendi ihtiyacina gore parcalaara ayiraaksan ee  o zaman mutlaka diziler icine atacaksin ve senin ihtiyacin olacak sekilde diziler olusturacaksin peki bu diziler olustruacagin yer neresi tabi ki constructor cunku bir class imiz calistiginda ilk once onun icindeki constructor calisacaktir

  load() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }
          break;
        case "employee":
          if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }

          break;

        default:
          this.errors.push(new DataError(user, "Wrong user type!"));
          break;
      }
    }
  } //load methodumuzla gelen datayi customer ve emplyee lere yani type ina gore ayiracagimiz operasyonu yapacagiz..

  //Validation-Kullanicidan gelecek verinin yapisal olarak uygunlugu kontrol edilmesidir
  //icerisine bir user geliyor..obje olarak
  //Validation react tarfainda formik-yup kutuphanesi ile hallediliyor
  checkCustomerValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" "); //stringlerden array olusturduk!
    //obje user.id=user["id"] id yi degiskene attik ve field olarak kullaniyoruz

    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem! ${field} is required`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(user.age))) {
      hasErrors = true;
      //numara degilse sayi degilse
      this.errors.push(
        new DataError(`Validation problem ${user.age} is not a number!`, user)
      );
    }

    return hasErrors;
  }
  //Yazdigimiz + larin hepsini bellekte bir harf gibi tutuyor
  //--employee icinde yazalim
  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem! ${field} is required`, user)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrors = true;
      //numara degilse sayi degilse
      this.errors.push(
        new DataError(`Validation problem ${user.age} is not a number!`, user)
      );
    }
    return hasErrors;
  }
  //--employee icinde yazalim


  //Biz su anda loggerService yi UserServiceye enjekte ettik ama bunu daha da ilerleterek diyecegiz ki sen eger serviceclass isen yani apiden veriyi alip gelen class isen ki onu nasil anlariz onu da yine ozel bir serviceclass i inherit eden class lar service class olur ve ordan kolayca belli olacaktir zaten ve tek biryerden loglamayi yapariz UserService gibi service class larin tum methodlari loglamayi yapacaklardir...
  add(user) {
    // this.users.push(user)
 
    switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }
            break;
            case "employee":
              if (!this.checkEmployeeValidityForErrors(user)) {
                this.employees.push(user);
              }
            break;
        default:
            this.errors.push(new DataError(user, "Wrong user type!"));
            break;
    }

    this.loggerService.log(user);
  }


  getCustomers() {
    return this.customers;
  }

  getCustomerById(id) {
    //   return this.users.find(u=>u.id===id)
    return this.customers.find(c=>c.id===id);
    //find verdigin sarta gore 1 tane data dondurur..
  }

  //Sorting islemi yapalim..array sorting
  getCustomerSorted(){
    //Elimizdeki datalar obje, sort islemi primitiv tip array lar icin yapiliyor bunun icin bir compare function gecmemiz gerekiyor,,array icindeki objeleri sirasi ile birbiri ile karsilastiracagim, compare function yani arrow function
    //Mantik olarak soyle calisir sirayla ilk 2 elemani kiyaslar sonra ikisinden hangisi kazanirsa kazanan artik 1.eleman olur ve 3.elemenlar kiyaslar ve hangisi kazanirsa o 1.eleman olur artik ve 4.elemana gecer
    //Objelerde siralama algoritmasini bu sekilde yapabiliyoruz.
   return this.customers.sort((customer1,customer2)=>{
        if(customer1.firstName< customer2.firstName){
          return -1;//kazanan i ver demek
        }else if(customer1.firstName === customer2.firstName){
          return 0;//degistirme
        }else {
          return 1;//kaybedeni ver demek
        }
    })
  }
}

//Biz bunu ekranlarimizda kullanacagiz.Biz Front-end de aslinda tek bir sayfada calisiyoruz ve sayfaki her bir bolumumuze componenet diyoruz

//Bizim bir sayfamiz var ve sistemdeki kullanicilari listeliyoruz.Bu sayfaya kisaca component diyoruz gercek hayattaki ekran ile bagdasitiririz.
//Bu compoenent icinde kullanicilari listelemem gerekiyor
//O zaman ne diyoruz ben bir tane userService olusturayim componentimdeki ekleme,listeleme,vs islemlerini yapabilecegim ve userSErvice yi de userComponent e dahil ediyorduk import edip.Uygulama acildiginda

//Ornegin kullanicilar ile ilgili islem yapmak istedigimizde loglama yapmak istiyorum mesela...

//Javscriptte yazdigimiz class larin performans a hicbir problemi olmaz cunku bunlar class olarak bu tarafta biz boruyoruz ama bunlar transpail ediliyor arka tarafta bunlar aslinda fonksiyondur onun icin hicbr problem yok.Class lari yazma sebebimiz, temiz goruntu ve yonetilebilirliktir....
=======
import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    //formik-yup
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u=>u.id ===id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }

}
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
