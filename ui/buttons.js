console.log("BUTTONS FUNCTIONS");
/*******************************************************************************************
										REFRESH/LIVE BUTTON Functions
*******************************************************************************************/


$("#refreshButton").mouseup(function(){
	clearTimeout(pressTimer);
	if(longPress == false && elem.value=="Turn Off Live"){
		switch_button_name("Turn Off Live", "Refresh Data");
		auto_refresh(false);
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
		}
		else{
			switch_button_name("Turn Off Live","Refresh Data");
			auto_refresh(false);
		}
		longPress = true;
	},1000);
	return false;
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




/*******************************************************************************************
										ROTATE ATTRIBUTE BUTTON Functions
*******************************************************************************************/


$("#rotateAttributesButton").click(function(){
  	console.log("clicked");
})