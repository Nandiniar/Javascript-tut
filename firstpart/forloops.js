// for of loops
// array ke andar string aise dalte hai ["","",""]
// array ke andar objects aise dalte hai [{},{}]

const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i);
}
const greetings="Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)

}
// MAPS 
const map=new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);
for(const key of map){
    console.log(key);
}

// if we want to print keys and values separate
for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':"Spiderman"
}
/*for(const [key,value] of myObject){
    console.log(key,':-',value);
} */ // this will not work for object iteration
