console.log("BUTTONS FUNCTIONS");
/*******************************************************************************************
										REFRESH/LIVE BUTTON Functions
*******************************************************************************************/

/***************************************** Clicking Refresh Button *************************************************/
$("#refreshButton").mouseup(function(){
	clearTimeout(pressTimer);
	if(longPress == false && elem.innerText=="Turn Off Live"){
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
		if(elem.innerText=="Refresh Data") {
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

/***************************************** Hovering Refresh Button *************************************************/
$("#refreshButton").mouseenter(function(){
	if(elem.innerText=="Refresh Data") {
		display_snack_bar("Long Press to Turn On Live");
	}
});

/***************************************** Other Refresh Button Functions *************************************************/
function switch_button_name(a, b){
    if (elem.innerText==a) {
    	elem.innerText = b;
	}
    else{
    	elem.innerText = a;
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


$("#rotateAttributesButtonNext").click(function(){
  	console.log("clicked");
  	rotateAttributes("right");
});
$("#rotateAttributesButtonPrevious").click(function(){
  	console.log("clicked");
  	rotateAttributes("left");
});

$("#rotateAttributesButtonNext").mouseenter(function(){
	if (containerAttributePosition == containerAttributeNames.length-1){
		display_snack_bar("Next Attribute is " + containerAttributeNames[0]);
	}
	else{
		display_snack_bar("Next Attribute is " + containerAttributeNames[containerAttributePosition+1]);
	}

});
$("#rotateAttributesButtonPrevious").mouseenter(function(){
	if (containerAttributePosition == 0){
		display_snack_bar("Next Attribute is " +containerAttributeNames[containerAttributeNames.length -1]);
	}
	else {
		display_snack_bar("Next Attribute is " + containerAttributeNames[containerAttributePosition - 1]);
	}
});

function rotateAttributes(arrow){
	console.log("clicked");
  	var previousContainer = document.getElementById(containerAttributeNames[containerAttributePosition]);

  	if (arrow =="right"){
  		containerAttributePosition++;
  		if (containerAttributePosition == containerAttributeNames.length){
			containerAttributePosition =0;
  		}
	}else{
  		if (containerAttributePosition == 0){
			containerAttributePosition = containerAttributeNames.length;
  		}
  		containerAttributePosition--;
	}


  	console.log("now in "+ containerAttributeNames[containerAttributePosition])
  	var currentContainer = document.getElementById(containerAttributeNames[containerAttributePosition]);


	if (currentContainer.style.display === "none") {
	currentContainer.style.display = "";
	} else {
	currentContainer.style.display = "none";
	}
	if (previousContainer.style.display === "none") {
	previousContainer.style.display = "";
	} else {
	previousContainer.style.display = "none";
	}

	main_display();//display again to fit in the container

}





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