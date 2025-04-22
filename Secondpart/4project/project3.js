//document.getElementById('clock') in place of queryselector we can also write getElementById
const clock=document.querySelector('#clock')

// setinterval means ke usse agar bata de ke itne minutes baad change kara hai toh wo value ko utne he tym baad change karta rahegaa
setInterval(function(){
    let date=new Date()
//console.log(date.toLocaleTimeString())
clock.innerHTML=date.toLocaleTimeString()
},1000) // 1000 means 1 sec, 2000 means 2 sec