const resultDisplay = document.getElementById("result");

function appendValue(value) {
  resultDisplay.value += value;
}

document.getElementById("clear").addEventListener("click", () => {
  resultDisplay.value = "";
});

document.getElementById("backspace").addEventListener("click", () => {
  resultDisplay.value = resultDisplay.value.slice(0, -1);
});

document.getElementById("equal").addEventListener("click", () => {
  try {
    resultDisplay.value = eval(resultDisplay.value);
  } catch {
    alert("Invalid Expression");
  }
});

["0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9", "add", "subtract", "multiply", "divide", "dot"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", () => {
      if (id === "add") appendValue("+");
      else if (id === "subtract") appendValue("-");
      else if (id === "multiply") appendValue("*");
      else if (id === "divide") appendValue("/");
      else if (id === "dot") appendValue(".");
      else appendValue(id);
    });
  }
});

document.addEventListener("keydown", (event) => {
  const allowed = "0123456789+-*/.=BackspaceEnter";
  if (!allowed.includes(event.key)) {
    alert("Only numbers are allowed");
    return;
  }

  if (event.key === "Enter") {
    try {
      resultDisplay.value = eval(resultDisplay.value);
    } catch {
      alert("Invalid Expression");
    }
  } else if (event.key === "Backspace") {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
  } else {
    appendValue(event.key);
  }
});
