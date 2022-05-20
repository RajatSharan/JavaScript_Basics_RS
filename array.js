// // var marks = Array(6)
// // var marks = new Array(20,40,60,35,100)

// var marks =[20,40,60,35,100]


// // /** To break array in sub array */
// // var submarks = marks.slice(2,4)
// // console.log(submarks)

// // console.log(marks[2])
// // marks[3]=14
// // console.log(marks)
// // console.log(marks.length)
// // marks.push(64)//Add element on last
// // console.log(marks)
// // marks.pop()//Delete the element from end
// // console.log(marks)
// // marks.unshift(98)
// // console.log(marks)
// // /** TO find out the index value */

// // console.log(marks.indexOf(100))

// // /***To Find out the value exist in the array or not */
// // console.log(marks.includes(120))

// // /****To find out the lenght and number of values in array */

// // for(let i=0 ;i<marks.length;i++){

// // console.log(marks[i])
// // }

// /*** Sum up all the elements into the array */

// var sum=0
// for(let i=0 ;i<marks.length;i++){

//     sum = sum + marks[i]
    
//     }

//     console.log(sum)

/** Reduce code complexity*/

// let total=marks.reduce((sum,mark)=>sum+mark,0)
// console.log(total)

// /** Print  the elements which are even number */

// /**Create a new array with even numbers of course */

var course = [12,13,17,18,24]

// var evencourse=[]
// for(let i=0;i<course.length;i++)
// {

//     if(course[i] %2 == 0 ){

//        evencourse.push(course[i])

//     }
// }
//     console.log(evencourse)



 let newfilter =course.filter(course=>course%2==0)

console.log(newfilter)


/***Map Function */

/** Create new array with even number of course with multiple each value by 3 */

let mappedArray=newfilter.map(course=>course*3)
console.log(mappedArray)


let newvalue=mappedArray.reduce((sum,val)=>sum+val,0)

console.log(newvalue)


/** Sorting in array */

let fruits = ['Apple','Banana','Graps','Cheery']

console.log(fruits.sort())

var scores1=[12,13,14,16,18]
console.log(scores1.sort())

console.log(scores1.sort((a,b)=>a-b))
console.log(scores1.reverse((a,b)=>b-a))