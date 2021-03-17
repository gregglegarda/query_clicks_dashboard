
console.log("MAIN");

/*******************************************************************************************
										Synchronous Functions
*******************************************************************************************/

//declare synchronous promises
async function refresh_data(){


	//***************** Declaration of Global Variables and Paths **************************
	let myPromise1 = new Promise(function(myResolve, myReject) {
		//globaldeclarations.js script
		declare_paths_global();
		declare_loading_global_variabes();
		declare_preprocessing_global_variabes();
		declare_processing_global_variabes();
		declare_ui_variabes();

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
		//process_elements();
		//process_models();
		//process_locations();
		//process_stats();

		process_attributes("Element", arrayOfElementNames,arrayOfElementCounts,arrayOfElementPercent);
		process_attributes("Models", arrayOfModelNames,arrayOfModelCounts,arrayOfModelPercent);
		process_attributes("locations", arrayOfLocationNames,arrayOfLocationCounts,arrayOfLocationPercent);
		process_attributes("stats", arrayOfStatNames,arrayOfStatCounts,arrayOfStatPercent);
		process_attributes("Months", arrayOfMonthNames,arrayOfMonthCounts,arrayOfMonthPercent);
		process_attributes("veriftype", arrayOfVeriftypeNames,arrayOfVeriftypeCounts,arrayOfVeriftypePercent);
		process_attributes("activeTab", arrayOfActivetabNames,arrayOfActivetabCounts,arrayOfActivetabPercent);
		process_attributes("aggregate", arrayOfAggregateNames,arrayOfAggregateCounts,arrayOfAggregatePercent);


	});

	//***************************** Display ****************************************
	let myPromise7 = new Promise(function(myResolve, myReject) {
		//plot histogram to display
		display_raw_values();

		display_histogram("elementHistogram", "Element",arrayOfElementCounts);
		display_histogram("modelHistogram", "Model",arrayOfModelCounts);
		display_histogram("locationHistogram", "Location",arrayOfLocationCounts);
		display_histogram("statHistogram", "Stat",arrayOfStatCounts);
		display_histogram("monthHistogram", "Month",arrayOfMonthCounts);
		display_histogram("veriftypeHistogram", "Veriftype",arrayOfVeriftypeCounts);
		display_histogram("activetabHistogram", "Activetab",arrayOfActivetabCounts);
		display_histogram("aggregateHistogram", "Aggregate",arrayOfAggregateCounts);

		display_donut("elementDonut", "Element", arrayOfElementPercent);
		display_donut("modelDonut", "Model", arrayOfModelPercent);
		display_donut("locationDonut", "Location", arrayOfLocationPercent);
		display_donut("statDonut", "Stat", arrayOfStatPercent);
		display_donut("monthDonut", "Month", arrayOfMonthPercent);
		display_donut("veriftypeDonut", "Veriftype", arrayOfVeriftypePercent);
		display_donut("activetabDonut", "Activetab", arrayOfActivetabPercent);
		display_donut("aggregateDonut", "Aggregate", arrayOfAggregatePercent);

		display_heatmap(arrayOfElementPercent, arrayOfModelPercent);
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

	setTimeout(function(){
    	console.log("onload_function set timeout loop");
	  	refresh_data();
  	},1000)


};



