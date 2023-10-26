let input = document.getElementById("input");

let buttons = document.querySelectorAll("button");

let string = "";

let output = Array.from(buttons);

output.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
