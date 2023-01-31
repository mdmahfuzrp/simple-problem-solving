// Problem Name: write a code and print book price and skip the number
             //  who is up to 200

// Book Price in Array
var booksPrice = [78, 120, 150, 210, 180, 300, 90, 160];

// loop star with 0 and finish 1 less than the array length
for(var i=0; i<booksPrice.length; i++){
    if(booksPrice[i] >= 200){
        continue;
    }
    console.log(booksPrice[i]);
}

// Problem Solved and some other information:
// -----------------------------------------------------
/*
    Coder: Md Mahfuz RP
    Problem owner: Programming Hero Web Development Course
*/
// -----------------------------------------------------