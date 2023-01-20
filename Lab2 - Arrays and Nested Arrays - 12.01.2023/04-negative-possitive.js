//04. Negative / Positive Numbers
//Write a JS function that processes the elements in an array one by one and produces a new array.

function number(array){
const resultArray = [];

for (const item of array) {
    if (item < 0) {
        resultArray.unshift(item);
    }
    else{
        resultArray.push(item);
    }
}

for (const element of resultArray) {
    console.log(element)
}

}

number([7, -2, 8, 9]);
//output:
//-2
//7
//8
//9

