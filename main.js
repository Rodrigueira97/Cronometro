let seconds = 00
let minutes = 00
let hours = 00
let appendSeconds = document.getElementById('seconds')
let interval 

function twoDigit(digit){
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }

}


function Start(){

    clearInterval(interval)
    interval = setInterval(watch, 1000)
}

function Stop(){
    
    clearInterval(interval)

}

function Reset(){
    clearInterval(interval)
    minutes = 00
    seconds = 00

    appendSeconds.innerText = `00:00:00`
    
}


function watch(){
    seconds++
    
    
    if(seconds == 60){
        minutes++
        seconds = 0
        if(minutes == 60){
            hours++
            minutes = 0
        }
    }
    appendSeconds.innerText = `${twoDigit(hours)}:${twoDigit(minutes)}:${twoDigit(seconds)}`
    
}

