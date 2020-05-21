window.addEventListener('load', start);

var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;

function start() {
  console.log('start');
  /* Selectors */
  rangeRed = document.querySelector('#rangeRed');
  rangeGreen = document.querySelector('#rangeGreen');
  rangeBlue = document.querySelector('#rangeBlue');
  activateRange();
}

function activateRange() {
  /* Selectors */
  var inputRed = document.querySelector('#inputRed');
  var inputGreen = document.querySelector('#inputGreen');
  var inputBlue = document.querySelector('#inputBlue');
  var boxColor = document.querySelector('#boxColor');
  /* Change Color */
  function changeColorRange(event) {
    console.log('changeColor');
    inputRed.value = rangeRed.value;
    inputGreen.value = rangeGreen.value;
    inputBlue.value = rangeBlue.value;
    boxColor.style.backgroundColor =
      'rgb(' +
      inputRed.value +
      ',' +
      inputGreen.value +
      ',' +
      inputBlue.value +
      ')';
  }

  /* Event listeneres */
  rangeRed.addEventListener('change', changeColorRange);
  rangeGreen.addEventListener('change', changeColorRange);
  rangeBlue.addEventListener('change', changeColorRange);
}
