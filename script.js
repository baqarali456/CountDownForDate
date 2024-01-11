
const comingTime = document.getElementById('soontime');
let date = new Date();
 date.setHours(22);
 date.setMinutes(55);
 date.setSeconds(0);
// console.log(cominghour);
comingTime.innerHTML = `${date}`;




setInterval(()=>{

    let cominghour = date.getHours()
    let comingmin = date.getMinutes()
    let comingsec = date.getSeconds()

// console.log(date);
let currentTime = new Date();
 
 
 let currentHour = currentTime.getHours(); 
 let currentmin = currentTime.getMinutes(); 
 let currentsec = currentTime.getSeconds(); 

//  console.log(currentHour);
 


 
 

 let remaingHour = cominghour - currentHour;
 

 

 let remaingmin = comingmin - currentmin
 let remaingsec = Math.abs(comingsec - currentsec);
 const CountDown = document.getElementById('CountDown');
 CountDown.innerHTML = `Coming Soon in ${remaingHour} ${remaingmin} ${remaingsec}`
 
 
},1000)
