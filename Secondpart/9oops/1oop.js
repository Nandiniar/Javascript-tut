const user={
username:"hitesh",
loginCount:8,
signedIn:true,

getUserDetails:function(){
   // console.log("Got user details from database");
   // console.log(`Username:${username}`)  // agar hum aise likhenge toh error ayaega like ke pata nhi chalega ke kaun se wala username issliye iske saath this lagana zarori hai
    console.log(`Username:${this.username}`) // aise this lagane se chal jayegaa
    console.log(this) // isse poore usse wale object ke details milege
}
} // yeh object literal hai and yeh he basic unit hai

console.log(user.username)
console.log(user.getUserDetails())
// this is used for abhi ka context jo abhi ho rha ho

console.log(this)

//const promiseOne=new Promise() // here new is a constructor function  means ke yeh allow karta hai ke ek he object se
// multiple instance bana sako


function user1(username,loginCount,isLoggedIn){
    this.username=username //left wale side variable and right wale username is
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // yeh aise likhna important nhi hai  isse bina likhe bhi hota hai
}

const userOne=user1("Nandini",9,true)
console.log(userOne)
const userTwo=user1("Nan",11
,false)// aise karne se userOne ke value override ho jayege and yeh changes user1 ME AAYEGA 
console.log(userOne) 
// iska solution yeh hai ke new laga lo
const usert=new user1("N",90,true)// ab usert me new use kara hai toh ab  user1 me value override nhi hoge
console.log(userOne);
console.log("Userone is"+userOne) 
console.log("Usert is"+usert)

// jaise bhi new use karte hai toh empty object create hota hai jisse instance  bola jata hai
// 1 new object create
// 2 constructor funtion create hota hai new keyword ke wjaay se
// 3 this keyword hai jo argument likhe hai wo usme inject ho jate hai

console.log(userOne.constructor)
// constructor property khud ke bare me he reference hote hai




// javascript ka by default prototypic behaviour hai arrow ke andar this prototpic behaviour ke wajay se aata hai
// in javascript, array is object
// object  ke pass koi parent nhi hota usme jo bhi behaviour aata hai wo khud se aata hai
// Array->object->null
// String->object->null