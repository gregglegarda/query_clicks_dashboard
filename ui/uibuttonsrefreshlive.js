console.log("REFRESH BUTTONS FUNCTIONS");
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

