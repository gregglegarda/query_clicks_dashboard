
console.log("MAIN");

/*******************************************************************************************
										Synchronous Functions
*******************************************************************************************/
//declare paths and ui outside refresh_data
async function initialize_paths_and_ui() {
//***************** Declaration of Paths and UI Variables **************************
	//declarepathsandui.js script
	declare_paths_global();
	declare_ui_variabes();

	//uibuttonshistory.js script
	historyButtonsDeclare("History",containerHistoryNames,containerHistoryPosition);

	//displayheatmap.js
	heatmapButtonsDeclare("Elements",heatmapElementNames,heatmapElementNamePosition);
	heatmapButtonsDeclare("Models",heatmapModelNames,heatmapModelNamePosition);
	heatmapButtonsDeclare("Locations",heatmapLocationNames,heatmapLocationNamePosition);
	heatmapButtonsDeclare("Stats",heatmapStatNames,heatmapStatNamePosition);
	heatmapButtonsDeclare("Months",heatmapMonthNames,heatmapMonthNamePosition);
	heatmapButtonsDeclare("Veriftypes",heatmapVeriftypeNames,heatmapVeriftypeNamePosition);
	heatmapButtonsDeclare("Activetabs",heatmapActivetabNames,heatmapActivetabNamePosition);
	heatmapButtonsDeclare("Aggregates",heatmapAggregateNames,heatmapAggregateNamePosition);
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
		//load_data_0(dataLogPath);
		//load_data_1(dataLogPath);
		//load_data_some(dataLogPath);
		load_data_many(dataLogPath);
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

		process_heatmaps("Element","Models", heatmapElementModel);
		process_heatmaps("Element","locations", heatmapElementLocation);
		process_heatmaps("Element","stats", heatmapElementStat);
		process_heatmaps("Element","Months", heatmapElementMonth);
		process_heatmaps("Element","veriftype", heatmapElementVeriftype);
		process_heatmaps("Element","activeTab", heatmapElementActivetab);
		process_heatmaps("Element","aggregate", heatmapElementAggregate);

		process_heatmaps("Models","Element", heatmapModelElement);
		process_heatmaps("Models","locations", heatmapModelLocation);
		process_heatmaps("Models","stats", heatmapModelStat);
		process_heatmaps("Models","Months", heatmapModelMonth);
		process_heatmaps("Models","veriftype", heatmapModelVeriftype);
		process_heatmaps("Models","activeTab", heatmapModelActivetab);
		process_heatmaps("Models","aggregate", heatmapModelAggregate);

		process_heatmaps("locations","Element", heatmapLocationElement);
		process_heatmaps("locations","Models", heatmapLocationModel);
		process_heatmaps("locations","stats", heatmapLocationStat);
		process_heatmaps("locations","Months", heatmapLocationMonth);
		process_heatmaps("locations","veriftype", heatmapLocationVeriftype);
		process_heatmaps("locations","activeTab", heatmapLocationActivetab);
		process_heatmaps("locations","aggregate", heatmapLocationAggregate);

		process_heatmaps("stats","Element", heatmapStatElement);
		process_heatmaps("stats","Models", heatmapStatModel);
		process_heatmaps("stats","locations", heatmapStatLocation);
		process_heatmaps("stats","Months", heatmapStatMonth);
		process_heatmaps("stats","veriftype", heatmapStatVeriftype);
		process_heatmaps("stats","activeTab", heatmapStatActivetab);
		process_heatmaps("stats","aggregate", heatmapStatAggregate);

		process_heatmaps("Months","Element", heatmapMonthElement);
		process_heatmaps("Months","Models", heatmapMonthModel);
		process_heatmaps("Months","locations", heatmapMonthLocation);
		process_heatmaps("Months","stats", heatmapMonthStat);
		process_heatmaps("Months","veriftype", heatmapMonthVeriftype);
		process_heatmaps("Months","activeTab", heatmapMonthActivetab);
		process_heatmaps("Months","aggregate", heatmapMonthAggregate);

		process_heatmaps("veriftype","Element", heatmapVeriftypeElement);
		process_heatmaps("veriftype","Models", heatmapVeriftypeModel);
		process_heatmaps("veriftype","locations", heatmapVeriftypeLocation);
		process_heatmaps("veriftype","stats", heatmapVeriftypeStat);
		process_heatmaps("veriftype","Months", heatmapVeriftypeMonth);
		process_heatmaps("veriftype","activeTab", heatmapVeriftypeActivetab);
		process_heatmaps("veriftype","aggregate", heatmapVeriftypeAggregate);

		process_heatmaps("activeTab","Element", heatmapActivetabElement);
		process_heatmaps("activeTab","Models", heatmapActivetabModel);
		process_heatmaps("activeTab","locations", heatmapActivetabLocation);
		process_heatmaps("activeTab","stats", heatmapActivetabStat);
		process_heatmaps("activeTab","Months", heatmapActivetabMonth);
		process_heatmaps("activeTab","veriftype", heatmapActivetabVeriftype);
		process_heatmaps("activeTab","aggregate", heatmapActivetabAggregate);

		process_heatmaps("aggregate","Element", heatmapAggregateElement);
		process_heatmaps("aggregate","Models", heatmapAggregateModel);
		process_heatmaps("aggregate","locations", heatmapAggregateLocation);
		process_heatmaps("aggregate","stats", heatmapAggregateStat);
		process_heatmaps("aggregate","Months", heatmapAggregateMonth);
		process_heatmaps("aggregate","veriftype", heatmapAggregateVeriftype);
		process_heatmaps("aggregate","activeTab", heatmapAggregateActivetab);


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



