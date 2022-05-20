const Person =require("./Classes")
class Pet extends Person{


constructor(firstName,lastName){

    //Call paresnt class constructor

    super(firstName,lastName)
}

get location(){

return 'bluecross'

}

}

let pet= new Pet('sam','los')
pet.fullName()
console.log(pet.location)
