//13. Spiral Matrix
//Write a JS function that generates a Spirally-filled matrix with numbers, with given dimensions.

function solve(a, b) {
    
    let matrix = new Array(b).fill(new Array(a).fill([]));
    matrix = matrix.map(x => x.map(y => ""));
    let [startRow, endRow, startClmn, endClmn, counter] = [0, b - 1, 0, a - 1, 0];

    while (startClmn <= endClmn && startRow <= endRow) {
        for (let i = startClmn; i <= endClmn; i++) {
            matrix[startRow][i] = ++counter;
        }
        startRow++;
        for (let i = startRow; i <= endClmn; i++) {
            matrix[i][endClmn] = ++counter;
        }
        endClmn--;
        for (let i = endClmn; i >= startClmn; i--) {
            matrix[endRow][i] = ++counter
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startClmn] = ++counter
        }
        startClmn++;
    }

    return matrix.map(x => x.join(" ")).join("\n")
}

solve(3, 3);
//output:
//1 2 3
//8 9 4
//7 6 5