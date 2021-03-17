console.log("PROCESS")
/*******************************************************************************************
										PROCESS RAW
*******************************************************************************************/

function process_raw_values(){
	/********** Set Global Value ***********/
	console.log("process_raw_values");
	//sets the  value of the global variables to be connected to the front end later
	totalNumberOfClicks = arrayOfObjectsData.length; // sets the refresh value. on-load value is set on globaldeclarations.js
	tempTotalOfCounts = arrayOfObjectsData.length;
}


/*******************************************************************************************
										PROCESS ATTRIBUTES
*******************************************************************************************/

function process_attributes(attributeType, arrayOfNames,arrayOfCounts,arrayOfPercent, attribute_counter){
	console.log("process_"+ attributeType);
	//sets count of each element in an array of objects
	for (var each of arrayOfNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		arrayOfCounts.push({ [each] : attribute_counter(attributeType, each)});
    };

	//sets the average count of each element in an array of objects
	for (var each of arrayOfNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		arrayOfPercent.push({ [each] : attribute_counter(attributeType, each)/tempTotalOfCounts});
    };
}
function attribute_counter(){


}























/*******************************************************************************************
										PROCESS ELEMENTS
*******************************************************************************************/

function process_elements(){
	console.log("process_elements");
	//sets count of each element in an array of objects
	for (var each of arrayOfElementNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		arrayOfElementCounts.push({ [each] : element_counter("Element", each)});
    };

	//sets the average count of each element in an array of objects
	for (var each of arrayOfElementNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		arrayOfElementPercent.push({ [each] : element_counter("Element", each)/totalNumberOfClicks});
    };
}
/********************************* ELEMENTS COUNTER ***************************************/
// counter function for counts of each element
function element_counter(key, value){
	let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	totalOfElementCounts = arrayOfObjectsData.length;
	return count;
}









/*******************************************************************************************
										PROCESS MODELS
*******************************************************************************************/
function process_models(){
	console.log("process_models");

	//sets count of each model in an array of objects
	for (var each of arrayOfModelNames) {
		//each is the model name, and the valueInObjectCounter function is the count of the model
		//[each] is a new feature to set variable as the key of object.
		arrayOfModelCounts.push({ [each] : model_counter("Models", each)});
    };

	//sets the average count of each model in an array of objects
	for (var each of arrayOfModelNames) {
		//each is the model name, and the valueInObjectCounter function is the count of the model
		//[each] is a new feature to set variable as the key of object.
		arrayOfModelPercent.push({ [each] : model_counter("Models", each)/totalOfModelCounts});
    };
}
/******************************* MODELS COUNTER************************************/
// counter function for counts of each model
function model_counter(key, value){
	totalOfModelCounts = 0; // reset the number
	let count = 0;
	for (const obj of arrayOfObjectsData) {
		//console.log(obj[key]);
		for (const val of obj[key]) {
			//console.log(typeof  val);
			if (val === value) {
				count++;
			}
			totalOfModelCounts++;
		}
	}
	//let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	tempTotalOfCounts = totalOfModelCounts;
	return count;
}





/*******************************************************************************************
										PROCESS LOCATIONS
*******************************************************************************************/
function process_locations(){
	console.log("process_locations");

	//sets count of each location in an array of objects
	for (var each of arrayOfLocationNames) {
		//each is the location name, and the valueInObjectCounter function is the count of the location
		//[each] is a new feature to set variable as the key of object.
		arrayOfLocationCounts.push({ [each] : location_counter("locations", each)});
    };

	//sets the average count of each location in an array of objects
	for (var each of arrayOfLocationNames) {
		//each is the location name, and the valueInObjectCounter function is the count of the location
		//[each] is a new feature to set variable as the key of object.
		arrayOfLocationPercent.push({ [each] : model_counter("locations", each)/totalOfLocationCounts});
    };
}
/******************************* LOCATIONS COUNTER************************************/
// counter function for counts of each location
function location_counter(key, value){
	totalOfLocationCounts = 0; // reset the number
	let count = 0;
	for (const obj of arrayOfObjectsData) {
		//console.log(obj[key]);
		for (const val of obj[key]) {
			//console.log(typeof  val);
			if (val === value) {
				count++;
			}
			totalOfLocationCounts++;
		}
	}
	//let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	tempTotalOfCounts = totalOfLocationCounts;
	return count;
}




/*******************************************************************************************
										PROCESS STATS
*******************************************************************************************/
function process_stats(){
	console.log("process_stats");

	//sets count of each stat in an array of objects
	for (var each of arrayOfStatNames) {
		//each is the stat name, and the valueInObjectCounter function is the count of the stat
		//[each] is a new feature to set variable as the key of object.
		arrayOfStatCounts.push({ [each] : stat_counter("stats", each)});
    };

	//sets the average count of each element in an array of objects
	for (var each of arrayOfStatNames) {
		//each is the stat name, and the valueInObjectCounter function is the count of the stat
		//[each] is a new feature to set variable as the key of object.
		arrayOfStatPercent.push({ [each] : stat_counter("stats", each)/totalOfStatCounts});
    };
}
/******************************* STATS COUNTER************************************/
// counter function for counts of each stat
function stat_counter(key, value){
	totalOfStatCounts = 0; // reset the number
	let count = 0;
	for (const obj of arrayOfObjectsData) {
		//console.log(obj[key]);
		for (const val of obj[key]) {
			//console.log(typeof  val);
			if (val === value) {
				count++;
			}
			totalOfStatCounts++;
		}
	}
	//let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	tempTotalOfCounts = totalOfStatCounts;
	return count;
}




