//Problem Number 1
//Problem Name: Calculate Multiply, Addision, Subtract, Divide with a number
/* DESCRIPTION: Here is function called by mindGame! this function recived a number from user,
                Then complete multiple opertion like addision, multiply, divide, subtract etc.
                After the calculation then this function will return the result. */
function mindGame(number) {
    let sum = (((number * 3) + 10) / 2) - 5;
    return sum;
}




//Problem Number 2
//Problem Name: Finding even or odd Number with the help of string
/* DESCRIPTION: Here is function called by evenOdd! this function recived a string from user,
                Then check data type and store recived data in a new variable. if the data
                is string and it's length digit is even then output even, if odd then output odd*/
function evenOdd(text) {
    let textType = typeof (text);

    if (textType === 'string') {
        if (text.length % 2 === 0) {
            console.log("Even");
        }
        else {
            console.log("Odd");
        }
    }
    else {
        console.log("Please, Enter a string!");
    }
}




//Problem Number 3
//Problem Name: Is Less or Greater than seven
/* DESCRIPTION: Here is function called by isLGSeven! this function recived a number from user,
                Then subtract 7 from the number and store rsult in a new variable who's name lgNumber.
                if the lgNumber is less then 7 then return substract result, if the lgNumber is greater then 7
                then input number multiply by 2 and return it*/
function isLGSeven(number) {
    let lgDataType = typeof (number);
    if (lgDataType === 'number') {
        let lgNumber = number - 7;
        if (lgNumber < 7) {
            return lgNumber;
        }
        else if (lgNumber > 7) {
            return number * 2;
        }
    }
    else {
        return "Please, Enter a number!";
    }
}






//Problem Number 4
//Problem Name: Finding Bad Data
/* DESCRIPTION: Here is function called by findingBadData! this function recived a array from user,
                Then using condition and for loop in function we have the total bad nubmer after
                the calculation this function will return total of bad number*/
function findingBadData(array) {
    let badData = 0;
    for (let i = 0; i < array.length; i++) {
        let singleAge = array[i];
        if (singleAge < 0) {
            badData++;
        }
    }
    return badData;
}





//Problem Number 5
//Problem Name: gems to diamond
/* DESCRIPTION: Here is function called by gemsToDiamond! this function recived 3 paramiter from user,
                Then using condition calculate the total diamond and return it*/
function gemsToDiamond(friendOne, friendTwo, friendThree){
    let friendOneDiamond = friendOne * 21;
    let friendTwoDiamond = friendTwo * 32;
    let friendThreeDiamond = friendThree * 43;

    let totalDiamond = friendOneDiamond + friendTwoDiamond + friendThreeDiamond;

    if(totalDiamond > (1000*2)){
        totalDiamond -= 2000;
        return totalDiamond;
    }
    else{
        return totalDiamond;
    }
}