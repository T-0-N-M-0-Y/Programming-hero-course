// function isleapYear(Year) {
//     const remainder = Year%4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function isleapYear(Year) {
    const remainder = Year % 4;
    if (remainder === 0) {
        return true;
    }
    return false; //Else na likleo colbe
}

const Year1 = isleapYear(2022)
console.log(Year1);

const Year2 = isleapYear(2024)
console.log(Year2);