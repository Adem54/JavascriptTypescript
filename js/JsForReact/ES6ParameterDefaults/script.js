//Default parameters
function topla(sayi1,sayi2=0){
    return sayi1+ sayi2;
}

//Nan=>not a number sayi degil
console.log(topla(3))//3+undefined yapmaya calisiyor ve sonucunda sayi bulamiyor ondan dolayi Nan donuyor.Ama default bir deger verirsek function i tanimlarken

//Rest ile kullanimlarda rest yani ...rest bu parametrede mutlaak en  sona yazilmalidir. buna dikkat...yoksa tum parametreyi toplar ve hata aliriz...

//Reducer olustururken reduxt ta state e baslangic degeri girrerkn kuillaniuyoruz
//Redux ta bu sekilde kullanilir...Reducer hem satete hem de action aliyor..
const state_Baslangic={yukleniyor:false, yazilar:[]};
const reducer=(state=state_Baslangic,action)=> state;