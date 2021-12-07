console.log("Statik Methodlar!")
//Eger class imizin icinde statik methodlari yazarsak biz obje olusturmasak bile onlari kullanabiliyoruz
class Matematik {
    square(x){
        console.log(x*x);
    }
    static cube(x){
        console.log(x*x*x);
    }
}
//Static olark belirtmezsek o zaman bu sekilde kullanirz...
const math=new Matematik();
console.log(math);
math.square(5);
//static belirtmedigmiz icin direk sinif uzerinden kullanamayz
//Ama biz bazi durumlarda obje olusturmadan da methodlarimizi kullanmak isteyebiliriz ancak bizim obje olusturmadan methodlarimiz kullanabilmek icin static olarak belirtmemiz gerekiyor.Bu yontemk C# ile aynidir
Matematik.cube(4);
//Matematigi biz direk sinif ismi uzerinden kullaniyoruz cunku static olarak belirttik bunu
//Biz javascriptte bazi static yazilmis methodlari kullandik aslinda
//Object.create();//create methodu Object constructor i icinde static yazilmis
//Math.sqrt();//Herhangi bir obje olusturmadan direk kullanyoruz demekki sqrt fonks da static yazilmis bir fonksyondur
