// arithemetic operators = operands (values, variables, etc.)
//                         operators (+ - * /)
//                         ex. 11 = x + 5;

let students = 30;

//students = students + 1; addition
//students = students - 1; subtraction
//students = students * 2; multiplication
//students = students / 2; division
//students = students ** 2; exponets 
//extraStudents = students % 3; modulus

//students += 1; addition shortcut
//students -= 1; subtraction shortcut
//students *= 2; multiplication shortcut
//students /= 2; division shortcut
//students **= 2; exponential shortcut
//students %= 2; modulus shortcut

//students++; increment operator (+1)
//students--; decrement operator (-1)

/* operator precedence
    1. parenthesis ()
    2. exponents **
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = 12 % 5 + 8 / 2;
/*
    12 % 5 = 2 (2 + 8 / 2)
    8 / 2 = 4 (2 + 4)
    2 + 4 = 6
*/

let challengeResult = 6 / 2 ** (2 + 5);
/*
   2 + 5 = 7 (6 / 2 ** 7)
   2 ** 7 = 128 (6 / 128)
   6 / 128 = 0.046875
*/

console.log(challengeResult);
