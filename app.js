//dom cacahing

const result_div = document.querySelector(".result");

//variables

var valueStr = "";
var c=0;
//eventlisteners

document.addEventListener("click", clickKey);
document.addEventListener("keydown", pressKey);

//functions

function clickKey(event) {
  let pressedKey = "";
  let pressedElement = event.target;

  //setting up the value of pressedKey
  if (pressedElement.classList.contains("num")) {
    pressedKey = pressedElement.innerText;
    // console.log(pressedKey)
  } else if (pressedElement.classList.contains("addition")) {
    pressedKey = "+";
  } else if (pressedElement.classList.contains("subtraction")) {
    pressedKey = "-";
  } else if (pressedElement.classList.contains("division")) {
    pressedKey = "/";
  } else if (pressedElement.classList.contains("multiplication")) {
    pressedKey = "*";
  } else if (pressedElement.classList.contains("equals")) {
    pressedKey = "=";
  } else if (pressedElement.classList.contains("clear")) {
    pressedKey = "clear";
  } else {
  }

  //calling the display function and storing the expression based on value of pressed key
  if (!(pressedKey == "=") && !(pressedKey === "clear") && !pressedKey == "") {
    valueStr = valueStr + pressedKey;
    display(pressedKey);
  } else if (pressedKey === "=") {
    display(pressedKey);
  } else if (pressedKey == "clear") {
    clearAll();
  } else {
  }
  // console.log(pressedKey)
}

function pressKey(event) {
  let pressedKey = event.key;
  if (/(?:\d|[+]|[-]|[\/]|[*]|[x]|[\^]|[(]|[)])/.test(pressedKey)) {
    if (pressedKey == "x") {
      valueStr = valueStr + "*";
    } else if (pressedKey == "^") {
      valueStr = valueStr + "**";
    } else {
      valueStr = valueStr + pressedKey;
    }
    display(pressedKey);
  } else if (pressedKey == "=" || pressedKey == "Enter") {
    display(pressedKey);
  } else if (pressedKey == "Delete") {
    clearAll();
  } else if (!pressedKey == "Shift") {
    alert("INVALID INPUT");
  } else {
  }
}

function display(pressedKey) {
    
    if(c==2){
        c=0;
        clearAll();
    }
  if (pressedKey == "=" || pressedKey == "Enter") {
      c++;
    result_div.innerText = result_div.innerText + "=";
    let calcResult = calc();
    valueStr = "";
    let newresDiv = document.createElement("div");
    newresDiv.innerText = calcResult + "\n";
    result_div.appendChild(newresDiv);
  } else {
    
    result_div.appendChild(document.createTextNode(pressedKey));

  }
}

function calc() {
  return eval(valueStr).toString();
}

function clearAll() {
  result_div.innerHTML = "";
  //clear everything on pressing C or delete
}
