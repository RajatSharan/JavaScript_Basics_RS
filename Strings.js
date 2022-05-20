const Person =require('./Classes') 
let day = 'tuesday '

console.log(day.length)

console.log(day.slice(2,4))

/***** Access character from string */

console.log(day[1])
let splitday=day.split('s')//Array can hold multiple value

console.log(splitday[1].length)
console.log(splitday[1].trim().length)

let date='23'
let nextdate='27'


let startdate= parseInt(nextdate)-parseInt(date)//Convert string into number
console.log(startdate)
startdate.toString()//number to string

/***Concatenate */

let daycheck=day + 'is funday day'
console.log(daycheck)

let val=daycheck.indexOf('day',5)
console.log(val)

//Tuesday is funday 

//To write a program how many time day occourance 
count =0
let value= daycheck.indexOf('day')
while(value !== -1){

    count++

    value= daycheck.indexOf('day', value+1)

}

console.log(count)

let person =new Person("tom","Ros")

console.log(person.fullName())

