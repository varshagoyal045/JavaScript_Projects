const endate = "24 September 2023 7:30 PM";

document.getElementById('enddate').innerText = endate;

const inputs = document.querySelectorAll("input");
console.log(inputs.length);

let date = new Date();

var x = setInterval(function clock(){
    const end = new Date(endate);
    const now = new Date();
    const diff = end-now;

    const days = Math.floor(diff/1000/60/60/24);

    const hours = Math.floor(diff%(1000*60*60*24)/(1000*60*60));

    const min = Math.floor(diff%(1000*60*60)/(1000*60));
    
    const sec = Math.floor(diff%(1000*60)/1000);
    
    
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = min;
    inputs[3].value = sec;

    console.log(diff +" "+  sec  +" "+  min  +" "+  hours  +" "+  days);
},1000);


