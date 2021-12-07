//Find, Some,Every methodlari

const products=[
    {id:1, name:"Kalem", unitPrice:5},
    {id:2, name:"Defter", unitPrice:10},
    {id:3, name:"Silgi", unitPrice:2},
    {id:4, name:"Kalemtras", unitPrice:7},
]

//find-1 elemani bulmaya yarar ve bulur bulmaz islemi sonlandirir ilk buldugu elemani dondurur
products.find((product)=>product.unitPrice>5)

console.log(products.find((product)=>product.unitPrice>5))
//Ilk buldgugu ifade Defter old icin onu getirecek bize.
//Find dizinin elemanini dondurur direk kendisini

//Some ise sundugu sarta uyan 1 tane bile eleman varsa true olarak doner....
console.log(
    products.some(product=>product.unitPrice>10)
)
//Burda tek satir old  icin tek islem old icin return islemini => ile yapiyor zaten....


//Every de de dizi icindeki elemanlarin tamami birden belirtilen sarta uyarsa o zaman true doner yoke false doner
console.log(
    products.every(product=>product.unitPrice>1)
)

