// function to change the amount value at the initial bill section 
let amount = document.querySelector("#amount");


// function for adding number of people for spliting the bill 
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let num = document.querySelector("#num");

add.addEventListener("click", function(){
    let currentValue = parseInt(num.innerText);
    let newValue = currentValue + 1;
    num.innerText= newValue;
});

sub.addEventListener("click", function(){
    let currentValue = parseInt(num.innerText);
    let newValue = currentValue - 1;
    if (newValue < 0) {
        newValue = 0;
    }
    num.innerText = newValue;
});