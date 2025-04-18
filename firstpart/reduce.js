const myNums=[1,2,3,4];

const myTotal=myNums.reduce(function (acc,curval){
    console.log(`acc: ${acc} and curval:${curval}`)
    return acc+curval
},0) // isme phale initialvalue of acc =0 ke equal hogee jo ke , ke baad likhe hao
console.log(myTotal);

// this with the help of arrow function
const myT=myNums.reduce((acc,curr) => acc+curr,0)
console.log(myT);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },{
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
];

const totalP=shoppingCart.reduce((acc,curr)=>acc+curr.price,0);
console.log(totalP);