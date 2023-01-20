//01. Smallest Two Numbers
//Write a function that prints the two smallest elements from an array of numbers.

function smallest(array) {
    array.sort(function (a, b) { return a - b });

    let smallestTwo = array.slice(0, 2);

    console.log(smallestTwo.join(' '));
}

smallest([30, 15, 50, 5]);
//output:
//5 15