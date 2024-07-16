// SWITCH = can be an efficient replacement to many else is statements

// Ex 1
let day = 1;

switch(day){
    case 1:
        console.log(`It is MONDAY`);
        break;
    case 2:
        console.log(`It is TUESDAY`);
        break;
    case 3:
        console.log(`It is WEDNESDAY`);
        break;
    case 4:
        console.log(`It is THURSDAY`);
        break;
    case 5:
        console.log(`It is FRIDAY`);
        break;
    case 6:
        console.log(`It is SATURDAY`);
        break;
    case 7:
        console.log(`It is SUNDAY`);
        break;
    default:
        console.log(`${day} is not a day`)
}

// Ex 2
switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
};
