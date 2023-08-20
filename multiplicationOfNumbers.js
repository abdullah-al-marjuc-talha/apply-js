// multiplicationOfNumbers.js
//factorial
function multiplicationOfNumbers(number)
{
    let result = 1;
    for(let i=1; i<=number; i++)
    {
        result= result*i;
        
    }
    return result
}

const result = multiplicationOfNumbers(7);
console.log(result);