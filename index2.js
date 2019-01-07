(function countDown(time){
    console.log(time);
    let count = setTimeout(function reduceTimer(){
        if(time >= 2){
            time -= 1;
            console.log(time);
            setTimeout(function loop(){reduceTimer()},1000);
        } else {
            console.log("Lift-off!");
            clearTimeout(count);
        }
    }, 1000);
})(10);