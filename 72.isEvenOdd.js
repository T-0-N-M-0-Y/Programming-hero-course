function isEvenOdd(number) {
    const check = number%2;
    if(check === 0){
        return true;
    }
    else{
        return false;
    }
}

const check1 = isEvenOdd(11)
console.log(check1);

const check2 = isEvenOdd(22)
console.log(check2);