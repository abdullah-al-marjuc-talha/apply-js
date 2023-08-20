function isEven(number)
{
    const remainder = number % 2;
    // console.log(remainder);

    if(remainder==0)
    {
        // console.log('number is even');
        return true;
    }
    else
    {
        // console.log('odd number');
        return false;
    }

}

const myNumberIsEven = isEven(49);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(4);
console.log(herNumberIsEven);