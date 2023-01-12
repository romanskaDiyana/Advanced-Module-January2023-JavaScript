//05. Time to Walk
//Write a function that calculates how long it takes a student to get to university. 

function walk(steps, steplenght, speed) {
    let distanceInMeters = steps * steplenght;
    let speedInMeters = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500)* 60;
    let time = distanceInMeters / speedInMeters + rest;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
}

walk(4000, 0.60, 5);
//output:
//00:32:48