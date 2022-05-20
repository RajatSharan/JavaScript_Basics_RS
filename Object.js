/***Javascript Objects */

//Object is collection of property

let person = {

firstName:'Tim',
lastName: 'Joe',
age:24,
FullName : function(){

   console.log(this.firstName+this.lastName) 
}
}
console.log(person.FullName())
console.log(person.lastName)

console.log(person['lastName'])

person.firstName= 'toe'

console.log(person.firstName)
person.gender='Male'
console.log(person)
delete person.gender
console.log(person)

/****To check property exist or not */
console.log('gender' in person)

/**Print all the values of javscript object */

for (let key in person)
{

console.log(person[key])


}


