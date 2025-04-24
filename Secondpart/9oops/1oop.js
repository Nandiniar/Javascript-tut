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
    this.username=username //lef wale side variable and right wale username is
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this
}

const userOne=user1("Nandini",9,true)
console.log(userOne)