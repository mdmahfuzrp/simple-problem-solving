// Problem Name: write a code who show me the total number of array

// Array for number
var marks = [40, 45, 50, 25, 60, 38, 33];

// Total number store in some variable
var sum = 0;

// loop for get index number and sum = sum + array[index]
for(var i = 0; i<marks.length; i++){
    sum = sum+marks[i];
}
//Output here
console.log("The Total Number : ", sum);