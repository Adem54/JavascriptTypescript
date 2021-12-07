let city="Skien"
console.log(city)

console.log("Merhaba")

function AsalMi(sayi){

    for (let i = 0; i <=sayi; i++) {
        if (sayi<=1) {
            console.log("Sayi 1 e esit ya da kucuk old icin asal degildir")  
            break 
        }else if(i!=1 && sayi!=i && sayi%i==0){
            console.log(sayi+ " sayisi "+ i+ " sayisina tam bolundugu icin asal sayi degildir")
            break
        }else if(i!=1 && sayi===i) {
          console.log(sayi+ " sayisi bir asal sayidir")
          return sayi;
        }
      
        
        
    }

}



let sayi1=AsalMi(7)
console.log("sayi1= "+ sayi1)
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers){
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        AsalMi(element) 
    }
}
findPrime(12,23,44,67,89,112)
findPrime(56,77)
findPrime(119,231,971,742,1973,2342,76,65,7899,1971)

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
// for (let i = 0; i < 1000; i++) {
   
//     console.log(i)
//     AsalMi(i)
    
// }


//Arkadas sayı
//İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

//Kendisi hari bolenleri toplami

function findDividersSum(sayi){
    let toplam=0;
    for (let i = 0; i < sayi; i++) {
       
        if(sayi%i==0){
          
            toplam+=i;
            console.log("toplam: "+toplam)
        }
        
       
    }
    return toplam;
}

findDividersSum(6)

console.log("--------------------------------------")
function friendNumbers(sayi1,sayi2){
       let result1=findDividersSum(sayi1);
       let result2=findDividersSum(sayi2);
       if(result1===sayi2 && result2===sayi1){
            console.log(result1+ " ve "+ result2 + " sayilari arkadas sayilardir")
       } else{
        console.log(result1+ " ve "+ result2 + " sayilari arkadas sayilar degildir")
       }
}

friendNumbers(220,284)
friendNumbers(1184,1210)

friendNumbers(2620,2924)
friendNumbers(5020, 5564)

//Mukemmel sayı
//Matematikte bazı pozitif tam sayıların pozitif bölenleri toplamı, sayının kendisinin iki katına eşittir. Bu tür sayılara “mükemmel sayı” denir.
//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

//Kendisi dahil bolenler toplami
function findDividersTotal(sayi){
    let toplam=0;
    for (let i = 0; i <= sayi; i++) {
       
        if(sayi%i==0){
          
            toplam+=i;
            console.log("toplam: "+toplam)
        }
        
       
    }
    return toplam;
}



console.log("Mukemmel sayi bulma!!!!")
for (let i = 1; i < 1000; i++) {
   
     let result= findDividersTotal(i);
     if(result===(2*i)){
        console.log(i+ " mukemmel sayidir")
     }else{
         console.log(i + " mukemmel sayi degildir")
     }
}

