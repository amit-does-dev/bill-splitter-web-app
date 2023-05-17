// function to change the amount value at the initial bill section
let amount = document.querySelector("#amount");
let input;

amount.addEventListener("click", function () {
  amount.contentEditable = true;
  amount.focus();
});

amount.addEventListener("blur", function () {
  amount.contentEditable = false;
});

amount.addEventListener("input", function () {
  // Validate input value using regex for integer
  let value = amount.innerText.trim();
  let intValue = parseInt(value);
  if (isNaN(intValue)) {
    amount.innerText = "";
  } else {
    input = intValue;
  }
});





// function to calculate the tip amount from the given input by the user 

// for 5% tip calculation
let t5= document.getElementById("tip1");
let tA5= document.getElementById("tipAmount");

t5.addEventListener("click",function(){
    let bill = parseFloat(input);
    tA5.innerText= (bill*(0.05)).toFixed(2);
})

// for 10% tip calculation 
let t10= document.getElementById("tip2");
let tA10= document.getElementById("tipAmount");

t10.addEventListener("click",function(){
    let bill = parseFloat(input);
    tA10.innerText= (bill*(0.10)).toFixed(2);
})

// for 15% tip calculation 
let t15= document.getElementById("tip3");
let tA15= document.getElementById("tipAmount");

t15.addEventListener("click",function(){
    let bill = parseFloat(input);
    tA15.innerText= (bill*(0.15)).toFixed(2);
})
// for 25% tip calculation 
let t25=document.getElementById("tip4");
let tA25= document.getElementById("tipAmount");

t25.addEventListener("click",function(){
    let bill = parseFloat(input);
    tA25.innerText= (bill*(0.25)).toFixed(2);
})
// for 50% tip calculation 
let t50= document.getElementById("tip5");
let tA50= document.getElementById("tipAmount");

t50.addEventListener("click",function(){
    let bill = parseFloat(input);
    tA50.innerText= (bill*(0.50)).toFixed(2);
})
// for 75% tip calculation 
let t75= document.getElementById("tip6");
let tA75= document.getElementById("tipAmount");

t75.addEventListener("click",function(){
    let bill = parseFloat(input);
    tA75.innerText= (bill*(0.75)).toFixed(2);
})




// function for adding number of people for spliting the bill
let elements = document.querySelectorAll("#add, #small2");
let sub = document.querySelector("#sub");
let num = document.querySelector("#num");

add.addEventListener("click", function () {
  let currentValue = parseInt(num.innerText);
  let newValue = currentValue + 1;
  num.innerText = newValue;
});

sub.addEventListener("click", function () {
  let currentValue = parseInt(num.innerText);
  let newValue = currentValue - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  num.innerText = newValue;
});



adding clickgenerate bill 