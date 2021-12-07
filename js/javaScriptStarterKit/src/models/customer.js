<<<<<<< HEAD
import User from "./user.js";

export default class Customer extends User{
        constructor(id,firstName,lastName,city,customer,creditCardNumber){
            super(id,firstName,lastName,city,customer);//super class olan yani base class olan User in constructor ini calistir diyor burda ki bu C# daki :base() ile ayni seydir bu...dikkkat edelim...
            this.creditCardNumber=creditCardNumber;
        }

}  

=======
import User from "./user.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city,age, creditCardNumber) {
        super(id, firstName, lastName, city,age)
        this.creditCardNumber = creditCardNumber
    }
}
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
