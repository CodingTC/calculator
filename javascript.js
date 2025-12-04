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
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }

    return result;
}


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
        calcText.value += e.target.textContent;
    });
});

const calcClear = document.querySelector(".calc-clear button");

calcClear.addEventListener("click", () => {
    calcText.value = "";
});
