{
    //interfaceler ve implement edilme durumlari bu sekildedeir
    var Mysql = /** @class */ (function () {
        function Mysql() {
        }
        Mysql.prototype.add = function () {
            console.log("Mysql added");
        };
        Mysql.prototype.get = function () {
            console.log("Mysql veri listelendi");
        };
        Mysql.prototype.update = function () {
            console.log("Mysql updated");
        };
        Mysql.prototype["delete"] = function () {
            console.log("Mysql deleted!");
        };
        return Mysql;
    }());
    //interfaceler ve implement edilme durumlari bu sekildedeir
    var Mssql = /** @class */ (function () {
        function Mssql() {
        }
        Mssql.prototype.add = function () {
            console.log("Mssql added");
        };
        Mssql.prototype.get = function () {
            console.log("Mssql veri listelendi");
        };
        Mssql.prototype.update = function () {
            console.log("Mssql updated");
        };
        Mssql.prototype["delete"] = function () {
            console.log("Mssql deleted!");
        };
        return Mssql;
    }());
    //interfaceler ve implement edilme durumlari bu sekildedeir
    var Mongo = /** @class */ (function () {
        function Mongo() {
        }
        Mongo.prototype.add = function () {
            console.log("Mongo added");
        };
        Mongo.prototype.get = function () {
            console.log("Mongo veri listelendi");
        };
        Mongo.prototype.update = function () {
            console.log("Mongo updated");
        };
        Mongo.prototype["delete"] = function () {
            console.log("Mongo deleted!");
        };
        return Mongo;
    }());
    function databaseOperations(database) {
        database.add();
        database.get();
        database.update();
        database["delete"]();
    }
    //Iste neden interface kullandik sorusunun cevabi hangi database islemini koyarsak onu calistiriyor, ayri ca da daha sonradan yeni taleplerle gelop yeni bir database sisteme entegre etmek istersek o kadar kolay ki mevcut sistmeimizze hic dokunman musteriden gelen yeni bir talebi sistmimize eklmeis oluyoruz..
    databaseOperations(new Mssql());
    databaseOperations(new Mysql());
    databaseOperations(new Mongo());
}
