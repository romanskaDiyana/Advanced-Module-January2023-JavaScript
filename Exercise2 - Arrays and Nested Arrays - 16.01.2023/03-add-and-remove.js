//03. Add and Remove Elements  
//Write a JS function that adds and removes numbers to/from an array. 

function solve(arr) {
    let initial = 1;
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];
        if (command === 'add') {
            newArr.push(initial++);

        } else if (command === 'remove') {
            newArr.pop(initial++);
        }
    }

    if (!newArr.length) {
        console.log('Empty')
    } else {
        console.log(newArr.join('\n'))
    }
}

solve(['add', 'add', 'add', 'add']);

//output:
//1
//2
//3
//4
