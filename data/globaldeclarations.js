console.log("GLOBAL DECLARE");

/*************************************************************
						Paths
*************************************************************/
function declare_paths_global(){
	console.log("declare_paths_global");
	window.dataLogPath = 'data/monthlyqueries.log';
	window.csvDataPath = 'data/csvData.log';
	window.convertDataToCSVFilePath = 'data/convertdatatocsv.php';
}

/*************************************************************
						UI Variables
*************************************************************/

function declare_ui_variabes() {
	console.log("declare_ui_variabes");
	//variables of refresh button
	window.autoRefresh;
	window.elem = document.getElementById("refreshButton");
	window.pressTimer;
	window.longPress = false;

	//for rotation of container attributes button
	window.containerAttributePosition = 0;
	window.containerAttributeNames = ["snapshotContainer","elementsContainer","modelsContainer","locationsContainer","statsContainer", "monthsContainer", "veriftypesContainer", "activetabsContainer", "aggregatesContainer","extraContainer"];
}



/*************************************************************
						Loading Variables
*************************************************************/
function declare_loading_global_variabes() {
	console.log("declare_loading_global_variabes");
	//variables of loading
	window.stringData;


}


/*************************************************************
						Preprocessing Variables
*************************************************************/
function declare_preprocessing_global_variabes() {
	console.log("declare_preprocessing_global_variabes");
	//variables of preprocessing
	window.arrayOfObjectsData = [];
	window.dataFrameCSV;

}

/*************************************************************
						Processing Variables
*************************************************************/
function declare_processing_global_variabes(){
	console.log("declare_processing_global_variabes");
	
	//front end variables (variables associated with data to be displayed in front end)
	window.totalNumberOfClicks = 0; //for initializing the on-load number (value doesnt matter as long as its a number)
	window.avgNumberOfClicks = 0;
	window.tempTotalOfCounts = 0;// for temporary attribute total counts in processing_attributes

	//dates
	//window.arrayOfDateNames;
	window.arrayOfDateCounts = [];
	window.totalOfDateCounts = 0;
	window.todaysDateCounts = 0;
	window.arrayOfDateAverage = []; // daily averages
	window.arrayOfCumulativeDateCounts = []; // daily cumulative

	//elements
	window.arrayOfElementNames = ["cg", "cl", "dp", "mn", "mx", "po", "qpf06", "sn", "tt", "wd", "wg", "ws","wh", "vs"];
	window.arrayOfElementCounts = [];
	//window.totalOfElementCounts = totalNumberOfClicks;
	window.arrayOfElementPercent = [];

	// models
	window.arrayOfModelNames = ["blend", "blendx", "gmos", "ndfd", "wpc", "urma", "HG"];
	window.arrayOfModelCounts = [];
	window.totalOfModelCounts = 0;
	window.arrayOfModelPercent = [];


	// locations
	window.arrayOfLocationNames = ["conus", "ak", "hi", "gu", "pr"];
	window.arrayOfLocationCounts = [];
	window.totalOfLocationCounts = 0;
	window.arrayOfLocationPercent = [];

	//stats
	window.arrayOfStatNames = ["ME", "MAE", "RMSE", "POD", "FAR", "CSI", "GSS", "HSS", "BS", "FB",  "CON", "REL"];
	window.arrayOfStatCounts = [];
	window.totalOfStatCounts = 0;
	window.arrayOfStatPercent = [];

	//months
	window.arrayOfMonthNames = ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09", "2019-10",  "2019-11", "2019-12","2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10",  "2020-11", "2020-12"];
	window.arrayOfMonthCounts = [];
	window.totalOfMonthCounts = 0;
	window.arrayOfMonthPercent = [];

	//veriftype
	window.arrayOfVeriftypeNames = ["issue", "verif"];
	window.arrayOfVeriftypeCounts = [];
	window.totalOfVeriftypeCounts = 0;
	window.arrayOfVeriftypePercent = [];

	//activetab
	window.arrayOfActivetabNames = ["dailyCharts", "dailyTables","pointMaps", "gridMaps"];
	window.arrayOfActivetabCounts = [];
	window.totalOfActivetabCounts = 0;
	window.arrayOfActivetabPercent = [];


	//aggregate
	window.arrayOfAggregateNames = ["true", "false"];
	window.arrayOfAggregateCounts = [];
	window.totalOfAggregateCounts = 0;
	window.arrayOfAggregatePercent = [];


	//element-verif
	window.heatmapElementVerif =[];

}







