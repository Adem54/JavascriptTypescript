//Normalde projemizi tek sayfada olusturabiiriz ama biz projeyi moduler olarak, daha yonetilebilir hale getirmek icin class larla bu projeyi yapacagiz.. 3 farkli class yapaagiz.film.js,ui.js,storage.js ve projemizin ana calisacak olan dosyasi da project.js dir.
//Proje dosyalarini modullerini projeye dahil ederken ana js dosyamiz yani diger tum js dosyalarini uzerinde toplayip calistiracagimz ana dosyayi en altta tanimlamaliyiz ki tum js dosyalari duzgun calissin
{/* <script src="ui.js"></script>
<script src="storage.js"></script>
<script src= "film.js"></script>
<script src="project.js"></script> */}

//Oncelikle form umuza basinca film eklenmsini istiyoruz yani submit islemi  yapacagiz
//Filmleri bu projede table icerisindeki
//Arayuze filmeleri eklemeye calisacagiz
const form=document.querySelector("#film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const  cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");
//UI objesini baslatalim burda cunku asagida ki evetlar icinde UI dan olusan instanceyi  kullanacagiz...
const ui=new UI();

//Storage objesinden instance uret
const storage=new Storage();
//Tum eventleri yukleme fonksiyonu, tum kullandigimiz eventleri calistirdigimiz yer olacak
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        //Localstorage dan tum arrayi al ve ara yuzde bulunduklari yerlere yazmamiz gerekiyor
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}


//KULLANICI DAVRANISLARINI KONTROL ALTINA ALMAK!
//Bir proje yaparken kullanicinin kullanicigi kucuk bir alan bile yapsak orada kullanici davaranislari yani kullanicinin yapabilecegi herturlu farkli davranislari hesap etmeye calisalim ve onlari kontrol altina alalim bu mesele projelerde coook kritik oneme sahip.....
//Eger en az biri bile bos olsa hata donmeliyiz..Yani kullanicinin buraya veriyi tam girip girmedini kontrol etmliyiz..
function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    //Eger en az biri bile bos olsa hata donmeliyiz..Yani kullanicinin buraya veriyi tam girip girmedini kontrol etmliyiz..
    if(title==="" | director===" " | url===""){
        //hata mesaji ver..
        ui.displayMessages("Tum alanlari doldurun...", "danger");
    }else {
        //Bir tane yeni film olusturduk
        const newFilm=new Film(title,director,url);//Biz buyuk projelerde product urun ler le calisacagiiz ve urunlerin birden fazla verisini ayni anda kontrol etmemiz gerekiyor ve farkli farkli turde veriler iste bunlari cok daha kolay bir sekilde kontrol altinda tutmak icin ve tekrar tekrar olusturmamak icin classs lardan yani functional constructorlardan yararlaniriz...Ve artik ben newFilm icinde hem title,hem url,hem director bilgini tutuyorum ve nerde ihtiyacim olursa hemen kullanabiliriz
        //Simdi de filmimizi ui ye ekleyelim
        ui.addFilmToUI(newFilm);//Arayuze film ekleme fonksiyonu

        storage.addFilmToStorage(newFilm);
        //Film eklendi bilgilendirme mesaji ver...
        ui.displayMessages("Film basari ile eklendi..", "success");
    }
//Biz eger 3 tane veriyi de aldi isek artik yeni bir film olusturabilriz onu da film.js dosyamizda olusturacagimiz constructor uzerinden halledecegiz..
ui.clearInputs(titleElement,directorElement,urlElement);
e.preventDefault();
}

//Event capturing ile biz silme islemini yapiyoruz....
//Silme islemini burda yapiyoruz...
//Burda biz hangi elemana basarsak onu bulabiliiyoruz eventcapturing ile ve e.target uzerinden silecegimiz elemena da erisebiliyoruz...
function deleteFilm(e){
  
    if(e.target.id==="delete-film"){
        ui.deleteFilmFromUI(e.target); 
     //Biz bu filmi localStorage dan da silebilmemiz icin silme islemi yaptigimiz yerdeki film ismine erismeye calisacagiz ve ona da yine e.target.paranteElement=>td yi verir film ismi bu td den 2 gerideki kardesidir   
     //e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessages("Silme islemi basarili!","success");
    }
}

function clearAllFilms(e){
if(confirm("Emin misiniz?")){
    ui.clearAllFilmsFromUI();   
    storage.clearAllFilmFromStorage();
}


}
