/*
function Storage(){

} */
//Biz burda fonksiyon yazacagimiz icin icersinde herhanmgi bir ozellik olmayacak sadece prototype ina fonksiynlari yani methodlarmizi ekleyecegiz...Genel mantik bu sekildedir ozellikler propertiesler direk constructor fonks icine veya constructor icine ama normal method veya fonskiynalar ise constructor disina yani eger func constructor objesinde calisiyorsak disarda prototype a ekleriz ama class larla yeni yontem class larla calisityorsak da constructor disina  yazaariz zaten o da ayni prototype a eklemekle ayni seydir..
//Parantezimize bir tane film objesi gelecek....
/*
Storage.prototype.addFilmToStorage=function(newFilm){
   let films=this.getFilmsFromStorage();//arrayimizi aldik..
   films.push(newFilm);
   localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage=function(){
     //localStorage eklerken de orda bizim hic array imizde olmayabilir ya da orda bizim arrayimizde olabilir sorgulamamiz gerekiyor eger yoksa null gelir zaten
     let films;
     if(localStorage.getItem("films")===null){
         films=[];
     }else {
         films=JSON.parse(localStorage.getItem("films"));
         
     }
     return films;
} */
//Biz localStorage dan film verilerimizi alma islemini ayri bir fonksiyonda yaptik cunku oncelikle biz sadece localStorage dan films verilerimizi alma islemini defalarca yapacagiz ikinciside eger onu ekleme isinin icinde yapsa idik o zaman biz films.push islemin hem if durumunda hem de else durumunda iki kez ayni islemi yapmak durumunda olacaktik ama bu kendini tekrar etmek demektir buna gerek yok bunun yerine biz return olarak films leri getFilmsFromStorage fonksdan dondururuz ve sonrasinda da bu filmleri aldiktan sonra push islemin 1 kez yaparak islemi cozmus oluruz...ve DONT REPEAT YOURSELF E UYMUS OLURUZ...
/*
Storage.prototype.deleteFilmFromStorage=function(filmTitle){
    let films=this.getFilmsFromStorage();
    films.forEach(function(film,index){
            if(film.title===filmTitle){
                films.splice(index,1);//index in bulundugu veriyi sil,1 tane sil diyoruz
            }
    });
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmFromStorage=function(){
      localStorage.removeItem("films");
} */

class Storage{
     static addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();//arrayimizi aldik..
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
     }
     
    static getFilmsFromStorage(){
          //localStorage eklerken de orda bizim hic array imizde olmayabilir ya da orda bizim arrayimizde olabilir sorgulamamiz gerekiyor eger yoksa null gelir zaten
          let films;
          if(localStorage.getItem("films")===null){
              films=[];
          }else {
              films=JSON.parse(localStorage.getItem("films"));
              
          }
          return films;
     }

    static deleteFilmFromStorage(filmTitle){
        let films=this.getFilmsFromStorage();
        films.forEach(function(film,index){
                if(film.title===filmTitle){
                    films.splice(index,1);//index in bulundugu veriyi sil,1 tane sil diyoruz
                }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static clearAllFilmFromStorage(){
          localStorage.removeItem("films");
    }
}