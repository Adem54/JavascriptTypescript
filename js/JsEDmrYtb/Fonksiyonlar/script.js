//1-Javascriptte bir fonksiyonda parametreye girilen degerlerin tipini kontrol etmez
//2-Parametrede 3 deger varsa biz 2 veya 4 farkli veri ile gelebiliriz buna da kizmaz javascript
//3-Ayni isimle yeni bir fonks olusturunca da kizmiyor...biz eger ayni isimde ayni sayfada birden fazla fonks calsitirirsak en son hangisini gorurse onu calistirir ve bu baska sayfalardaki fonksiyonmlarimiz icinde bu sekilde olabilir onun icin bu biraz tehlikelidir ondan dolayi function larimizi da mumkun mertebe let veya const degiskenin e atayarak gelistirelim.....//Bu da problem C# da

function sayiTopla (sayi1,sayi2){
    console.log("sayiTopla fonksiyonu-3")
    return sayi1 + sayi2
}
//javascript kontrol etmiyor kizmiyor bunlar C#,java da buyuk problem
sayiTopla("Adem","Zeynep");
//Bunlara da kizmiyor javascript
sayiTopla(4)
sayiTopla(2,6,9);
function sayiTopla(sayi1,sayi2){
    console.log("sayiTopla fonksiyonu-2")
    return sayi1 + sayi2
}
function sayiTopla(sayi1,sayi2){
    console.log("sayiTopla fonksiyonu-3")
    console.log(sayi1+ sayi2)
}
sayiTopla(7,9)
//Bu sekilde trick  bir yontem de yapabiliriz ama bu zaten ES6 ile gelen default deger verme ile cozuldu bir altta gorebiliriz...
function sayiTopla(sayi1,sayi2){
    if(sayi2===undefined){
        sayi2=0;
    }
    console.log(sayi1+sayi2)
}

function sayiTopla2(sayi1, sayi2=0){
    console.log(sayi1+sayi2)
}

sayiTopla2(28);
console.log("-----------")
sayiTopla(14)//

//Peki ben tek deger vereyim ama verdigim deger sayi2 ye gitsin istersek ne yapariz?
function sayiTopla3(sayi1, sayi2){
    console.log("sayi1: "+ sayi1)
    console.log("sayi2 "+sayi2)
    console.log(sayi1+ sayi2)
}
sayiTopla3(undefined,26)//Nan olacaktir....

console.log("Arguments object")
//Arguments Object ile tum parametreleri alabiliyuoruz...

function findMax(){
    let max=0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        max<element?max=element:element

    }
    return max;
}

console.log(findMax(23,44,12,67));
