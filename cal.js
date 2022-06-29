const num1 = parseInt(window.prompt("Enter first number: "));
const num2 = parseInt(window.prompt("Enter second number: "));
const operator =window.prompt("Enter Operator (+, -, *, /)");
let result = 0;

if (isNaN(num1) || isNaN(num2)){
    alert("Invalid operaator or number, please refresh and try again")
} else {
    if (operator == "+"){
        result = num1 + num2;
    }
    else if (operator == "-"){
        result = num1 - num2;
    }
    else if (operator == "*"){
        result = num1 * num2;
    }
    else if(operator == "/"){
        result = num1 / num2;
    }
    document.write(num1 + operator + num2 + "=" + result);
}

