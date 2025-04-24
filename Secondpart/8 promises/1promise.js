//promise is an object jo represnt karta hai completeion or rejection of a program
// promises future me jake complete hota hai

// const promiseOne=new Promise()

// fetch aise use hota hai 
// fetch("'https://something.com").then().catch().finally()
// isme koi bhi response aayegaa wo then me ayegaa , koi error wo catch me and finaaly me hai toh wo chiz exceute hoge
//no matter catch me gaye ya try me


//promises aapne aap me object hai -promises is an object represnting the eventual completion or failure of an
// asynchronous operation

const promiseOne=new Promise(function(resolve, reject){
    // do an async task like db calls, crypotography,network
    setTimeout(function(){
console.log("Async task is complete")
resolve();
    },1000)
})        // iska means hai ke promise ya toh pooora hogaa means resolve


// and reject means yaha toh yeh reject hoga promise

//second promise
promiseOne.then(function(){
    console.log("Promises consumed")
})
new Promise(function(resolve,reject){
    setTimeout(function(){
console.log("Async task 2");
resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})



// third promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"Nandini",email:"nandini@arora.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user)
})

// promisefour

const promisefour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=false
    if(!error){
        resolve({username:"Nandini",password:"123"})
    }
    else{
        reject('ERROR:Something went wrong')
    }
},1000)
})

// const username=promisefour.then((user)=>{
// console.log(user);
// return user.username
// })

// console.log(username)// aise karne se error aajayega

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}) .finally(()=>
    console.log("THe promise is  either resolved or rejected")

)// this is known as chaining method



// promise five

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
let error=false
if(!error){
    resolve({username:"javascript",password:"123"})
}
else{
    reject('ERROR:JS went wrons')
}
    },1000)
})

// promise me then, catch ke saath hum async and await bhi use kar sakte uske jagey

async function consumePromisefive(){
    try{
    const  response=await promisefive //promise ek object hai isse aise consume nhi kar sakte const ke saath karna padhega
    console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromisefive()

async function getAlluser(){
    try{
  const response= await fetch('https://jsonplaceholder.typicode.com/users')
 // console.log(response)
 const data= await(response.json()) // yeh bhi response lene me tym leta haii isliye await use karna padhegaa
 console.log(data)
    }
    catch(error){
        console.log("E:",error)
    }
}
getAlluser()


 fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json
 }).then((data)=>{
    console.log(data)
 }).catch((error)=>console.log(error))

//  fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//     return response.json
//  }).then((data)=>{
//     console.log(data)
//  }).catch((error)=>console.log(error))


//fetch is  an exiting feature of node js6
// fetch wale chiz phale excute hogaa fetch ke liye alag he queue banta gai and fetch call stack me phale jate hai
// agar humare network request reject hue 404 aaya hai  toh wo data fulfilment i.e resolve me he aata hai