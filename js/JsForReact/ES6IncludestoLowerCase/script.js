//Includes,toLowerCase()

//Includes() bir string icinde verilen ifadenin olup olmadigini kontrol eder..buyuk harf kucuk harf duyarlidir

const name="Mehmet";

console.log(name.includes("met"));//true gelecektir
console.log(name.includes("mehmet"));//false gelecektir

//Buyuk kucuk harf duyarliligini kaldirmak icin ne  yapacagiz o zaman toLowercase methodunu kullanacagiz

const newName=name.toLowerCase();
console.log(newName)//mehmet olarak gelecektir yani ismin tum harfleri kucuk olarak gelecektir

//Kontrol yaparken ise bunlar birbirne eklenebilen methdlar yani arka arkaya yazilabiliyor

console.log(name.toLowerCase().includes("mehmet"))//true

const kontrol="MEHMET"; //ornegin degisken den gelen ismi biz name icinde var mi kontrol edelim


console.log(name.toLowerCase().includes(kontrol.toLowerCase())); //true

//Bunu dizi icinde uygulayalim bir de
console.log("--------------------------")
const products=[
    {id:1, name:"Kalem", unitPrice:5},
    {id:2, name:"Defter", unitPrice:10},
    {id:3, name:"Silgi", unitPrice:2},
    {id:4, name:"Kalemtras", unitPrice:7},
]

//Urunler icinden icinde kalem ifadesi gecen 2 tane urun var bunlari bulalim simdi
let myProducts=[];

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if(element.name.toLowerCase().includes("kalem")){
        console.log(element)
        myProducts.push(element)
    }
    
}

console.log(myProducts)

//filter ile yapalim-filter yeni bir dizi  olusturacak

let newProducts=products.filter((product)=>{
    return product.name.toLowerCase().includes("kalem")//toLowerCsae tum harfleri kucuk harfe donusturuyor...
})

console.log(newProducts)