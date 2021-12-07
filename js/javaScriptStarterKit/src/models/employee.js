<<<<<<< HEAD
import User from "./user";

export default class Employee extends User{
    constructor(id,firstName,lastName,city,salary){
        super(id,firstName,lastName,city);
        this.salary=salary;
=======
import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city,age, salary) {
        super(id, firstName, lastName, city,age)
        this.salary = salary
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
    }
}