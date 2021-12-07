//Object ve Array desctructing

//Objenin icinde userName bilgisi var ve objenin icinden degilde direk erismek istiyorum nasil yapariz

let settings={
    userName:"loremIpsum",
    password:"BadPassword",
    isActive:true,
    ip:"128.0.0.1",
    serverName:"kodluyoruz.com"
}

//Obje icindeki bilgilerin tek seferde cikarilmasi!

//1-Simdi biz normalde obje icindeki properti valu elerimize ulasiyoruz farkli farkli sekillderde ancak biz ihtiyacimi olan yerlerde dogrudan objemizin icindeki elemanlari kullanada biliriz destruction ile

//OBJECT DESTRUCTIONG ILE OBJE PROPERTY VALUELERINI DIREK DEGISKEN ICINE ALABILMEK!!!

let {userName:user,password,isActive,ip:ServerIp,surverName}=settings;
console.log(user);
console.log(ServerIp);
console.log(password);
console.log(isActive);
console.log(password);

//Peki destructing ile biz bir obje icindeki propertiesleri objenin porperties isimlerinden farkli bir isimde degisken icinde tutmak istersek de tutabiliriz user ve ServerIp de oldugu gibi...


//Bazi bilgileri alip bazilarini da baska bir degiskene atalim

let {
    userName:userName2,password:password2,...newSetting
}=settings;
console.log(userName2,password2)
console.log(newSetting);

//Objelerde kopyalama yapabilmek
let settings2=settings;
settings2.userName="Adem";
console.log(settings2);
console.log(settings);
//Ama biz settings2 de herhangi bir value degistirdigimiz zaman bu settings e yansimasin benim orjinal objem hic degismesin isiyorum.....Obje kopyalama islemini de destruction
let {...settings3}=settings;
settings3.userName="zehra";
console.log(settings3);//Sadece bunda degisiklik oldu ve settings e yansimadi degisiklik
console.log(settings);//Bu degismedi muhafaza edildi

let score=[100,200,300,400];

let[score1,score2, ...otherScore]=score;
console.log(score1);//100
console.log(score2);//200
console.log(otherScore);//[300,400]

let [...scoreCopy]=score;
scoreCopy[0]=50;
console.log(scoreCopy);//Sadece bu degisti
console.log(score);//orjinal dizim degismedi




