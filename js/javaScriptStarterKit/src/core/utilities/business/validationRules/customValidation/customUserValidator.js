import Messages from "../../../constants/messages.js"
import CustomValidator from "./customValidator.js";

export default class CustomUserValidator extends CustomValidator{
  constructor(){
    super();
    this.messages = new Messages();
  }

  validate(user) {
    let errors = [];

    errors.push(this.checkIdField(user.id));
    errors.push(this.checkFirstNameField(user.firstName));
    errors.push(this.checkLastNameField(user.lastName));
    errors.push(this.checkCityField(user.city));
    errors.push(this.checkAgeField(user.age));

    return errors.filter(error => error !== undefined);
  }

  checkIdField(userId){
    if (!userId || isNaN(userId)) {
      return this.messages.checkField("Id");
    }
  }

  checkFirstNameField(firstName){
    if (!firstName || firstName.length < 3 || firstName.toLowerCase().match(/[^a-zA-ZİığüşöçĞÜŞÖÇİ]/)) {
      return this.messages.checkField("Ad");
    }
  }

  checkLastNameField(lastName){
    if (!lastName || lastName.length < 3 || lastName.match(/[^a-zA-ZİığüşöçĞÜŞÖÇİ]/)) {
      return this.messages.checkField("Soyad");
    }
  }

  checkCityField(city){
    if (!city || city.length < 3 || city.match(/[^a-zA-Z]/)) {
      return this.messages.checkField("Şehir");
    }
  }

  checkAgeField(age){
    if (!age || isNaN(age) || age < 1 || age > 120) {
      return this.messages.checkField("Yaş");
    }
  }
}