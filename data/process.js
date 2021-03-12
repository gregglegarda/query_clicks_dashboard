console.log("PROCESS")
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

	//sets the average count of each element in an array of objects
	for (var each of elementArrayNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		arrayOfElementAverage.push({ [each] : valuetInObjectCounter("Element", each)/totalNumberOfClicks});
    };


}




// counter function for counts of each element
function valuetInObjectCounter(key, value){
	let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	return count;
}
