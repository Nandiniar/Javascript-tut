let myName="Nandini    "
console.log(myName.length)
console.log(myName.trim().length) // aise karne se  space ke baad wale size aayegee

let myHeros=["N","A"]

let heroP={
N:"Nandini",
A:"Arora",
getPower:function(){
    console.log(`Spidy power is ${this.A}`)
}
}
Object.prototype.m=function(){
    console.log(`m is present in all objects`)
}
heroP.m() // m prototype object ka bana hai toh wo kise bhi object ke sath ho sakta ha

 Array.prototype.hii=function(){  
    console.log(`Nandini says hello`)
 }
// heroP.hii()
myHeros.hii() // ab yeh hii prototype jo banaya wp kise bhi array ke saath ho sakta kyuki hi humne array wala
// prototype banaya hai




// ✅ Part 1: String trimming
// js
// Copy
// Edit
// let myName = "Nandini    "
// console.log(myName.length) // Output: 11
// console.log(myName.trim().length) // Output: 7
// 🔍 What's happening?
// "Nandini " has 7 characters (N, a, n, d, i, n, i) and 4 spaces at the end.

// .length counts everything, even spaces. So it returns 11.

// .trim() removes spaces from the beginning and end. So "Nandini ".trim() becomes "Nandini".

// Then .length gives 7 — the length without trailing spaces.

// ✅ Part 2: Arrays and Objects
// js
// Copy
// Edit
// let myHeros = ["N", "A"]
// This is just a normal array with 2 items: "N" and "A".

// js
// Copy
// Edit
// let heroP = {
//   N: "Nandini",
//   A: "Arora",
//   getPower: function () {
//     console.log(`Spidy power is ${this.A}`)
//   }
// }
// This is an object named heroP with:

// Two properties:

// N: "Nandini"

// A: "Arora"

// One method:

// getPower() which uses this.A → means it will access the A value of the current object → which is "Arora".

// If you run heroP.getPower(), you'll get:

// csharp
// Copy
// Edit
// Spidy power is Arora
// ✅ Part 3: Prototypes – Object.prototype
// js
// Copy
// Edit
// Object.prototype.m = function () {
//   console.log(`m is present in all objects`)
// }
// 🔍 What's happening?
// In JavaScript, everything is based on objects. Even arrays and functions are objects.

// Object.prototype is like the parent of all objects.

// When you add a method to Object.prototype, ALL objects can access it, even if it's not directly defined in them.

// So now, any object can use .m():

// js
// Copy
// Edit
// heroP.m() // Output: m is present in all objects
// Because heroP is an object, and m() is now in its prototype chain.

// ❌ Part 4: What if we do this?
// js
// Copy
// Edit
// // Array.prototype.hii = function () {
// //     console.log(`Nandini says hello`)
// // }
// // heroP.hii()
// Let’s break this down:

// You are adding a method .hii() to Array.prototype, which means: all arrays can use .hii().

// But heroP is not an array. It’s just an object.

// So, this line:

// js
// Copy
// Edit
// heroP.hii()
// will give you an error:

// vbnet
// Copy
// Edit
// TypeError: heroP.hii is not a function
// Because .hii() was added only to arrays, not to regular objects.

// ✅ Summary in Easy Words:

// Concept	Explanation
// trim()	Removes spaces from start and end of a string.
// length	Counts all characters (including spaces).
// this.A	Refers to property A in the current object.
// Object.prototype.m()	Adds a method to all objects (universal).
// Array.prototype.hii()	Adds a method only to arrays.
// heroP.hii()	Fails, because heroP is not an array.


// inheritance

const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport


}
Teacher.__proto__=User
//prototype inheritance means ke kaise hum kise aur ke object ko inherit kar sakte hai

// modern syntax of how to inherit prototype
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Chaiaurcode       "
String.prototype.trueLength=function(){
    console.log(`${this}`)
  //  console.log(`${this.name}`)
  console.log(`True ${this.trim().length}`)
}
anotherUsername.trueLength(); // iss string me humne trueLength wala prototype use kiya hai
"Nandini".trueLength();