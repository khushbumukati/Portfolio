let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
  
dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings:["khushbu Mukati","Coder","Youtuber"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})
    