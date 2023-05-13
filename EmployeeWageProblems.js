console.log("Welcome To Employee Wage Problems");
//UC2
const IS_NO_TIME = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10) % 3;
switch (empCheck){
    case IS_PART_TIME :
        empHrs = PART_TIME_HOURS;
        break;
        case IS_FULL_TIME :
            empHrs = IS_FULL_TIME;
            break;
            default :
            empHrs = IS_NO_TIME;
}
let employeeWage = empHrs * WAGE_PER_HOURS;
console.log("Employee daily wage :" + employeeWage);

