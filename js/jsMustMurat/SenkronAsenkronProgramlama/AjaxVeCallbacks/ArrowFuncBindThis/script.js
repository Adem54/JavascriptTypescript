//Arrow functions ve this
const person={
    age:25,
    tellAge:function(){
        console.log(this);//this=>Person//Ama bind ile this diyerek window a baglarsak artik bu this de window u gosterir
        console.log(this.age);
    }.bind(this)//bind ile this yaparsak this tellAge icinde person objesini gosterir ama person objesi icinde tellAge normal fonksiyon disinda this window u gosterir biz eger tellAge fonks icinde de this in window u gostermesini istersek bind ile tellAge fonskiynunu this e baglayabiliriz....
    //Burda fonks disindsa this window objesini gosterir..Biz buraya bind fonks sayesinde this i biz istedigimiz objeye baglayabiliyoruz ondan dolayi bind ile cozebiliyoruzDaha dogrusu herhangi bir fonksiyonumuzu biz hangi objeyi this olarak almasini istiyrsak o function sonuna gelip .bind( ) dedikten sonra parantez icin e objeyi yazabiliriz.... ya da arrow function lar ile bu durumu cozebiliriz...
}
person.tellAge();
const person2={
    age:35,
    tellAge:()=>{
        console.log(this);//this=>Person
        console.log(this.age);
    }//Arrow functionlar her zaman this olarak window u gosterir...ARka planda sanki bind ile bu this i window a baglamis gibi hareket ediyor....
}
person2.tellAge();