//04. Previous Day
//Write a JS function that calculates the date of the previous day by given year, month, and day.

function previousDay(year, month, day) {

    const previousDay = new Date(year, month - 1, day - 1);
    const newYear = previousDay.getFullYear();
    const newMonth = previousDay.getMonth() + 1;
    const newDay = previousDay.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

previousDay(2016, 9, 30);
//output:
//2016-9-29