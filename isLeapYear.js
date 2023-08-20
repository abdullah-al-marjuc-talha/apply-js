function isLeepYear(year)
{
    const remainder = year%4;
    if(remainder==0)
    {
        // console.log('year is leap year: ', year);
        return true;
    }
    // console.log('year is not a leap year :', year);
    return false;
}

const isMyYearLeapYear = isLeepYear(1933);
console.log('my year: ', isMyYearLeapYear);

const isHerYearLeapYear = isLeepYear(1960);
console.log('her year: ', isHerYearLeapYear);