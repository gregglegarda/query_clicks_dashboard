
console.log("MAIN");

/*******************************************************************************************
										Synchronous Functions
*******************************************************************************************/

//declare synchronous promises
async function refresh_data(){


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
	let myPromise6 = new Promise(function(myResolve, myReject) {
		//process ing data to be connected to front end display
		setAndConnectVariablesToDisplay();
	});
	let myPromise7 = new Promise(function(myResolve, myReject) {
		//plot histogram to display
		plot_histogram();
	});
	
	
	//call the promises in sequence
	myPromise1
	.then(myPromise2)
	.then(myPromise3)
	.then(myPromise4)
	.then(myPromise5)
	.then(myPromise6)
	.then(myPromise7);

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



