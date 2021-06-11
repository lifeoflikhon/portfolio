// object oriented programing
// string, number, boolean, Date
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.sleep = function () { };
    Human.prototype.work = function () { };
    Human.prototype.eat = function () { };
    Human.prototype.read = function () { };
    return Human;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var likhon = new Human();
console.log(likhon);
