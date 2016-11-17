// enter this into a JavaScript console and it will run.
function selectedWord() {
  // get the currently selected element
  return document.getElementById("nhwMiddlegwt-uid-8");
}
// the input element
var inputElement = document.getElementsByClassName("txtInput")[0];

document.addEventListener("keypress", function(e) {
  if (e.keyCode == 32) {
    inputElement.value = selectedWord().innerHTML;
  }
});
