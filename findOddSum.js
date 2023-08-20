function getSumOfAnArray(numbers)
{
    // console.log(numbers);
    let sum = 0;
    for(let i=0; i < numbers.length; i++)
    {
        const index = i ;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);

    }
    return sum;
}

function getOddNumbersOfAnArray(numbers)
{
    const oddNumbers = [];
    for(let i=0; i<numbers.length;i++)
    {
        // console.log(i);
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0)
        {
            console.log(index,element);
            oddNumbers.push(element);
        }
        
    }

    return oddNumbers;
    
}

const myNumbers = [12,65,45,78,32,45,91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
getSumOfAnArray(myNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd numbers sum: ', oddNumberSum);