


function ball(){
    let numbers = prompt('Введите любое число от 0 до 100', 0)

    if (numbers >= 0 & numbers <= 59){
        alert('FX')
    } else if (numbers >=60 & numbers <=64){
        alert("E")
    } else if (numbers >=65 & numbers <=74){
        alert("D")
    } else if (numbers >=75 & numbers <=84){
        alert("C")
    }else if (numbers >=85 & numbers <=94){
        alert("B")
    } else if (numbers >=95 & numbers <=100){
        alert("A")
    } else{
        alert("Ошибка")
    }
}
ball ();