
//UI dedigimiz yer filmleri buraya ekleyecegiz yani table altinda table row olarak eklyecegimz yer UI daha dogrusu goruntuleycegmiz yer
//Biz ekleme islemini yaptgimz zaman filmler listesi altina tablo elemani atlinda table row olarak olusturacagimiz alana getiregiz
 /*
 <tr><td><img src="" class="img-fluid img-thumbnail"></td> <td></td>
<td></td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> */

//Herhangi bir ozelligi olmayacak
//Arayuze filmeleri ekleyecegiz o zaman once biz table icine bir tane table row-tr ekleriz ve icinde 4 tane td olacak yukardaki  gibi
/*
function UI(){

}*/
//Dikkat edelim fonksiyonlarimizi eski yontemde prototype icine yazariz  yeni yontemde , class larda constructor disina yazilir
/*
UI.prototype.addFilmToUI=function(newFilm){
   const filmList=document.getElementById("films");//tbody yi seciyoruz onun icerisine eklyecegiz
   //filmList.innerHTML=//dersek bundan once  yazdiklarin silip onun uzerine verdigimiz elemani yazar onun icin biz her geleni yazsin diye += yapiyoruz
   //Once gelen filmleri icine yazacagimiz alani DOM ile olsutururuz sonra da onalrin icine film bilgilerimiz girereiz...
  filmList.innerHTML+=`
  <tr><td><img height="200px" src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
   <td>${newFilm.title}</td>
  <td>${newFilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 
  `
} */
//inputlara veri girip ekledikten sonra temizlemek icin bu fonksiyonu kullaniriz...
/*
UI.prototype.clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
} */ //Bunu gidip project.js sayfamzda add isleminden sonra calstirarak her eklme isleminden sonra inputlarimizin temizlenmesini saglariz...

//Moduler calisirken yani class larla calisirken her adimimiz en kucuk adimlarimiz bile birer class gibi,yani birer fonksiyon veya method olarak dusunmeliyiz, her adimimiz birer fonksiyondur, temizleme,hata mesaji verme, bilgilendirme,
  /*Hata mesaji ve bilgilendirme!
  <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
  */
 /*
UI.prototype.displayMessages=function(message,type){
    const cardBody=document.querySelector(".card-body");//.card-body class ina sahip elementlerden ilkini otomatik seciyor kendisi
    const div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;
    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();//hata mesajimiz 1 saniye sonra silinmesi icin 1 sn sonra mesaj divimizi silen fonksiyon calissin diyoruz...
    },1000);
} */
/*
UI.prototype.loadAllFilms=function(films){
    const filmList=document.getElementById("films");
    films.forEach(function(film){
        filmList.innerHTML+=`
        <tr><td><img height="200px" src="${film.url}" class="img-fluid img-thumbnail"></td>
         <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        `
    })
} */
//Biz bir method yaziyoruz ve bunu protoype a ekliyourz..
//Bu filmi arayuze eklemeye calisacagiz
//Biz inputa girdigmiz verileri kullanici arayuzumuzde listeliyoruz, biz verileri ekledikten sonra verilerimiz inputlarin icinde kaliyor inputlari da temizlememiz gerekiyor onun icin de bir temizleme fonksiyonu yazacagiz yine UI mizin prototypina..
/*
UI.prototype.deleteFilmFromUI=function(element){
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI=function(){
    //filmList.innerHTML="" bu da silme yontemidiir
const filmList=document.querySelector("#films");
  console.log(filmList.firstElementChild);
  while (filmList.firstElementChild!==null) {
      filmList.firstElementChild.remove();
  }
}  */

//UI yimizi da ES6 daki class a gore yazacagiz ama burda soyle bir durum var bizim UI function constructor objesinde hic property yok ve biz burda olusturdugumz methodlari da ondan dolayi property de olusturmustuk ve bizim burda olusturedugmuz fonksiyonlar genellikle tool gorevi goruyorlar  yani normal function ve aracilik yapiyorlar daha cok..O zaman biz UI yi classini ES6 da tanimlarken icindeki methodlari static fonksiyon olarak tanimlayabiliriz..

//Bu arada biz static yapmak zorunda degildik ama sadece ugrasmamak iicn yaptik biz bu islemi,yani istese idik static de yapabilirdik
class UI {

   static addFilmToUI(newFilm){
const filmList=document.getElementById("films");
  filmList.innerHTML+=`
  <tr><td><img height="200px" src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
   <td>${newFilm.title}</td>
  <td>${newFilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 
  `
    }

    static clearInputs(element1,element2,element3){
        element1.value="";
        element2.value="";
        element3.value="";
    }

   static displayMessages(message,type){
        const cardBody=document.querySelector(".card-body");//.card-body class ina sahip elementlerden ilkini otomatik seciyor kendisi
        const div=document.createElement("div");
        div.className=`alert alert-${type}`;
        div.textContent=message;
        cardBody.appendChild(div);
    
        setTimeout(function(){
            div.remove();//hata mesajimiz 1 saniye sonra silinmesi icin 1 sn sonra mesaj divimizi silen fonksiyon calissin diyoruz...
        },1000);
    }

    static loadAllFilms(films){
        const filmList=document.getElementById("films");
        films.forEach(function(film){
            filmList.innerHTML+=`
            <tr><td><img height="200px" src="${film.url}" class="img-fluid img-thumbnail"></td>
             <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> 
            `
        })
    }

    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI(){
        //filmList.innerHTML="" bu da silme yontemidiir
    const filmList=document.querySelector("#films");
      console.log(filmList.firstElementChild);
      while (filmList.firstElementChild!==null) {
          filmList.firstElementChild.remove();
      }
    }
}