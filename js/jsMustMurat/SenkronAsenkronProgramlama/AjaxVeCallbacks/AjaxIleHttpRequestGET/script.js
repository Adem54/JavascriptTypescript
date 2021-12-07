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
                callback("Hata mesaji olustu!",null);//Veri gelmiyorsa hata var demektir
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