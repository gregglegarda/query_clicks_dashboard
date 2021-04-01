console.log("PROCESSING")
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

	for (const obj of arrayOfObjectsData) {
		stringToArray(obj, attributeType);
		obj[attributeType].forEach(function (item, index) {
  			if (!(arrayOfNames.includes(item))){
				arrayOfNames.push(item);
			}
		});
	}

	//sets count of each element in an array of objects
	for (var each of arrayOfNames) {
			arrayOfCounts.push({ [each] : attribute_counter(attributeType, each)});
    };

	//sets the average count of each element in an array of objects
	for (var each of arrayOfNames) {
			arrayOfPercent.push({[each]: attribute_counter(attributeType, each) / tempTotalOfCounts});
    };
}
function attribute_counter(key, value){
	var totalOfCounts = 0; // reset the number
	let count = 0;
	for (const obj of arrayOfObjectsData) {
		//console.log(obj[key]);
		stringToArray(obj, key);
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

function stringToArray(ob, keyA){
	if (typeof ob[keyA] == "string"){
		//first remove
		ob[keyA]= ob[keyA].split(/'/).join('');
		ob[keyA]= ob[keyA].split(', ');


		//change it to array
		//ob[keyA] = [ob[keyA]];
			console.log(ob[keyA]);

	}
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
console.log("process_heatmaps ("+attributetypeX+"-"+attributetypeY+ ")");

	//if array type process further
	var tempArray=[];
	for (var object of arrayOfObjectsData) {
		stringToArray(object, attributetypeY);
		stringToArray(object, attributetypeX);
		for (var elementInX of object[attributetypeX]) {
			for (var elementInY of object[attributetypeY]) {
				tempArray.push({[attributetypeX]: elementInX, [attributetypeY]: elementInY});
			}
		}
    };
	//putting all the x and y in an array of objects
	for (const obj of tempArray) {
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
}