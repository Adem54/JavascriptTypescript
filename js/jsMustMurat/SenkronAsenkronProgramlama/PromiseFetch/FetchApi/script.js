console.log("Fetch api!");
//Ajax yerine kullanabilecegimiz alternatif bir api den veri alma yontemidir
//Fetch Api verimizi promise ile donuyor promise kendi icinde geliyor..
//FetchApi sini window objesinin icinde bulunan bir metod sayesinde kullaniyoruz.Window icindeki fetch objesini kullanarak islemlerimizi gerceklestiririz...
//fetch ile txt dosyasindan veri alirken fetch icerisindeki text() methodunu kullaniriz
function getTextFile(){
fetch("example.txt")
.then(response=>response.text())
.then(data=>console.log(data))
.catch(error=>console.error(error))//fetch objesi bize bir promise dondurecek
}

getTextFile();


function getJsonFile(){
    fetch("file.json")
    .then(response=> response.json())//Biz direk response u dondugumz sayfa da response.json() dedigimiz zaman bize dogrudan json verisini vermiyor, fetchin bir json verisini icinde donme standarti var onun icinde donderiddigi icin biz ilk satirda dogrudan veriyi erisemiyoruz ondan dolayi burayi return edip bir than daha yaparsak o zamn json verisini ordan koparip bir sonraki than icine saf sade dogrudan json verimizi bize sunuyor.....
   .then(data=>console.log(data))
    .catch(error=>console.error("Bir hata olustu!"))
}

getJsonFile();

//Biz eger fetch ile disardan bir API ye request atarsak biz ekstra belirtmedigimiz surece o default olarak get request atacaktir...

let URL="https://jsonplaceholder.typicode.com/users";

function getUsers(){
    fetch(URL)
    .then(response=>response.json())
    .then(response=>console.log(response.forEach(user => {
      console.log(user.name);  
      console.log(user.username); 
       console.log(user.email);  
    })))
    .catch(error=>console.error("Endpointimizde bir hata olustu!"))
}

getUsers();