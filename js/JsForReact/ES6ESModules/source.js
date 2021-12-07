import {name as firstName,kullanici as user,merhaba as hello} from './script'

//gelen isimlerimizi ayni isimlerle import etmeliyiz ama o isimleri kullanirken ismini degistirerek kullanmak istersek yukardaki gibi yapariz ya da direk import kendi isimleri ile kullaniriiz hic as falan yazmadan

//Default olarak tanimlanip da export edilen ifadeleri artik fonks, degisken,obje,dizi veya class her ne ise bunlari import ederken hic obje suslu parantezine almadan import ederiz

import topla from './script';

console.log(topla(4,5));//seklinde de kullanabiliriz...

//Bize default ve normal iki export edilmis degisken veya export edilmis  function i import edelim
     
import { default as myUser, showNUmbers} from './script'


//Immediat rexport aninda yeniden disa aktarma
//Ice aktarilan bir modul ayni satirda hic bekletmeden disa aktarilabilir
//Hem default hem de named export varsa bunlari aninda ayni anda disa aktaramayiz 2 satirda aktamaliyiz

export { default as myUser} from './script';

export {showNUmbers, user} from './script';
//Bu sekide default olmayanlari aktarabiliriz bunun yerine tek bir islemle de default olmayanlar haricndekileri aktarabiliriz...
export * from './source';

