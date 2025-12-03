function add(a, b)
{
    if(!Number.isFinite(a) || !Number.isFinite(b))
    {
        return NaN;
    }

    return a + b;
}

function subtract(a, b)
{
    if(!Number.isFinite(a) || !Number.isFinite(b))
    {
        return NaN;
    }

    return a - b;
}

function multiply(a, b)
{
    if(!Number.isFinite(a) || !Number.isFinite(b))
    {
        return NaN;
    }

    return a * b;
}

function divide(a, b)
{
    if(!Number.isFinite(a) || !Number.isFinite(b))
    {
        return NaN;
    }

    if(b === 0)
    {
        return NaN;
    }

    return a / b;
}



