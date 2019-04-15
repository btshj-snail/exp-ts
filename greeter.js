/*
 * @Author: snail
 * @Date: 2019-04-15 16:49:57
 * @Last Modified by: snail
 * @Last Modified time: 2019-04-15 17:09:29
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.fullName;
}
var user = new Student("Jack", "d", "Tomues");
document.body.innerHTML = greeter(user);
