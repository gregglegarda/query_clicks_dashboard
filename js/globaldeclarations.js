console.log("GLOBAL DECLARE");


/*************************************************************
						Global Variables
*************************************************************/
function declare_global_variabes(){
	console.log("declare_global_variabes");	
	//variables of loading and preprocessing
	window.stringData;
	window.arrayOfObjectsData=[];
	window.dataFrameCSV;
	window.elementArrayNames = ["cg", "cl", "dp", "mn", "mx", "po", "qpf06", "sn", "tt", "wd", "wg", "ws","wh", "vs"];
	
	
	
	
	
	
	
	//front end variables (variables associated with data to be displayed in front end)
	window.totalNumberOfClicks = 123; //for initializing the on-load number (value doesnt matter as long as its a number)
	window.arrayOfElementCounts = [];
}



/*************************************************************
						Paths
*************************************************************/
function declare_paths(){
	console.log("declare_paths");
	window.dataLogPath = 'log/monthlyqueries.log';
	window.csvDataPath = 'csvData.log';
	window.convertDataToCSVFilePath = 'php/convertdatatocsv.php';
}


/*************************************************************
						Packages
*************************************************************/






