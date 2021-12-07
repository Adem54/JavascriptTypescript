//Try-catch
//Biz try-catch i yazdigimiz bazi uygulamalarda eger kodumuz herhangi biryere takilirsa ornegin biz dizi islemi yaptiriyoruz ama kod calisirken o an icin gelen deger dizi olmadiigi icin ornegin biz de diziyi foreach ile kullanirsak iste orda islemimiz takilacaktir ama ben istyoruzm ki takilamsin, foreach i calistiramasa bile sonrasindaki kodlarini calistirsin beklemesin bana da bir hata mesaji versin hata olma durumunda....iste bu durumlarda try.catch kullanilablir

let products;

//Burda hata veriyor ama biz istiyoruz ki hata verse bile yoluna devam etsin,ya da soyle dusunelim biz biryerden veri cekiuyoruz ve o verinin gelecegi uzerine plan yapiyoruz ama o bilginin gelmeme ihtimali de var, ama gelmeme ihtimali beklenmedik birsey ve sistmeimiz dogru calismamis olacak ama bizim bu durumu da yontememmiz lazm, dogru mesaj, dogru birsekilde hata yonetimi

//Yazilimda eger bir yerde hata oluyor ve biz bu hatayi yonetmezsek kodumuz orda tikanir kalir ve daha asagi inip den neler olmus goremeyiz....

let info="kodluyoruz";
console.log(info);

try {
    //Buraya yazdigim kodlari dene eger calistirirsan devam et catche girmeden gec git ama burdaki islemin hata olursa catch ile onu yakala ve bana haber ver o hatayi... 
    products.forEach(item =>console.log(item));
} catch (error) {
    console.log("error: ", error);
    products=[1,2,4]
    products.forEach(item =>console.log(item));
}

//Ornegin biz serverdan apiden veri cekiyuoruz ama veri gelmezse diyoruz hatayii yakala bana haber ver ve default olarak da islemine benim sana verdigim dizi ile devam et demis oluyoruz...

