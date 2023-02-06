// Fahrenheit to Celsius
function fahToCels(fahrenheit){
    
    // Formula for Fahrenheit to Celsius Convertion
    var celsius = (fahrenheit - 32) * 5/9
    return celsius;
}

const celsiusResult = fahToCels(20);
console.log( parseFloat( celsiusResult.toFixed(2) ) );

// Problem Solved and some other information:
// -----------------------------------------------------
/*
    Coder: Md Mahfuz RP
    Problem owner: Programming Hero Web Development Course
*/
// -----------------------------------------------------