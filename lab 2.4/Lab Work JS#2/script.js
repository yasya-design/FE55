
function calculator(){
    let number = prompt('Write first number')
    let number2 = prompt('Write second number')
    let operator = prompt('Write arithmetic operator')

    let sum;

    if (operator == "+"){
        sum = Number(number) + Number(number2);
    } else if (operator == "-"){
        sum = Number(number) - Number(number2);
    } else if (operator == "*"){
        sum = Number(number) * Number(number2);
    } else if (operator == "/"){
        sum = Number(number) / Number(number2);
    }
    alert(sum)
    return sum
}
calculator();






