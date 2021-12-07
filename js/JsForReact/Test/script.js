function topla2(...sayilar){
    let topla=0;
    for (let i = 0; i < sayilar.length; i++) {
        const element =sayilar[i];
        topla+=element;
        
        
    }
    console.log(topla)
}

topla2(12,5,8,21,3)


//IKI DIZIYI BIRLESTIRMEK ICIN KULLANIRIIZ....
const sayilar1 = [1, 2, 3];
const sayilar2 = [4, 5, 6];

//Iki diziyi bu sekilde birlestirebiliriz...
const birlesmisDizi = sayilar1.concat(sayilar2)
console.log(birlesmisDizi)
//Ama buna hic gerek yok...
const birlesmisDizi2 = [...sayilar1, ...sayilar2]
console.log(birlesmisDizi2)
//Bu sekildde spread operatoru ile yaparsak hem immutable yani degismezlik kuralin riayet etmis oluyoruz hemde kolay bir sekilde amaci gerceklestiriyoruz

//IKI OBJEYI BIRLESTIRMEK ISTEDGIMIZ ZAMAN...
const user = {name:"Adem", age:"33"}
const adress={city:"Skien",country:"Norway"}

const birlesmisObje={...user,...adress}
console.log(birlesmisObje)