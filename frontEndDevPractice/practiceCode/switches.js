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
