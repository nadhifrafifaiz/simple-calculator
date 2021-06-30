let arr = []

const fnOutput = (num = 0) => {
    document.getElementById("result").value += num
}

const fnCalculate = (operand) => {
    let inputNum1 = document.getElementById("result").value
    if (inputNum1.includes(".")) {
        inputNum1 = parseFloat(inputNum1)
    } else {
        inputNum1 = parseInt(inputNum1)
    }
    arr.push(inputNum1)
    arr.push(operand)
    console.log(arr);
    fnClear();
}



const fnSolve = () => {
    let num1 = arr[0]
    let num2
    //Check data type num1
    if (num1 % 1 != 0) {
        num2 = parseFloat(document.getElementById("result").value)
    } else {
        num2 = parseInt(document.getElementById("result").value)
    }
    let operand = arr[1]
    let res
    switch (operand) {
        case "+":
            operand = "plus";
            res = fnCalculator(num1, num2, plus)
            break;
        case "-":
            operand = "minus";
            res = fnCalculator(num1, num2, minus)
            break;
        case "*":
            res = fnCalculator(num1, num2, multiply)
            break
        default:
            operand = "divide";
            res = fnCalculator(num1, num2, divide)
            break;
    }


    document.getElementById("result").value = res
}


var fnCalculator = (a, b, cb) => {
    return cb(a, b)
    // console.log(cb);
}


var multiply = (num1, num2) => {
    return num1 * num2
}

var minus = (num1, num2) => {
    return num1 - num2
}

var plus = (num1, num2) => {
    console.log(typeof (num2))
    return num1 + num2
}

var divide = (num1, num2) => {
    return num1 / num2
}




const fnAllClear = () => {
    document.getElementById("result").value = ""
    arr = []
}

const fnClear = () => {
    document.getElementById("result").value = ""
}

