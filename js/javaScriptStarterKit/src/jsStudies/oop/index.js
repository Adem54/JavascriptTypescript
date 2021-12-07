//JAVASCRIPT-OBJECT-ORIENTED-PROTOTYPE
//Ecmascript ile beraber artik class da yazabiliyoruz...
//javascriptte class kullanimi var ama class kullanimi C#daki,java daki kadar zengin degil
//Degerleri atamak icin prototype dedigimiz bir yapidan yararlaniyor..
//Aslinda hersey fonksiyon, fonksiyona prototype olusturuluyor
//PROTOTYPING I ANLAMAK COK ONEMLI....BUNU MANTIGA OTURTMALIYIZ....
 export class Customer {//export C# daki public e karsilik gelir,baska yerden erismek icin public yapilmalidir...
    //Customer in alanlarini constructor pattern ile geciyoruz...
    constructor(id,customerNumber){//Karistirmayalim constructor parametresine verilen degerler disardan gelecek olan degerlerdir ama constructor icerisinde this ile yeni property uretiriz ve ismine id,customerNumber veririz...iste bu yeni property uretme isine biz prototyping diyoruz....
        //Burayi anlamak cok onemli
       //Disardan propertieslere erisebilmek icin
       this.id=id;//this.id diyerek id yi kendisi olusturuyor...prototyping yapiyor.Aynen disarda customer instancesi iile customer.name="Adem" seklinde sifirdan bir property olusturmak gibi..
       //Biz burda prototyping yapiyoruz. aslinda....this veya instance ile ki ikiside ayni sey, yeni bir property uretmeye prototyping diyoruz...bir prototype, yani bir ornek olusturuyoruz..
       this.customerNumber=customerNumber; //this.customerNumber olusturuyor kendisi
       //this keywordu instanceye karsilik gelir...
    }
}
//ONEMLI!!!!
//Ezbere yapmaya gerek yok Customer class i icinde yaptigimiz bir prototype ozelligidir...Yani saf javascriptte class diye birsey yok fonksiyon var bunlar arka planda fonksiyona donusuturuluyor... 

//Yeni bir musteri olustururken bu sekilde olusturulur
let customer=new Customer();//Undefined gelir cunku deger atamadik....
//customer instancesi icin this customer instancesidir...
console.log(customer);//bos bir Customer {} verecektir
let customer1=new Customer(7);//this dedigimiz zaman burda customer1 e karsilik gelecektir...
console.log(customer1);
let customer2=new Customer(6,"12345");
console.log(customer2)//this burda da customer2 ye karsilik gelecektir
//Eger biz Customer class inda constructor da properties leri verince sadece bos properties vermis oluyoruz karisiligi olmayan propertiesler yani o zamanda bize undefined verecektir eger propertieslere ulasmak istersek o zaman this ozelligini kullanacagiz....
console.log(customer2.id+ " | "+ customer2.customerNumber)

//Prototyping-Nesnemize bambaska bir ozellik ekleyebiliyoruz
//customer bizim instancemiz....
customer.name="Adem";
//customer instancesinin olusturdugu name i n karsiligini Adem degerini sadece customer instancesi ile aliriz ama name propertysini Customer class indan olusturdugum tum instancelerde gorebilirimmm
console.log(customer.name);//Adem olarak donecektir
//Bu sadece customer instancesi icin gecerlidir...Bu instanceye yapilan prototypingdir...
//Customer class imizda name diye bir property yoktu ama burda dogrudan olusturduk ve deger de atadikk iste bu sekilde baska bir ozellik de atayabiliyoruz...
//Simdi de statik olarak direk class uzerinden yeni bir property ekleyelim
Customer.nickName="Alpacino";//Bu direk class a yapilan prototypingdir
console.log(Customer.nickName);
console.log(customer.nickName)
console.log(customer1.nickName)
console.log(customer2.nickName)
console.log(customer1.name);


//Customer nesnemizden nasil inherit edebiliriz bakalimm
//extends ile biz IndividualCustomer da  Customer i inherit ettik! 

class IndividualCustomer extends Customer {
    //firstName IndividualCustomer in kendisine ait olan property name idir
    //Bizim burda Customer class inda var olan property leri Customer class ina gondermemiz gerekecek bunu nasill yapacagiz iste bu bizim class daki   :base() e karsilik gelecek olan super ile yapacagiz...
    constructor(firstName,id,customerNumber){ 
        super(id,customerNumber);//prototype leri olusturdummm yani ben super in icine inherit ettigimiz Customer class inin constructorindaki property leri gonderdigim zaman
        //Super ile biz, Customer da this.id=id; ve  this.customerNumber=customerNumber; seklinde prototype leri olusturmus olduk!!!!
        
        //IndividualCustomer inkendisine ozel olan property sini de yine kendi icinde prototype olusturarak verecegiiz..
        this.firstName=firstName;
    }
}

class CorporateCustomer extends Customer {
    //companyName CorporateCustomer a ozel bir property dir...
    constructor(companyName, id, customerNumber){
        super(id,customerNumber);//prototype leri olusturdummm
        this.companyName=companyName;//prototyping yaprak yeni bir property olusturuyoruz uretiyoruz this keywordu ile yani objemize ait instancemiz ile

    }
}

//DEGER REFERANS TIP OLAYI
//Deger referans iliskisi aynen javadaki gibi, C# dakigibidir..Cunku bunlar, class lar fonksiyondan olusuyor, fonksihonlarda referans tip sayiliyor.....