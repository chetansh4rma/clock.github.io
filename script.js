let a;
let date;
let time;
setInterval(()=>{
    a= new Date();
    time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    document.getElementById('time').innerHTML=time ;

},1000);
setInterval(()=>{
    a= new Date();
    date=a.toLocaleDateString();
    document.getElementById('date').innerHTML=date ;
});
