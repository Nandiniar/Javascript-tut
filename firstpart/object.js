const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}
// object ko iterate karne ke liye for in loop ka use hoga

for(const key in myObject){
    console.log(key);
} // for only keys

for(const key in myObject){
    console.log(myObject[key]);
} // for finding the value

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


// array
const programming=["js","rb","py","javaa","C++"]
for (const key in programming){
    console.log(programming[key]);
}
const map=new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
for(const key in map){
    console.log(key);
} // yeh aise map wale case me possible nhi hai
