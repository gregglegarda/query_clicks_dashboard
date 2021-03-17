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
						Loading Variables
*************************************************************/
function declare_loading_global_variabes() {
	console.log("declare_loading_global_variabes");
	//variables of loading
	window.stringData;
	window.elem = document.getElementById("refreshButton");
	window.pressTimer;
	window.longPress = false;

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

	//elements
	window.arrayOfElementNames = ["cg", "cl", "dp", "mn", "mx", "po", "qpf06", "sn", "tt", "wd", "wg", "ws","wh", "vs"];
	window.arrayOfElementCounts = [];
	window.totalOfElementCounts = totalNumberOfClicks;
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


}



/*************************************************************
						UI Variables
*************************************************************/

function declare_ui_variabes() {
	console.log("declare_ui_variabes");
	//variables of ui
	window.autoRefresh;


}




