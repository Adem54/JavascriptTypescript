//Setler-Kumeler
//Bir degeri bir kez tasiyor ayni degeri iki kez tasimiyor
//Her turlu tipden degeri buraya ekleyebiliyoruz..
//Eger birsey new leniyorsa kesinlikle constructor dir Set constructor dir bu da
const myset=new Set();
myset.add(100);
myset.add(100);//Herhangi bir hata vermez ama eklemez
console.log(myset);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});
console.log(myset);
// [[Entries]]
// 0: 100
// 1: "Mustafa"
// 2: true
// 3: Array(3)
// 4: Object
// size: 5
//Bu sekilde tek tek  yazmak yerine su sekilde de yapabliriz..
//arraydan set olusturmaya alisiyoruz
const myset2=new Set([10,3.14,"Mustafa"]);
myset2.add("Mustafa");//Mustafa degerini 2.kez eklemekye calistik ama eklemeyecektir hata da vermeyecektir
console.log(myset2);
//Set(3) {10, 3.14, 'Mustafa'}
console.log(myset.size);
console.log(myset2.size);
//Delete Methodu
myset.delete("Mustafa");//Mustafa degerini silmis oluruz..
console.log(myset);
//REFERANS TIP ILE PRIMITIVE TIPLERI KIYASLAMA ACISINDASN GUZEL BIR ORNEK!!!!
//has methodu ile degerin varligini sorgulama..
console.log(myset2.has("Mustafa"));//true
console.log(myset.has([1,2,3]));//false-referans tipler adres sorgular deger degill....
//Peki biz array i nasil sorgulayacagiz iste burda bizim icine verecegimiz dizi ile degerleri ayni olsa bile gidip de myset icindeki dizi degerini bulamaz cunku has methodu deger karsilastirmasi yapiyor ama diziler referans tiplerdir referans yani adres tutarlar, degerlere bakmazlar ondann dolayi da nasil yapacagizzz?
let numbers=[4,5,6];
myset.add(numbers);
console.log(myset);
console.log(myset.has(numbers));//true-Burda direk ayni adresteki ayni eleman sorgulandigi icin sorun yasamadi bulma ile ilglii
//foreach ile myset uzerinde gezinelim
myset.forEach(function(value){
    console.log(value);
})
//for..of dongusu ile de dondurebiliriz
for(let value of myset){
    console.log(value);
}
//Set lerden array olusturma!
const array=Array.from(myset);
console.log(array);
// [100, true, Array(3), {…}, Array(3)]
// 0: 100
// 1: true
// 2: (3) [1, 2, 3]
// 3: {a: 1, b: 2}
// 4: (3) [4, 5, 6]
// length: 5