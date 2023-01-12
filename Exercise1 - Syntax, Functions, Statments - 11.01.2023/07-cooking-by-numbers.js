//07. Cooking By Numbers
//Write a program that receives 6 parameters which are a number and a list of five operations. 

function cooking(...array) {
    let number = Number(array.shift())
    const operations = {
        chop: x => number = x / 2,
        dice: x => number = Math.sqrt(x),
        spice: x => number = x + 1,
        bake: x => number = x * 3,
        fillet: x => number = x - x * 0.2,
    }

    array.forEach(x => console.log(operations[x](number)))
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//output:
//16
// 8
// 4
// 2
// 1