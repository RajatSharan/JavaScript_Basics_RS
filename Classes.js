module.exports=class Person {

age=25 //Define Property
get location (){ //Define Property

return "Canada"

}
constructor(firstName,lastName){ //firstName,lastName is instace variable


this.firstName=firstName
this.lastName=lastName

}
//Method
fullName(){

   console.log(this.firstName+this.lastName) 
}

}

// let person =new Person('tim','Los')
// let person1 =new Person('top','nog')
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())
/**Constructor is a method which execute by default when you create object of the class */

