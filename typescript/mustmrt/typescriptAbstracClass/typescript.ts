//Abstract class lar inherit ile interface in ikisinin birlikte kullanilmasini inhtiyac oldugu durumlarda gerekebiliyor.Abstract class larla hem imza, hem de implement edilmis mehtodlar yazabiliriz...
//Abstract class lar Base class lardir genel olarak temel Base class amacina yonelik class lardir ve diger class lar tarafindan inherit edilirler kendileri de 1 interface implement ederler 

//Simdi biz interface yaparken belli temel methodlarini sadece imzasini aliyorduk ve o methodlari o interface leri implemennt eden tum classlar o methodlarini icini kendine ozel bir sekilde dolduruyordu? Peki neden bizim Base class olan Abstract class a ihtiyacimiz var interface ler cvar iken...Cunku bizim interface leri implement eden class lar arsainda bazi class lar in imzasinin yaninda icerigi, govdesi yani implement edilisleri de birebir ayni olabilir eee peki o zaman biz neden herseyi ile ayni olan methodlari herbirisine ayri ayri gidip yazip dolduruyorumk, kendimizi tekrar etmis oluruz....Bu da yazilmimin en temel prensibi olan DON'T REPEAT YOURSELF E AYKIRIDIR!

//Abstrac Base class i icerisine Database icerisine yazdigimiz crud islemlerinden ornegin get methodu eger icerigi ile beraber imzasi ve implementasyonu eger tum Database i inherit edecek class da ayni olacak ise onlarin tekrar tekrar geti  yazmasina gerek yok...Ama icerigi class ina gore degisecek olan operasyonlar da ayni interface deki gibi imzasini yazariz sadece ama tabi o operasyonlari da abstract yapmaliyiz ki bunlari implement eden class lar onlarin icerigini istedikleri gibi doldurabilsinler
abstract class Database {
    //Implemnenti ile yazdgimiz get ve add ortak olacagini dusundugumuz operasyonlardir...
    get(){
        console.log("Database Get");
    }

    add(){
        console.log("Database Add")
    }

    abstract delete();

    abstract update();

}

class Mysql extends Database {
    //get ve add ortak operasyonlar oldugu icin onlari tekrar Mysql icinde yazmamiza gerek  yok..,.
    delete(){
        console.log("Mysql delete");
    }

    update(){
        console.log("Mysql update!")
    }
}

class Mongo extends Database {
    //get ve add ortak operasyonlar oldugu icin onlari tekrar Mysql icinde yazmamiza gerek  yok..,.
    //Abstract icinde imza olarak belirtilmis methodlari biz burda yazmak zorundayiz...cunku biz bunlari kendimize gore yazalim diye orda imza ile ve abstract olarak yazildi
    //Abstract class ve interface lerden biz obje uretemiyoruz...Cunku soyut bir class dir...
    delete(){
        console.log("Mongo delete");
    }

    update(){
        console.log("Mongo update!")
    }
}

    function AddDatabase(database:Database){
        database.delete();
        database.get();
        database.add();
        database.update();
    }

    AddDatabase(new Mongo());
    AddDatabase(new Mysql());


