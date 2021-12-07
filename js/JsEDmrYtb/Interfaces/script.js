//Interface
//Interface ler bize sablon sunar normalde

function sendEmail(personInterface){//Burda interface gorevini
    var to=personInterface.eMail;//Bu aslinda tamamen soyut bir yapidir tek basina anlami yok ama parametreye Customer vb class lar monte edecgiz.Dikkat etmemiz gereken sey sudurki name ve email in parametre ile gelen constructor  nesnesi icinde implemente edilmis olmasi yani doldurulmus olmasidir
    var name=personInterface.name;

    var send= function(){
        console.log("Mail sent to  "+ name + " / "+ to);
    }
    send();
}
//Biz email i musteri ve personelimize gondeririz ve ayricxa farkli ortamlara gondeririz

//sendEmail i bir arasinif gibi kullaniyoruz
//Katmanlari birbirinden bagimiszi hale getirmek icin kullaniyorduk
//INterface ler tek basina new lenemezler
//sendEmail i de tek basina bir anlami oolmayacak sekilde olusturduk yani this. ile degil de direk degisken vererek olusturarak onu tekbasina new lenemeyecek sekilde olusturduk ve tekbasina cok bir anlami yok ama parametresine bska bir nesne alinca mesela Customer gibi  o zaman anlamli hale geliyor




function Customer (name,eMail){
    this.name=name;
    this.eMail=eMail;
}

var someCustomer=new Customer("adem","adem5434e@gmail.com")

function Employee(name,eMail){
    this.name=name;
    this.eMail=eMail;
}

var someEmployee=new Employee("salih", "salih@gmai.com")

 sendEmail(someCustomer);
 sendEmail(someEmployee);