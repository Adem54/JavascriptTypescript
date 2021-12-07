import { MongoLogger } from "../core/crossCuttingConcerns/logging/mongoLogger.js";
import Validation from "../core/crossCuttingConcerns/validation/validation.js";
import CustomerService from "../services/customerService.js";

let mongoLogger=new MongoLogger();

let validator=new Validation();
let customerService=new CustomerService(validator,mongoLogger);
customerService.getCustomerList();

let customer4={id:4,
    firstName:"Kaya",
    lastName:"Johansen",
 
    age:45,
    creditCardNumber:485375
    }


    customerService.addCustomer(customer4);
    customerService.getCustomerList();
    customerService.getCustomerById(4);
   

console.log("error: ", validator.errors)

customerService.getCustomerSorted();