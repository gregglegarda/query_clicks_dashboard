console.log("HOVER FUNCTIONS");


/*******************************************************************************************
										TOP NAV BAR RESPONSIVE Functions
*******************************************************************************************/

function top_nav_responsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*******************************************************************************************
										SNACK BAR Function
*******************************************************************************************/

function display_snack_bar(message) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerText = message;
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}