console.log("HOVER FUNCTIONS");

/*******************************************************************************************
										SNACK BAR Function
*******************************************************************************************/

function display_snack_bar(message) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerText = message;
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}