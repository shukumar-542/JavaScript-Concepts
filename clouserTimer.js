function createTimer (){

    let second = 0;
    let intervalId = null;

    return{
        start : ()=>{
            if(intervalId !== null) return;
            intervalId = setInterval(()=>{
                second++
            } ,1000)
        },
        stop : ()=>{
            clearInterval(intervalId);
            intervalId = null
        },
        getTime : ()=>{
            return second
        },
        reset : ()=>{
            clearInterval(intervalId);
            intervalId = null
            second = 0
        }
    }


}

const timer  = createTimer();
timer.start()
setTimeout(() => {
    timer.stop();
    console.log("Final Time:", timer.getTime());
    timer.reset()
    console.log("Final Time:", timer.getTime());
  }, 3000);

