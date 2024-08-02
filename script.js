let start = document.getElementById("start")
let heading = document.querySelector("h1")
let stop = document.getElementById('stop')
let main = document.getElementById('main')
console.log(main)

let interval;
let startchanging = function(){
   if(!interval){
    interval = setInterval(function(){
        let x = Math.floor(Math.random()*255);
        let y = Math.floor(Math.random()*255);
        let z = Math.floor(Math.random()*255);
        let randomColor = `rgb(${x},${y},${z})`
        let rColor = `rgb(${z},${x},${y})` 
        main.style.backgroundColor = randomColor;
        heading.style.color = rColor;
    },1000);
   }
}

start.addEventListener("click",startchanging)

let stopchanging = function(){
    clearInterval(interval)
    interval = null;
    main.style.backgroundColor = "white";
    
}
stop.addEventListener("click",stopchanging)



