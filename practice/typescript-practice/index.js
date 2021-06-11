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
// object oriented programing
// string, number, boolean, Date
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.sleep = function () {
        console.log(this.name + " is now sleeping...");
    };
    Human.prototype.work = function () { };
    Human.prototype.eat = function () { };
    Human.prototype.read = function () { };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Human));
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var likhon = new Student();
var likhonsAddress = new Address();
likhonsAddress.house = 8;
likhonsAddress.road = 10;
likhonsAddress.policeStation = 'Adabor';
likhonsAddress.district = 'Dhaka';
likhonsAddress.division = 'Dhaka';
likhonsAddress.country = 'Bangladesh';
likhon.name = 'Mehedi Hasan Likhon';
likhon.age = 20;
likhon.address = likhonsAddress;
likhon.isMad = true;
likhon["class"] = 'Class 9';
console.log(likhon);
