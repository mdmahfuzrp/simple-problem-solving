// Problem Name: Get Odd Numbers of an array and get odd sum of an array
function getOddSumNumber(OddArray){
    var OddSum = 0;
    for(var i=0; i<OddArray.length; i++){
        const oddElement = OddArray[i];

        if(oddElement % 2 !== 0){
            OddSum += oddElement;
        }
    }
    return OddSum;
}

// Problem Name: Get Even Numbers of an array and get even sum of an array
function getEvenSumNumber(evenArray){
    var evenSum = 0;
    for(var i=0; i<evenArray.length; i++){
        const evenelement = evenArray[i];

        if(evenelement % 2 === 0){
            evenSum += evenelement;
        }
    }
    return evenSum;
}

// My Array For Even and Odd Operations
const myArray = [2,3,4,5,6,7,8,9,10];

// Here is calling odd function and recive result and showing the odd sum
const getOddSum = getOddSumNumber(myArray);
console.log("Odd Sum: ", getOddSum);

// Here is calling function for even sum and recive result and showing the even sum
const getEvenSum = getEvenSumNumber(myArray);
console.log("Even Sum: ", getEvenSum);