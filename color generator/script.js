const getColor = ()=>{
    let color = "#";
    let digits = "0123456789ABCDEF";
    for(let i=0;i<6;i++){
        let randomDigit = Math.floor(Math.random()*16);

        color += digits[randomDigit];
    }

    document.getElementById("colorcode").innerText = color;
    document.querySelector('.main').style.backgroundColor = color; 
}

document.getElementById("btn").addEventListener('click',getColor);
