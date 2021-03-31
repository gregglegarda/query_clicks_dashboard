console.log("BUTTONS HISTORY FUNCTIONS");

/*******************************************************************************************
										 HISTORY BUTTON Functions
*******************************************************************************************/

function historyButtonsDeclare(type, historyTypeNames, heistoryTypeNamePosition){
	$("#rotate" + type +"ButtonNext").click(function(){
  		console.log("clicked");
  		rotateHistory("right",historyTypeNames,heistoryTypeNamePosition);
	});
	$("#rotate" + type +"ButtonPrevious").click(function(){
  		console.log("clicked");
  		rotateHistory("left",historyTypeNames,heistoryTypeNamePosition);
	});
}

function rotateHistory(arrow, heatmapAttributeTypeNames, heatmapAttributeTypeNamePosition) {
 	var previousHeatmap = document.getElementById(heatmapAttributeTypeNames[heatmapAttributeTypeNamePosition[0]]);

 	if (arrow =="right"){
 		var temp = heatmapAttributeTypeNamePosition[0];
 		temp++;
  		heatmapAttributeTypeNamePosition.length = 0;
  		heatmapAttributeTypeNamePosition.push(temp);
  		if (heatmapAttributeTypeNamePosition[0] == heatmapAttributeTypeNames.length){
  			heatmapAttributeTypeNamePosition.length = 0;
  			heatmapAttributeTypeNamePosition.push(0);;
  		}
	}else{
  		if (heatmapAttributeTypeNamePosition[0] == 0){
  			heatmapAttributeTypeNamePosition.length = 0;
  			heatmapAttributeTypeNamePosition.push(heatmapAttributeTypeNames.length);

  		console.log(heatmapAttributeTypeNamePosition);
  		}
  		var temp = heatmapAttributeTypeNamePosition[0];
  		temp--;
  		heatmapAttributeTypeNamePosition.length = 0;
  		heatmapAttributeTypeNamePosition.push(temp);
  		console.log(heatmapAttributeTypeNamePosition);
	}
 	  	//console.log("now in "+ heatmapAttributeTypeNames[heatmapAttributeTypeNamePosition[0]]+heatmapAttributeTypeNamePosition[0]);
  	var currentHeatmap = document.getElementById(heatmapAttributeTypeNames[heatmapAttributeTypeNamePosition[0]]);

	console.log(currentHeatmap);
	if (currentHeatmap.style.display === "none") {
	currentHeatmap.style.display = "";
	} else {
	currentHeatmap.style.display = "none";
	}
	if (previousHeatmap.style.display === "none") {
	previousHeatmap.style.display = "";
	} else {
	previousHeatmap.style.display = "none";
	}

	main_display();//display again to fit in the container

}
