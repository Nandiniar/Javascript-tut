function multiplyby5(num){
    return num*5;
}
// function is also an object

//multipleBy5.power=2
console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function createUser(username,score){
    this.username=username;
    this.score=score;

}

createUser.prototype.increament=function(){
    this.score++  // isme this lagana important hai iska means hai ke jisne bhi scrore wale entry kare hai uske value badhege isslye this laga haino
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}
const a=new createUser("Nandi",21)
const b=new createUser("KK",2222)
a.printMe()
a.increament()
a.printMe()


/* The new keyword intiate the creation of a new javascript object
javascript new keyword ke help se constuctor function dete hai*/