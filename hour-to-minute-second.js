// Problem Name: Hour to minute and second converter

function timeConverter(hour){
    // Basic roul of convert hour to minute
    // multiply the time value by 60 Because 60 minute = 1 hour
    let minute = hour * 60;
    
    // Basic roul of convert minute to second
    // multiply the time value by 60 Because 60 second = 1 minute
    let second = minute * 60;
    
    console.log(hour + " Hour =");
    console.log("minute : ", minute);
    console.log("second : ", second);
}

const hour = 5;
timeConverter(hour);