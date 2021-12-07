//Template Literals...

let userName="adem";
const   DOMAIN="ademerbas.com";
let email=userName +"@"+ DOMAIN;

console.log(`Merhaba ${userName}, sitemize hosgeldin, mail adresin: ${DOMAIN}

mailadresinin uzunlugu: ${email.length}
borcunuz=${(2+3)*10} TL
gunun saat bilgisi: ${new Date().getHours}
kisa isminiz: ${userName[0]}.
`)
//Templeate literals ile biz bir stringimizin uzunlugunu da alabilyoruz
//literals larin icinde biz fonksiyon kullanbiliriz,degisken yazabiliriz,hesaplama yapabiliriz,short if thernary yapabiliriz...bunlar onemli.....
//Değişkenlerimizi tanımlayalım
const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21


const kisi = `
<p><b>${ad}</b></p>
<p>${soyad}</p>
<p>${gozRengi}</p>
<p>${yas}</p>
`;

document.body.innerHTML = kisi;

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =
  `
        <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
    </tr>
   </tbody>
  </table>

  `
  document.body.innerHTML = bookTable