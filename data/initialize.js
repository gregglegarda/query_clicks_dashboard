console.log("INITIALIZE PATHS AND UI");

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

