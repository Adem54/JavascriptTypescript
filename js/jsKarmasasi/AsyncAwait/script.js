
//Db den sorgu yaparsiniz ve db den sorgu gelmesini beklersiniz ve alt satirda da data yi listelem kodunuz varsa asagidaki kod veritabanindan gelecek olan sorguyu beklemeden alt satiri calistirmaya calisacaktir ve dogal olarak bizim sorgumuz a gore degil de  hata aliriz ve biz javascriptte alt satira diyoruz ki beni bekle benim islemim bitince calis diyoruz...

async function fetchUsers(){
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await response.json();
  console.log(data);
  data.forEach(element => {
    console.log(element);
  });
}

fetchUsers();


//Dizileri forEach ve for of ile direk elemanlarini yazdirabiliriz foreach icerisinde bir fonks vardir callback ama for of icinde fonks yok....for of C# daki forEach gibi davraniyor...

//Biz beklenmesi gerekken verilerin basina await yaziyoruz ve onlarin  gelmesinin beklemeden alttaki kodlarin calismamasini sagladik