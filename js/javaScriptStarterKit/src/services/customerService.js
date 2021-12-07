import { customers } from "../data/customers.js";


export default class CustomerService{
    constructor(validator,loggerService){
       this.validator=validator; 
       this.customers=customers;
       this.loggerService=loggerService;
       this.errors=[];
       this.messages=new Messages();
    }
    getCustomerList(){
        console.log(this.customers);
    }

    // addCustomer(customer){

    //         this.validator.checkModelValidityForErrors(customer);
    //          this.customers.push(customer);
    //          this.loggerService.log(customer);
    // }

    // getCustomerById(id){
    //    console.log(this.customers.find(c=>c.id===id));
    // }

    addCustomer(customer) {
      let result = this.customerValidatorService.validate(customer);
  
      if (result.length > 0) {
        this.loggerService.log(new ErrorDataResult(customer, result));
      } else {
        this.customers.push(customer);
        this.loggerService.log(new SuccessDataResult(customer, this.messages.add(customer.firstName)));
      }
    }

    delete(id) {
      this.customers = this.customers.filter((customer) => customer.id !== id);
      this.loggerService.log(new SuccessDataResult(id, this.messages.delete(id)));
    }
  
    getAll() {
      return new SuccessDataResult(this.customers);
    }

  
    getById(id) {
      return new SuccessDataResult(this.customers.find(customer => customer.id === id));
    }


    update(newCustomer) {
      let result = this.customerValidatorService.validate(customer);
  
      if (result.length > 0) {
        this.loggerService.log(new ErrorDataResult(newCustomer, result));
      } else {
        let oldCustomerIndex = this.customers.findIndex((customer) => customer.id === newCustomer.id);
        this.customer[oldCustomerIndex] = newCustomer;
        this.loggerService.log(new SuccessDataResult(newCustomer, this.messages.update(newCustomer.firstName)));
      }
    }
    
  getCustomerSorted(){
   console.log (this.customers.sort((customer1,customer2)=>{
     let firstName="firstName";
        if(customer1[firstName] < customer2[firstName]){
          return -1;//kazanan i ver demek
        }else if(customer1.firstName === customer2.firstName){
          return 0;//degistirme
        }else {
          return 1;//kaybedeni ver demek
        }
    }));
  }
}