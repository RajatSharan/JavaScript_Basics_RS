console.log("Hello World")


//These are comments
/*

*/

let a=8.5
console.log(typeof(a))

var b=2
var b=4
console.log(b)
let required= null // if you store null in any variable then it will store null
console.log(typeof(required))


let test= undefined //if you dont assign to any value then that written undefined datatype.
console.log(typeof(test))


let c=a+b
console.log(c)

//we cannot redeclare variable with let keyword but possible with var
console.log(!required)


{

    let a=5
}


const Name=['rajat','manish']

Name[0]='amit'

console.log(Name[0])

Name.push("Audi");

console.log(Name)
//const cars = ["Saab", "Volvo", "BMW"];

//cars = ["Toyota", "Volvo", "Audi"];

//console.log(cars)

let lenght =16;
let lastname = 'john'

console.log(lenght)


let x = 16 + "Volvo";

console.log(x)

let m = 4; 

function myfunction(p1,p2){


    return p1*p2


}

console.log(myfunction(m,3))


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

let t= toCelsius(77)
console.log(t)



//Objects


const np={name:"los", age: "25" , colour:"Blue" }

console.log(np.name)
console.log(np.age)

//let np ={name:"kn"}

//console.log(np.name)


const person={

    FirstName : "Rajat",
    LastName : "Sharan",
    id: "556",

    FullName : function(){

    return this.FirstName+""+this.LastName

    }


};


//console.log(FullName)


//


let ts= "use strict";
let yr= this;

console.log(yr)


"use strict";
function myFunction() {
  return this;
}


const javascript ="We are the so-called \t Vikings from the north."

console.log(javascript)

console.log(javascript.length)


let r = 25

let y = 25

console.log(typeof(y))

console.log(typeof(r))

console.log(r==y)

console.log(r===y)


//alert(y)


var name = "vinayak";
var age = 35;
let name_object = {
    firstName: "James",
    lastName: "Doe",
};
var truth = true;
let sheets = ["HTML", "CSS", "JS"];
var p = null;


// object
var student = {
    firstName: "James",
    lastName: "Doe",
    age: 40,
    height: 170,

    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

const ageValue = student.age;
console.log(ageValue);

console.log(student.fullName());