//Abstract class lar inherit ile interface in ikisinin birlikte kullanilmasini inhtiyac oldugu durumlarda gerekebiliyor.Abstract class larla hem imza, hem de implement edilmis mehtodlar yazabiliriz...
//Abstract class lar Base class lardir genel olarak temel Base class amacina yonelik class lardir ve diger class lar tarafindan inherit edilirler kendileri de 1 interface implement ederler 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Simdi biz interface yaparken belli temel methodlarini sadece imzasini aliyorduk ve o methodlari o interface leri implemennt eden tum classlar o methodlarini icini kendine ozel bir sekilde dolduruyordu? Peki neden bizim Base class olan Abstract class a ihtiyacimiz var interface ler cvar iken...Cunku bizim interface leri implement eden class lar arsainda bazi class lar in imzasinin yaninda icerigi, govdesi yani implement edilisleri de birebir ayni olabilir eee peki o zaman biz neden herseyi ile ayni olan methodlari herbirisine ayri ayri gidip yazip dolduruyorumk, kendimizi tekrar etmis oluruz....Bu da yazilmimin en temel prensibi olan DON'T REPEAT YOURSELF E AYKIRIDIR!
//Abstrac Base class i icerisine Database icerisine yazdigimiz crud islemlerinden ornegin get methodu eger icerigi ile beraber imzasi ve implementasyonu eger tum Database i inherit edecek class da ayni olacak ise onlarin tekrar tekrar geti  yazmasina gerek yok...Ama icerigi class ina gore degisecek olan operasyonlar da ayni interface deki gibi imzasini yazariz sadece ama tabi o operasyonlari da abstract yapmaliyiz ki bunlari implement eden class lar onlarin icerigini istedikleri gibi doldurabilsinler
var Database = /** @class */ (function () {
    function Database() {
    }
    //Implemnenti ile yazdgimiz get ve add ortak olacagini dusundugumuz operasyonlardir...
    Database.prototype.get = function () {
        console.log("Database Get");
    };
    Database.prototype.add = function () {
        console.log("Database Add");
    };
    return Database;
}());
var Mysql = /** @class */ (function (_super) {
    __extends(Mysql, _super);
    function Mysql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //get ve add ortak operasyonlar oldugu icin onlari tekrar Mysql icinde yazmamiza gerek  yok..,.
    Mysql.prototype["delete"] = function () {
        console.log("Mysql delete");
    };
    Mysql.prototype.update = function () {
        console.log("Mysql update!");
    };
    return Mysql;
}(Database));
var Mongo = /** @class */ (function (_super) {
    __extends(Mongo, _super);
    function Mongo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //get ve add ortak operasyonlar oldugu icin onlari tekrar Mysql icinde yazmamiza gerek  yok..,.
    //Abstract icinde imza olarak belirtilmis methodlari biz burda yazmak zorundayiz...cunku biz bunlari kendimize gore yazalim diye orda imza ile ve abstract olarak yazildi
    //Abstract class ve interface lerden biz obje uretemiyoruz...Cunku soyut bir class dir...
    Mongo.prototype["delete"] = function () {
        console.log("Mongo delete");
    };
    Mongo.prototype.update = function () {
        console.log("Mongo update!");
    };
    return Mongo;
}(Database));
function AddDatabase(database) {
    database["delete"]();
    database.get();
    database.add();
    database.update();
}
AddDatabase(new Mongo());
AddDatabase(new Mysql());
