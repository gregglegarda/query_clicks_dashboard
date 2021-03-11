
console.log("MAIN");

/*******************************************************************************************
										Synchronous Functions
*******************************************************************************************/

//declare synchronous promises
async function load_and_preprocess(){


	//***************** Declaration of Global Variables and Paths **************************
	let myPromise1 = new Promise(function(myResolve, myReject) {
		//declare global variables
		declare_global_variabes();
		//declare paths
		declare_paths();
	});
	
	
	//**************************** Loading Data ********************************************
	let myPromise2 = new Promise(function(myResolve, myReject) {
		//load raw data into string format
		load_data(dataLogPath);
	});
	
	
	//***************************** Pre Processing ****************************************
	let myPromise3 = new Promise(function(myResolve, myReject) {
		//convert and format string data into array of objects
		convert_string_to_array_of_objects(stringData);

	});
	let myPromise4 = new Promise(function(myResolve, myReject) {
		//convert array of objects into table
		convert_array_object_to_table(arrayOfObjectsData);

	});
	let myPromise5 = new Promise(function(myResolve, myReject) {
		//export data into csv
		export_data_to_csv(dataFrameCSV);
	});
	
	
	//call the promises in sequence
	myPromise1
	.then(myPromise2)
	.then(myPromise3)
	.then(myPromise4)
	.then(myPromise5);

}



/*******************************************************************************************
										Dynamic Functions
*******************************************************************************************/

//declare synchronous promises
function refresh_data(){
	console.log("refresh data");
	//when refresh is called it reloads and processes everything in the synchronous function
	load_and_preprocess();
	
	//process ing data to be connected to front end display
	setAndConnectVariablesToDisplay();
	
	
	//plot histogram to display
	plot_histogram();
	
	//plot bar to display
	plot_bar();
	
	

}
	




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


/*******************************************************************************************
										Main Calls
*******************************************************************************************/


//call refresh Data which has synchronous function
window.onload = function() {
	console.log("kapay");
  refresh_data();
};


//load_and_preprocess();



