// Problem Name: write a program - 
    // if you have more than 80000 BDT, you will buy Mac laptop
    // if you have more than 60000 BDT, you will buy Hp laptop
    // if you have more than 40000 BDT, you will buy Lenovo yoga computer
    // if you have more than 20000 BDT, you will buy old laptop
    // if you have less than 20000 BDT, you can't buy any laptop

// Automatic working function
// it's recive my budget
function buyLaptop(amount){
    // This is laptop price
    const laptopPrice = [80000, 60000, 40000, 20000];

    // If I have 80000 or more than 80000 BDT then this condition will work
    if(amount >= laptopPrice[0]){
        console.log("You can buy Mac Laptopo.");
    }
    // If I have 60000 or more than 60000 BDT then this condition will work
    else if(amount >= laptopPrice[1]){
        console.log("You can buy Hp 5th Gen Laptop.");
    }
    // If I have 40000 or more than 40000 BDT then this condition will work
    else if(amount >= laptopPrice[2]){
        console.log("You can buy Lenovo yoga computer.");
    }
    // If I have 20000 or more than 20000 BDT then this condition will work
    else if(amount >= laptopPrice[3]){
        console.log("You can buy old laptop.");
    }
    // If i have less than 20000 BDT then this condition will work
    else{
        console.log("You can't buy a laptop!")
    }
}

// how much i have money
var myAmount = 39000;

// calling buyLaptop function
buyLaptop(myAmount);




// Problem Solved and some other information
// -----------------------------------------------------
/*
    Coder: Md Mahfuz RP
    Problem owner: Programming Hero Web Development Course
*/
// -----------------------------------------------------