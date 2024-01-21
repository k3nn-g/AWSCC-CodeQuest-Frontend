var temperature = 25;

if (temperature>30) {
    console.log("The temperature is greater than 30!");
} else {
    console.log("The temperature is not greater than 30.");
}

var time = 16;
if (time< 12) {
    console.log("Morning!");
} else if (time > 12 ) {
    console.log("Afternoon!");
} else if (time > 6) {
    console.log("Evening!");
}

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    case "Wednesday":
        console.log("It's Wednesday!");
        break;
    case "Thursday":
        console.log("It's Thursday!");
        break;
    case "Friday":
        console.log("It's Friday!");
        break;
    case "Saturday":
        console.log("It's Saturday!");
        break;
    case "Sunday":
        console.log("It's Sunday!");
        break;
    default:
        console.log("Unknown!");
}