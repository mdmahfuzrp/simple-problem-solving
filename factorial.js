// Problem Name: Get the output of 9! (9 factorial)
// 9! = 9*8! = 9*8*7*6*5*4*3*2*1
// reverse: 9! = 1*2*3*4*5*6*7*8*9
//we try 2 method, reverse and normal

// Here is normal method
function factorial(number){
    var sum = 1;

    for(var i = 1; i<=number; i++){
        sum *= i;
    }
    return sum;
}

// Here is reverse method
function reverseFactorial(reverseNum){
    var reverseSum = 1;
    
    for(reverseNum; reverseNum >= 1; reverseNum--){
        reverseSum *= reverseNum;
    }
    return reverseSum;
}

// Input for factorial number
const factNumber = 7;

//Normal Method for get result of factorial number
const sumOfFactorial = factorial(factNumber);
console.log("Normal Method of Factorial: ", sumOfFactorial);

//Reverse Method for get result of factorial number
const sumOfReverseFact = reverseFactorial(factNumber);
console.log("Reverse Method of Factorial: ", sumOfReverseFact);


// Problem Solved and some other information:
// -----------------------------------------------------
/*
    Coder: Md Mahfuz RP
    Problem owner: Programming Hero Web Development Course
*/
// -----------------------------------------------------