//ES6 ESModules
//Esmodules sayesinde biz kod bloklari yeniden kullanilmak uzere veya organizasyon amacli import ve export edilebilir...
//Iki adet import-export yontemi vardir
//1.named import-export 2.default 
//1.Named ifaddesi ile export ifadesinin ardindan disa aktarilmak istenilen ifade gelir ve disa aktarilan ifade degisken,fonksiyon, obje vs her ne ise ayni isimle import edilebilir..

export const name="Mehmet";//Degiskeni disa aktarimi
export const kullanici={name:"Adem", age:33}
export function Merhaba(name){return ` Merhaba ${name}`}

//Daha sonra tum degiskenleri de disa aktarabiliriz

export {name, kullanici,merhaba}

//Bir dosyada yalnizca 1 adet varsayilan disa aktarma yapilabilir
export default function topla(sayi1, sayi2){
    return sayi1+ sayi2;
}

const myUser={name:"Adem", age:33}

function showNUmbers(sayi1,sayi2){return sayi1+" "+ sayi2}

export { myUser as default, showNUmbers};//Birini default digerini normal export edecegiz ayni anda

//Ancak export default u farkli satirda yapabiliriz
//veya tek tek yapacaksak default olani bu sekilde yapariz...
export default showNumbers;

//