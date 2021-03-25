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

/*******************************************************************************************
										PROCESS DATES
*******************************************************************************************/

function process_dates(attributeType){
	console.log("process_"+ attributeType);

	//today's date
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	//putting all the dates in an array of All Dates
	var allDatesArray = [];
	for (const obj of arrayOfObjectsData) {
		for (const val of obj[attributeType]) {
			allDatesArray.push(val);
			if (val == today){
				todaysDateCounts++;
			}
		}
	}

	//creating a dictionary of the counts of each date
	allDatesArray.reduce(function(respObj, value) {
		value = value.substring(0, 10);
		if (!respObj[value]) {
			respObj[value] = {
				[value]:1
			};
			arrayOfDateCounts.push(respObj[value])
		} else {
			respObj[value][value]++;
		}
		return respObj;
	}, {});

	//creating a dictionary for the average of each day. more like a moving average
	avgNumberOfClicks = (arrayOfObjectsData.length/arrayOfDateCounts.length).toFixed(2);
	var tempTotalDates = 0;
	var tempPositionOfDate = 0;
	for(var obj of arrayOfDateCounts){
		tempPositionOfDate++;
		tempTotalDates = tempTotalDates +Object.values(obj)[0] ;
		//console.log(JSON.stringify(Object.keys(obj)[0]));
		arrayOfDateAverage.push({[Object.keys(obj)[0]]: tempTotalDates/tempPositionOfDate});
		arrayOfCumulativeDateCounts.push({[Object.keys(obj)[0]]: tempTotalDates});
	}
	//console.log(JSON.stringify(arrayOfDateAverage));
}

/*******************************************************************************************
										PROCESS HEATMAPS
*******************************************************************************************/

function process_heatmaps(attributetypeX,attributetypeY, arrayHeatmapData){
console.log("process_heatmaps_"+attributetypeX+"_"+attributetypeY);

//putting all the x and y in an array of x and y
	for (const obj of arrayOfObjectsData) {
		if(arrayHeatmapData.some(arrayHeatmapData => ((arrayHeatmapData['group'] == obj[attributetypeX])&& (arrayHeatmapData['variable'] == obj[attributetypeY])))){
			for (const objHeatmap of arrayHeatmapData) {
				if((objHeatmap['group']==obj[attributetypeX])&&(objHeatmap['variable']==obj[attributetypeY])){
					objHeatmap['value'] = objHeatmap['value']+1;
				}
			}
		}else{
			arrayHeatmapData.push({"group": obj[attributetypeX], "variable": obj[attributetypeY], "value":1});
		}
	}
	console.log(JSON.stringify(arrayHeatmapData));

}






