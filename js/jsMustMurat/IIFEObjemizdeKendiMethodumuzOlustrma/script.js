
//IIFE-immedidately invoke function expression
(function(name){
    console.log("Name: ", name);
})("Adem");

const database={
    host:"localhost",
    add:function(){
        console.log("Eklendi!");
    },
    get:function(){
        console.log("Listelendi!");
    },
    update:function(){
        console.log("Guncellendi!")
    },
    delete:function(){
        console.log("Silindi!")
    }
}

database.add();
database.get();
database.update();
database.delete();


function selam(){
    console.log("Selam!")
}
selam();

function selam(){
    console.log("Merhaba!")
}

selam();

var a=10;
console.log(a*5);

//Var type decleration keywordunun block scope daki beklenmedik davranislari!!!

//If icinde block scope da biz var tanimladigimiz zmaan ayrica disarda globalde var ile ayni degiskeni tanimlamis olsak bile if block scope undan sonra ki tum ayni isimdeki degiskenler global scope da o if block scopunda var ile tanimlanan o degiskeni deger olarak alacaklardir....Ancak dikkat edelim bu block scope if scopu iciin gecerli fonksiyon scopu icin gecerli degildir.....
var sayi1=40;
let sayi2=30;

function topla(){
    var sayi1=24;
    let sayi2=15;
    console.log("sayi1",sayi1, "sayi2", sayi2);
}
topla();
console.log("sayi1:",sayi1, " sayi2: ",sayi2);

if(true){
    var sayi1=60;
    let sayi2=70;
    console.log("sayi1!",sayi1, "sayi2!", sayi2);
}

console.log("sayi1:",sayi1, " sayi2: ",sayi2);//sayi1: 60  sayi2:  30
//Burada sayi1 global de de var ile sayi1 tanimlanmasina ragmen kendisi global de oldugu halde gidip bir onceki block scope yani if scopeundaki degeri aliyor.Ama tabi let ile tanimlanan degiskenlerde boyle bir davranis yoktur...Bu var ile tanimlanan ayni isimde tanimlanan degiskenler icin gecerlidir
