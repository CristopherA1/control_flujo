function businessHours(dayNumber, hourNumber) {
    if ((dayNumber >= 1 && dayNumber <= 5) && (hourNumber >= 9 && hourNumber <= 18)) {
        return true;
    } else {
        return false;
    }
}//businessHours

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    if (janFirstDayNumber == 0) {
        return ((yearDayNumber - 1) % 7);
    } else if (janFirstDayNumber > 0) {
        return (((yearDayNumber - 1) + janFirstDayNumber) % 7);
    }
}


function isBusinessHours(yearDayNumber, hourNumber) {
    let day = getDayNumber(0, yearDayNumber);
    return businessHours(day, hourNumber);
}

console.log(isBusinessHours(73, 22));