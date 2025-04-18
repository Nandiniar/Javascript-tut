const coding=["js","ruby","java","python","cpp"]
coding.forEach(function (val){
    console.log(val);
})


 /// using foreach with the help of arrow function

 coding.forEach((item)=>{
    console.log(item);
 })
 // aise bhi foreach ko call karte tym hum forEach me function bhi pass kar sake hai

 function printMe(item){
    console.log(item);
 }

 coding.forEach(printMe);

 coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
 })



 // array ke andar objects hai

 const myCoding=[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
 ]

 myCoding.forEach((item)=>{
console.log(item.languageName);
console.log(item.languageFileName);
 })