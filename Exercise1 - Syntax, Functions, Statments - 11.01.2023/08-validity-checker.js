//08. Validity Checker
//Write a program that receives a total of 4 parameters in the format x2, y2, x2, y2.

function validDistance(x1, y1, x2, y2) {
    const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) % 1 === 0;
    const pairs = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2],
    ]

    const isValid = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((x1, i) =>
        console.log(distance(...pairs[i]) ? isValid(...x1, "valid") : isValid(...x1, "invalid"))
    )
}

validDistance(3, 0, 0, 4);
//output:
//{3, 0} to {0, 0} is valid
//{0, 4} to {0, 0} is valid
//{3, 0} to {0, 4} is valid

