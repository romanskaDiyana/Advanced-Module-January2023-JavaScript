//02. Print Every N-th Element from an Array 
//The input comes as two parameters – an array of strings and a number.

function solve(array, step) {

    return array.filter((_, index) => index % step == 0);

    // const newArray = [];

    //for (let i = 0; i < array.length; i += step) {
        //newArray.push(array[i]);

    //}
    
    //return newArray;
}


solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
//output:
//['5', '31', '20']


