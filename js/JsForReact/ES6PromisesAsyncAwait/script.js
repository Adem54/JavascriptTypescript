//ES6 Promises-Async-await

import axios from "axios";

const veriGetir=new Promise((resolve,reject)=>{
    const veriGeldiMi=false;
    if(veriGeldiMi){
        resolve("Verimiz burda")
    }else {
        reject("Veriyi alamadik")
    }
})

//kendi promise mizi olusturuyoruz.Bu sekilde new ile baslayan fonks lara constructor function lar deniyor

//Promise i kullanirken 2 tane chain methodumuz var .than ve .catch isimli
//.than resolve
//.catch reject

veriGetir
.then((response)=>console.log("Gelen Cevap: "+ response))
.catch(response=>console.log("Gelen Cevap"+ response));

//React ta new Promise yapmayiz..ama networke request gonderirken yani apiye request istegi gonderirken kullaniriz 
//Ve async-await ile beraber kullanilir daha cok...
//npm install axios yukedikten sonra



console.log(axios)

//Ya bu sekilde promise ile yapariz...
function ulkeleriGetir(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>console.log(response.data))
    .catch(err=>console.log(err));
}

ulkeleriGetir();

//Basen ic ice then ler kullanmak yorucu olabilir

//ya da async-await  ile yapariz...
async function ulkeleriGetir2(){
    const ulkeListesi=await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(ulkeListesi.data);
}

ulkeleriGetir2();