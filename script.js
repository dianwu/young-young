function inputYear(digit) {
  var display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = digit;
  } else {
    display.innerText += digit;
  }
}
