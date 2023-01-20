//01. Even Position Element
//Write a function that finds the elements at even positions in an array.

function evenPosition(array) {
    const evenArray = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 == 0) {
            evenArray.push(array[index]);
        }
    }

    console.log(evenArray.join(" "));
}

evenPosition(['20', '30', '40', '50', '60']);
//output:
//20 40 60