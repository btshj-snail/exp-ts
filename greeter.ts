/*
 * @Author: snail 
 * @Date: 2019-04-15 16:49:57 
 * @Last Modified by: snail
 * @Last Modified time: 2019-04-15 17:09:29
 */



class Student {
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + " " + middleInitial + " "+lastName;
    }

}

interface Person{
    firstName:String,
    lastName:String,
    fullName:String
}
function greeter(person:Person){
    return "hello, "+person.fullName;
}
let user = new Student("Jack","d","Tomues")

document.body.innerHTML = greeter(user);