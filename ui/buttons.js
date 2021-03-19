console.log("BUTTONS FUNCTIONS");
/*******************************************************************************************
										REFRESH/LIVE BUTTON Functions
*******************************************************************************************/


$("#refreshButton").mouseup(function(){
	clearTimeout(pressTimer);
	if(longPress == false && elem.value=="Turn Off Live"){
		switch_button_name("Turn Off Live", "Refresh Data");
		auto_refresh(false);
		live_now(false);
	}
	refresh_data();
	longPress=false;
	return false;
}).mousedown(function(){
	pressTimer = window.setTimeout(function() {
		console.log("long press");
		if(elem.value=="Refresh Data") {
			switch_button_name("Refresh Data", "Turn Off Live");
			auto_refresh(true);
			live_now(true);

		}
		else{
			switch_button_name("Turn Off Live","Refresh Data");
			auto_refresh(false);
			live_now(false);
		}
		longPress = true;
	},1000);
	return false;
});


$("#refreshButton").mouseenter(function(){
	display_snack_bar("Long Press to Turn On Live");
});

function switch_button_name(a, b){
    if (elem.value==a) {
    	elem.value = b;
	}
    else{
    	elem.value = a;
	}
}

function auto_refresh(live){
	if (live == true){
		autoRefresh = setInterval(function(){
    		console.log("onload_function set timeout loop");
	  		refresh_data();
  		},1000)
	}
	else{
		clearInterval(autoRefresh);
	}

}
function live_now(show){
	  var x = document.getElementById("liveNow");
	  if (show == true){
	  	x.style.display = "block";
	  } else {
	  	x.style.display = "none";
	  }
}




/*******************************************************************************************
										NEXT ATTRIBUTE BUTTON Functions
*******************************************************************************************/


$("#rotateAttributesButton").click(function(){
  	console.log("clicked");
  	var previousContainer = document.getElementById(containerAttributeNames[containerAttributePosition]);
  	containerAttributePosition++;
  	if (containerAttributePosition == containerAttributeNames.length){
	containerAttributePosition =0;
  	}
  	console.log("now in "+ containerAttributeNames[containerAttributePosition])
  	var currentContainer = document.getElementById(containerAttributeNames[containerAttributePosition]);


	  if (currentContainer.style.display === "none") {
		currentContainer.style.display = "block";
	  } else {
		currentContainer.style.display = "none";
	  }
	  if (previousContainer.style.display === "none") {
		previousContainer.style.display = "block";
	  } else {
		previousContainer.style.display = "none";
	  }



})


$("#rotateAttributesButton").mouseenter(function(){
	display_snack_bar("Next Attribute is " + "none");
});







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