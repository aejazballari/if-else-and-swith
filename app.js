let marks = 65;

// USING IF CONDITION


// if (marks < 35) {
//     console.log('Failed');
// } else if (marks < 40) {
//     console.log("Just pass");
// } else if (marks < 60) {
//     console.log("Second class");
// } else if (marks < 75) {
//     console.log("First class");
// }else {
//     console.log("Distinction");
// }





// USING SWITCH

switch (true) {
    case marks<35:
    console.log("Failed");
    break;
    case marks<40:
    console.log("Just passed");
    break;
    case marks<60:
    console.log("Second Class");
    break;
    case marks<80:
    console.log("First Class");
    break;
    default:
    console.log("Distinction");
}