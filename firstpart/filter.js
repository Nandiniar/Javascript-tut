// filter means ke jo true hoga wo he pass hoga


const coding=["js","ruby","java","python","cpp"]
// forEach kabhi bhi kise value ko return nhi karwata hai

const myNums=[1,2,3,4,5,6,7,8,9]
// filter bhi aapne andar callback he leta hai


const newNums=myNums.filter((num)=>num>4)
console.log(newNums);


// iss wale case me console.log me kuch bhi nhi aayegaa kyuki curly bracket start karne se scope start ho jata hai tph uss wale case me return keyword ka use karna he padhega
const newa=myNums.filter((num)=>{
    num>4
})
console.log(newa);

// ab print hoga
const value=myNums.filter((nums)=>{
    return nums>4
})
console.log(value);

// forreach me kaise use hoga yeh

const newNum=[]
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num);
    }
})

console.log(newNum);

const a=myNums.forEach((num)=>num>4);
console.log(a); // aise karne se undefined he aayega


const Books=[
    { title:'One',genre:'Non-Fiction',edition:2010},
    { title:'Two',genre:'History',edition:2012},
    { title:'Three',genre:'Science',edition:2013},
    { title:'Four',genre:'History',edition:2019},

];

const userBooks=Books.filter((nums)=>nums.genre==='History')

console.log(userBooks)


