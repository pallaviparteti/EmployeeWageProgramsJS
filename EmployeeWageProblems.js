console.log("Welcome To Employee Wage Problems");

//UC8
console.log("UC8 - Store the Day and the Daily Wage along with the Total Wage");
console.log(empDailyWageMap);
let totalWageUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWageUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap); 
console.log(" Total Wage using Map: " + totalWageUsingMap);