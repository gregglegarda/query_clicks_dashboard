console.log("NAVBAR FUNCTIONS");


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



