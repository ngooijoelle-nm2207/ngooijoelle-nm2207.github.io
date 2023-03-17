function myFunction() {
  alert(
    'Thanks for your response! Remember that things will get better. Have a great day ahead :).'
  );
}

var slider = document.getElementById('range');
var display = document.getElementById('display');
var getVal = slider.value;

numVal.innerHTML = getVal; // If you don't want the number to be displayed, delete this. This is to show at which number the label will change

slider.onchange = function () {
  numVal.innerHTML = this.value; // If you don't want the number to be displayed, delete this. This is to show at which number the label will change

  var getVal = this.value;

  if (getVal == 1) {
    display.innerHTML = 'Bad mood';
  }

  if (getVal == 2) {
    display.innerHTML = 'Moderately bad mood';
  }

  if (getVal == 3) {
    display.innerHTML = 'Neutral';
  }

  if (getVal == 4) {
    display.innerHTML = 'Moderately good mood';
  }

  if (getVal == 5) {
    display.innerHTML = 'Good mood';
  }
};
//error:the text is not changing when i move the slider
