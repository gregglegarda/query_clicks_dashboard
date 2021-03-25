
console.log("MAIN");

/*******************************************************************************************
										Synchronous Functions
*******************************************************************************************/
//declare paths and ui outside refresh_data
async function initialize_paths_and_ui() {
//***************** Declaration of Paths and UI Variables **************************
	//globaldeclarations.js script
	declare_paths_global();
	declare_ui_variabes();
}


//declare synchronous promises for refreshing
async function refresh_data(){

	//***************** Declaration of Loading and Preprocessing Variables **************************
	let myPromise1 = new Promise(function(myResolve, myReject) {
		//globaldeclarations.js script
		declare_loading_global_variabes();
		declare_preprocessing_global_variabes();
		declare_processing_global_variabes();


	});
	
	
	//**************************** Loading Data ********************************************
	let myPromise2 = new Promise(function(myResolve, myReject) {
		//load raw data into string format
		//load_data(dataLogPath);
		load_data_fake(dataLogPath);
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
		//export_data_to_csv(dataFrameCSV);
	});

	//***************************** Processing ****************************************
	let myPromise6 = new Promise(function(myResolve, myReject) {
		//process ing data to be connected to front end display
		process_raw_values();
		process_dates("querydate");
		process_attributes("Element", arrayOfElementNames,arrayOfElementCounts,arrayOfElementPercent);
		process_attributes("Models", arrayOfModelNames,arrayOfModelCounts,arrayOfModelPercent);
		process_attributes("locations", arrayOfLocationNames,arrayOfLocationCounts,arrayOfLocationPercent);
		process_attributes("stats", arrayOfStatNames,arrayOfStatCounts,arrayOfStatPercent);
		process_attributes("Months", arrayOfMonthNames,arrayOfMonthCounts,arrayOfMonthPercent);
		process_attributes("veriftype", arrayOfVeriftypeNames,arrayOfVeriftypeCounts,arrayOfVeriftypePercent);
		process_attributes("activeTab", arrayOfActivetabNames,arrayOfActivetabCounts,arrayOfActivetabPercent);
		process_attributes("aggregate", arrayOfAggregateNames,arrayOfAggregateCounts,arrayOfAggregatePercent);

		process_heatmaps("Element","veriftype", heatmapElementVerif);

	});

	//***************************** Display ****************************************
	let myPromise7 = new Promise(function(myResolve, myReject) {
		//call main display
		main_display();
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

	let myPromiseA = new Promise(function (myResolve, myReject) {
		//globaldeclarations.js script
		initialize_paths_and_ui();
	});
	let myPromiseB = new Promise(function (myResolve, myReject) {
		//main.js script
		refresh_data();
	});

	//call the promises in sequence
	myPromiseA
	.then(myPromiseB);


	//setTimeout(function(){
    //	console.log("onload_function set timeout loop");
	//  	refresh_data();
  	//},1000)


};



