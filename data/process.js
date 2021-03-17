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

function process_attributes(attributeType, arrayOfNames,arrayOfCounts,arrayOfPercent){
	console.log("process_"+ attributeType);

	//sets count of each element in an array of objects
	for (var each of arrayOfNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		if (attributeType == "Element" || attributeType == "veriftype" || attributeType == "activeTab"|| attributeType == "aggregate"){
			arrayOfCounts.push({ [each] : non_array_attribute_counter(attributeType, each)});
		}
		else{
			arrayOfCounts.push({ [each] : attribute_counter(attributeType, each)});
		}
    };

	//sets the average count of each element in an array of objects
	for (var each of arrayOfNames) {
		//each is the element name, and the valueInObjectCounter function is the count of the element
		//[each] is a new feature to set variable as the key of object.
		if (attributeType == "Element"|| attributeType == "veriftype"|| attributeType == "activeTab"|| attributeType == "aggregate"){
			arrayOfPercent.push({[each]: non_array_attribute_counter(attributeType, each) / tempTotalOfCounts});
		}
		else {
			arrayOfPercent.push({[each]: attribute_counter(attributeType, each) / tempTotalOfCounts});
		}
    };
}
function attribute_counter(key, value){
	var totalOfCounts = 0; // reset the number
	let count = 0;
	for (const obj of arrayOfObjectsData) {
		//console.log(obj[key]);
		for (const val of obj[key]) {
			//console.log(typeof  val);
			if (val === value) {
				count++;
			}
			totalOfCounts++;
		}
	}
	//let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	tempTotalOfCounts = totalOfCounts;
	return count;
}


/********************************* ELEMENTS COUNTER ***************************************/
// counter function for counts of each element because its a string instead of an array
function non_array_attribute_counter(key, value){
	let count = arrayOfObjectsData.filter(item => item[key] === value).length;
	return count;
}






