{
interface IDatabase {
add();
get();
update();
delete();
}

//interfaceler ve implement edilme durumlari bu sekildedeir
class Mysql implements IDatabase {
    add(){
        console.log("Mysql added");
    }
    get(){
        console.log("Mysql veri listelendi")
    }

    update(){
        console.log("Mysql updated");
    }

    delete(){
        console.log("Mysql deleted!");
    }
}

//interfaceler ve implement edilme durumlari bu sekildedeir
class Mssql implements IDatabase {
    add(){
        console.log("Mssql added");
    }
    get(){
        console.log("Mssql veri listelendi")
    }

    update(){
        console.log("Mssql updated");
    }

    delete(){
        console.log("Mssql deleted!");
    }
}


//interfaceler ve implement edilme durumlari bu sekildedeir
class Mongo implements IDatabase {
    add(){
        console.log("Mongo added");
    }
    get(){
        console.log("Mongo veri listelendi")
    }

    update(){
        console.log("Mongo updated");
    }

    delete(){
        console.log("Mongo deleted!");
    }
}


function databaseOperations(database:IDatabase){
    database.add();
    database.get();
    database.update();
    database.delete();
}


//Iste neden interface kullandik sorusunun cevabi hangi database islemini koyarsak onu calistiriyor, ayri ca da daha sonradan yeni taleplerle gelop yeni bir database sisteme entegre etmek istersek o kadar kolay ki mevcut sistmeimizze hic dokunman musteriden gelen yeni bir talebi sistmimize eklmeis oluyoruz..
databaseOperations(new Mssql());
databaseOperations(new Mysql());
databaseOperations(new Mongo());

}