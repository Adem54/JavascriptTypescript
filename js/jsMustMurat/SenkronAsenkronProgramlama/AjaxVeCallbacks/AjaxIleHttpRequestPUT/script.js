//Ajax,callback, http request

//Javascript icinde bir objeyi alip kullanacaksak  nasil yapariz onu tabi ki onu constructor parametersine aliriz ve constturctor icinde new leriz....Sonra da javascript icinde ki this.xhr ile global de de yani class icinde her yerde kullanabiliriz C# da bu sekilde kullanilmiyor ama javascriptte kullaniliyor...
class Request {
    constructor(){
        this.xhr=new XMLHttpRequest();
    }
    //Get Request
    get(url,callback){
      
      
       this.xhr.open("GET",url);//default olarak true idi yani asenkron
       this.xhr.onload=()=>{
          
           if (this.xhr.status===200) {
              
               callback(null,this.xhr.responseText);//Burdsa istegimiz bitti bu degeri callback fonks gonder   
           }else {
                callback("GetRequest: Hata mesaji olustu!",null);//Veri gelmiyorsa hata var demektir
           }
       }
       this.xhr.send();
     
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        //Biz apilerimize bir json verisi verecegimzi belirtmemiz gerekiyor bunu da header verisi olarak belirtmemiz gerekiyor ayni postmanda yaptigimiz gibi
        this.xhr.setRequestHeader("Content-type","application/json");//Post islemlerinde eger apolication/json olarak yazarsak bu veriyi json olarak alacak, ama application/x-www-form-urlencoded seklinde yazarsak das form  verisi olarak alacaktir
        this.xhr.onload=()=>{//GEt isleminde status 200 u kontrol etmisitk ama POST isleminde biz 201 created status code unu kontrol etmeliyiz, post isleminde bunu kontrol edecegiz ki bunu PUT islemi icinde kullanabiliriz
            if (this.xhr.status===201) {//Eger 201 ise o zaman yeni bir kaynak olustu demektir ve response olarak olusturdugumuz kaynak geri donecek 
                callback(null,this.xhr.responseText)
            }else {
                callback("PostRequest:Herhangi bir hata olustu",null);
            }
        }
        //Artik verimizi gondermemiz gerekiyor.Normalde biz get isleminde veri gondermedigimizden dolayi this.send() parametre almiyor ama postta gonderecegimiz veriyi parametreye yazacagiz..Ayrica da verimizi bizim string olarak gondermemiz gerekiyor cunku biz burda veri transferi yapiyoruz ve bize gonderilecek  veriyi stringe cevirmemiz gerekiyor...
        this.xhr.send(JSON.stringify(data));

        }

//put request-bir datamizi update etmemizi saglayan requestimizdir
put(url,data,callback){
    this.xhr.open("PUT",url);
    this.xhr.setRequestHeader("Content-type","application/json");
    this.xhr.onload=()=>{
        if (this.xhr.status===200) {//Guncelledigimize dair bize gelen status kodu 200 dur
            callback(null,this.xhr.responseText)
        }else {
            callback("PutRequest:Herhangi bir hata olustu",null);
        }

    }
    this.xhr.send(JSON.stringify(data));

    }

//Delete request
    delete(url,callback){
      
      
        this.xhr.open("DELETE",url);//default olarak true idi yani asenkron
        this.xhr.onload=()=>{
           
            if (this.xhr.status===200) {
               
                callback(null,"Veri silme islemi basarili");//this.xhr.responseText-Bos bir obje donecek..delete methodu sonrasinda 
            }else {
                 callback("DeleteRequest: Hata mesaji olustu!",null);//Veri gelmiyorsa hata var demektir
            }
        }
        this.xhr.send();
      
     }

}
const request1=new Request();

request1.get("https://jsonplaceholder.typicode.com/albums",getAlbums);

//console.log("albums: ",albums);//Burasi senkron calistigi icin direk burasi calisir daha veri gelmeden calisir ondan dolayi albums undefined gelecektir...Bu albumleri benim burda alabilmem icin callback kullanmam gerekiyor...
function getAlbums(error,response){
 if(error===null){//Basarili
     console.log(response)
 }else {
     console.log(error);//Hata
 }
}

//POST ISLEMI
//Get request-Bir web sayfasina erisiriz ve bize bir html sayfasi doner...
//Get request demek-Biz googe.com diye bir arama yaptigimiz zaman arka tarafta bu adresin ip adresini buluyor ve ip adresine gore google.com u olusturan html,css,javascript dosyalari ve resim dolayalari varsa video dosyalarinin hepsini bizim bilgisayarimiza direk olarak iniyor ve biz kendi bilgisayarimizda artik o goog.com u goruntuleyebiliyoruz...
//POST REQUEST-Bir apiye bilgilerimizi gonderebiliriz,ornegin form bilgimzi gonderebiliriz veya json bilgilerimizi gonderebiliriz...

//Bu onemli!!!!!!
//Burda veri eklerken id gondermemize gerek yok cunku id yi otomatik olarak kendisi artiracak zaten.

const data={
    userId: 2,
    title: "My New Title"
  }

request1.post("https://jsonplaceholder.typicode.com/albums",data,function(error,response){
  if (error===null) {
      console.log(response);
  }else {
      console.log(error)
  }
})//Data olarak bize ekldigmizi veriyi dondurmesini bekliyoruz...



//Put request
const data2={
    userId: 134,
    title: "Update my Title"
  }
//id si 1 olan objenin verilerini degistiriyoruz
request1.put("https://jsonplaceholder.typicode.com/albums/1",data2,function(error,response){
  if (error===null) {
      console.log(response);
  }else {
      console.log(error)
  }
})//Data olarak bize guncelleddigimiz objeyi dondurmesini bekleriz..


request1.delete("https://jsonplaceholder.typicode.com/albums/341243124",deleteAlbum);

//console.log("albums: ",albums);//Burasi senkron calistigi icin direk burasi calisir daha veri gelmeden calisir ondan dolayi albums undefined gelecektir...Bu albumleri benim burda alabilmem icin callback kullanmam gerekiyor...
function deleteAlbum(error,response){
 if(error===null){//Basarili
     console.log(response)
 }else {
     console.log(error);//Hata
 }
}
//Data olarak bize bos bir obje dondurmesini bekleriz...