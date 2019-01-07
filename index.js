(function countDown(time){

    let timer = new Array (time);
    console.log(timer.length);
    let count = setInterval(function reduceTimer(){
        if(timer.length > 1){
            timer.shift();
            console.log(timer.length);
        } else {
            console.log("Lift-off!");
            clearInterval(count);
        }
    },1000);
})(10);