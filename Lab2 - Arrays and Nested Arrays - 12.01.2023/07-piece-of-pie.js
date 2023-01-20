//07. Piece of Pie
//Write a function that receives three parameters – an array of pie flavors as strings, two target flavors as strings. 

function solve(arrayOfPies, firstPie, lastPie) {

    const firstIndex = arrayOfPies.indexOf(firstPie);
    const lastIndex = arrayOfPies.indexOf(lastPie);

    return arrayOfPies.slice(firstIndex, lastIndex + 1);
}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');

//output:
//['Key Lime Pie',
//'Cherry Pie',
//'Lemon Meringue Pie']


