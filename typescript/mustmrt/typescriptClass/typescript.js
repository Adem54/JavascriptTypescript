var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Person = /** @class */ (function () {
        function Person(name, age, phone) {
            this.name = name;
            this.age = age;
            this.phone = phone;
            console.log("Person created!");
        }
        //
        Person.prototype.showInfos = function () {
            console.log("Name: ".concat(this.name, "  Age:").concat(this.age, " Phone: ").concat(this.phone, " "));
        };
        return Person;
    }());
    //Employye ye Person u inherit etmesii istiyoruz'
    //Dikkat edelim..burasi Perosn i miras aliyor ve super class olan Person u calistirdii zaman Person icindeki constructor i calistiriyo illk once ve eger Employee den Person i inherit edersek o zaman super i kullanmak zorundayiz Person a ati ozellik ve methodlari kullanabilmek icin...
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, age, phone, salary) {
            var _this = _super.call(this, name, age, phone) || this;
            _this.salary = salary;
            return _this;
        }
        Employee.prototype.changeDeparment = function () {
            console.log("Departman degistiriliyor");
        };
        Employee.prototype.showInfos = function () {
            console.log("Name: ".concat(this.name, "  Age:").concat(this.age, " Phone: ").concat(this.phone, " Salary: ").concat(this.salary, " "));
        };
        //Ya da biraz daha farkli bir sekilde kullanabiliriz..
        Employee.prototype.showInfosAgain = function () {
            _super.prototype.showInfos.call(this); //super yani base class olan Person u bu sekilde de kullanabiliriz...
            console.log(" Salary:   ".concat(this.salary));
        };
        return Employee;
    }(Person));
    /*
    let person1=new Person("Adem",33,"434343555");
    person1.showInfos();
    console.log(person1.name);
    */
    var employee1 = new Employee("Zehra", 33, "490054555", 4000);
    employee1.showInfos();
    employee1.changeDeparment();
    employee1.showInfosAgain();
}
