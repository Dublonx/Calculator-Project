// Calculator
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Clear
function clear() {
  display.value = "";
}

// Remove
function remove() {
  display.value = display.value.slice(0, -1);
}

// Equal
function equal() {
  display.value = eval(display.value);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const click = button.textContent;
    
    // if statement
    if (click === '=') {
      equal();
    } else if (click === 'C') {
      clear();
    } else if (click === 'R') {
      remove();
    } else {
      display.value += click;
    }
  });
});

// Toggle Button
const dark = document.getElementById('dark');
let body = document.getElementById('conBody');

dark.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Github Link Account
function gitHub() {
  window.location.href = "https://github.com/Dublonx";
}