function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if(b === 0)
    {
        return "Don't do that cunt!";
    }

    return a / b;
}


function operate(operator, a, b)
{
    let result = 0;
    switch(operator)
    {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "×":
            result = multiply(a, b);
            break;
        case "÷":
            result = divide(a, b);
            break;
        default:
            return;
    }
    
    return result;
}

let lastOperatorWasEquals = false;
let rightOperand = "";
let leftOperand = "";
let curOperator = "";
let switchToRightOperand = false;

const numButtons = document.querySelectorAll(".calc-nums ul li button");
const calcText = document.getElementById("calc-text");

numButtons.forEach((button) => {
    //on each calc num and "." make sure it fits in input & 
    //append the clicked button text
    button.addEventListener("click", (e) => {
        if((e.target.textContent === "." && calcText.value.includes("."))
        || calcText.value.length >= 23)
        {
            return;
        }
        if(lastOperatorWasEquals)
        {
            lastOperatorWasEquals = false;
            calcText.value = "";
            leftOperand = "";
            rightOperand = "";
            switchToRightOperand = false;
            curOperator = "";
        }

        if(switchToRightOperand && rightOperand === "")
        {
            calcText.value = "";
        }

        calcText.value += e.target.textContent;
        if(leftOperand === "" || !switchToRightOperand)
        {
            leftOperand = calcText.value;
        }
        else
        {
            rightOperand = calcText.value;
        }
    });
});

const calcClear = document.querySelector(".calc-clear button");

calcClear.addEventListener("click", () => {
    calcText.value = "";
    leftOperand = "";
    rightOperand = "";
    switchToRightOperand = false;
    curOperator = "";
    operators.forEach(button => {
        button.style.backgroundColor = "#FFCC00";
    });
});

const operators = document.querySelectorAll(".calc-operators li button")

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        operators.forEach(button => {
            button.style.backgroundColor = "#FFCC00";
        });

        if(e.target.textContent === "=")
        {
            lastOperatorWasEquals = true;
            if(curOperator === "" && leftOperand != "")
            {
                return;
            }
            if(leftOperand === "")
            {
                calcText.value = "NaN";
                rightOperand = "";
                return;
            }
            let num1 = parseFloat(leftOperand);
            let num2 = parseFloat(rightOperand);

            if(rightOperand === "" && curOperator != "" && leftOperand != "")
            {
                calcText.value = operate(curOperator, num1, num1); 
                leftOperand = calcText.value;
                return;
            }

            calcText.value = "";
            calcText.value = operate(curOperator, num1, num2);
            rightOperand = "";
            leftOperand = calcText.value;
            return;
        }

        if(leftOperand && rightOperand && curOperator)
        {
            let num1 = parseFloat(leftOperand);
            let num2 = parseFloat(rightOperand);
            calcText.value = "";
            rightOperand = "";
            calcText.value = operate(curOperator, num1, num2);
            leftOperand = calcText.value;
        }
       
        lastOperatorWasEquals = false;
            
        curOperator = e.target.textContent;
        switchToRightOperand = true;
        e.target.style.backgroundColor = "#FAFAFA";
    });
});


