//06. Road Radar
//Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. 

function roadRadar(speed, area) {
    const areaLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };

    const overSpeedLimit = speed - areaLimit[area];

    if (overSpeedLimit <= 0) console.log(`Driving ${speed} km/h in a ${areaLimit[area]} zone`);
    else if (overSpeedLimit > 0) {
        let status = '';
        if (overSpeedLimit <= 20) status = 'speeding';
        else if (overSpeedLimit > 20 && overSpeedLimit <= 40) status = 'excessive speeding';
        else status = 'reckless driving';

        console.log(`The speed is ${overSpeedLimit} km/h faster than the allowed speed of ${areaLimit[area]} - ${status}`)
    }
}

roadRadar(30, 'city');
//output:
//Driving 40 km/h in a 50 zone