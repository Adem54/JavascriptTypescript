//Abstract classes
//Bir temel sinif gorevi gorurler tek basina anlamlari yoktur. new lenemezler
//Base sinif gorevi goruyorlar,icinde tamamlanmis ve tamamlanmamis operasyonlar barindirirlar

var Person={
    name:"None",//name ve email bos bir property bunu Person objesini miras alan nesne dolduracak, implemente edecek
    email:"None",
    sendEmail:function(){//sendEmail ise dolu bir property dir
        return "Mail sent to :"+ this.name + "/ "+ this.email;
    }
}
//Person new lenebilir bir nesne degil ve abstract class gorevi goruyor...Bizim inherit alacak nesne gorevi goruyor...

//Customer function constructor ina bakalim
function Customer (name,email){
    this.name=name;
    this.email=email;
    //biz name ve email i kendimiz ekleyerek sanki abstract class da name ve email olmasi zorunlu imis gibi yapmaya calisiyoruz bir triki yontemle yani yoksa bir C# daki gibi sistem bizi buna zorlamiyor biz ona uydurmaya calisiyoruz...ki bir sistem olsun, abstract class lari da sistmeimizde kullanabilelim diye...
}

function Employee(name,email){
    this.name=name;
    this.email=email;
}

//Customer Person i miras aliyor ve Customer da bir Person oluyor aslinda
Customer.prototype=Person;
let someCustomer=new Customer("adem","adem5434e@gmail.com")//Burda implement ediyor...
someCustomer.sendEmail();

//Employee de Person i miras aliyor
//Employee de bir Person oluyor aslinda
Employee.prototype=Person;