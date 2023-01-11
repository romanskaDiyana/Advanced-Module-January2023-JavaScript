function daysInMonth(month, year) {
    let inputDate = new Date(year, month, 0).getDate();
    return `${inputDate}`;
}