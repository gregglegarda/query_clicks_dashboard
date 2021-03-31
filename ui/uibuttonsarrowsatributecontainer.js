console.log("BUTTONS ARROWS ATTRIBUTE CONTAINER");


/*******************************************************************************************
										ARROWS ATTRIBUTE BUTTON Functions
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






