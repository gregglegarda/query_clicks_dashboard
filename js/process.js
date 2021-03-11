
/*******************************************************************************************
										More Processing Functions
*******************************************************************************************/

function setAndConnectVariablesToDisplay(){
	/********** Set Global Value ***********/
	console.log("setAndConnectVariablesToDisplay");
	//sets the  value of the global variables to be connected to the front end later
	totalNumberOfClicks = arrayOfObjectsData.length; // sets the refresh value. on-load value is set on globaldeclarations.js


	//sets count of each element in an array of objects
	for (var each of elementArrayNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		arrayOfElementCounts.push({ [each] : valuetInObjectCounter("Element", each)});
    };


	/********** Connect Global Value ***********/
	// connects the global variables to the front end
	$("#total").text(totalNumberOfClicks);
	for (var obj of arrayOfElementCounts) {
		for (const key in obj){
			//$("#elementTotals"+ [key]).text(obj[key]);
			$("#elementTotals"+ [key]).attr("data-original-title", obj[key]);
			$("#elementTotals"+ [key]).attr("style", "height: 50%;");
			$("#elementTotals"+ [key]).html("50%");




		}
	}


}




// counter function
function valuetInObjectCounter(key, value){
	let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	return count;
}
