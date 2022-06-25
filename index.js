let first = parseInt(prompt("input first number"));
let operator = prompt("input your operator")
let second = parseInt(prompt("input second number"));

if(operator ==="+"){
    let addition = first + second;
    alert(addition);
} else if(operator==="-") {
    let subtraction = first - second;
    alert(subtraction);
} else if (operator==="*") {
    let product = first * second;
    alert(product)
} else if (operator==="/"){
     let quotient = first / second;
     alert(quotient)
} else (
    alert("your desired answer")
)



