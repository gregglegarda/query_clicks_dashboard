console.log("DECLARE PATHS AND UI");

/*************************************************************
						Paths
*************************************************************/
function declare_paths_global(){
	console.log("declare_paths_global");
	window.dataLogPath = 'manipulation/monthlyqueries.log';
	window.csvDataPath = 'manipulation/csvData.log';
	window.convertDataToCSVFilePath = 'manipulation/convertdatatocsv.php';
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


	//for rotation of history button
	window.containerHistoryPosition = [0];
	window.containerHistoryNames = ["lineChartHistory","tableHistory"];


	//for rotation of container attributes button
	window.containerAttributePosition = 0;
	window.containerAttributeNames = ["snapshotContainer","elementsContainer","modelsContainer","locationsContainer","statsContainer", "monthsContainer", "veriftypesContainer", "activetabsContainer", "aggregatesContainer","extraContainer"];


	//for rotation of haetmaps button
	window.heatmapElementNamePosition = [0];
	window.heatmapElementNames = ["heatmapElementModel","heatmapElementLocation","heatmapElementStat","heatmapElementMonth","heatmapElementVeriftype", "heatmapElementActivetab", "heatmapElementAggregate"];

	window.heatmapModelNamePosition = [0];
	window.heatmapModelNames = ["heatmapModelElement","heatmapModelLocation","heatmapModelStat","heatmapModelMonth","heatmapModelVeriftype", "heatmapModelActivetab", "heatmapModelAggregate"];

	window.heatmapLocationNamePosition = [0];
	window.heatmapLocationNames = ["heatmapLocationElement","heatmapLocationModel","heatmapLocationStat","heatmapLocationMonth","heatmapLocationVeriftype", "heatmapLocationActivetab", "heatmapLocationAggregate"];

	window.heatmapStatNamePosition = [0];
	window.heatmapStatNames = ["heatmapStatElement","heatmapStatModel","heatmapStatLocation","heatmapStatMonth","heatmapStatVeriftype", "heatmapStatActivetab", "heatmapStatAggregate"];

	window.heatmapMonthNamePosition = [0];
	window.heatmapMonthNames = ["heatmapMonthElement","heatmapMonthModel","heatmapMonthLocation","heatmapMonthStat","heatmapMonthVeriftype", "heatmapMonthActivetab", "heatmapMonthAggregate"];

	window.heatmapVeriftypeNamePosition = [0];
	window.heatmapVeriftypeNames = ["heatmapVeriftypeElement","heatmapVeriftypeModel","heatmapVeriftypeLocation","heatmapVeriftypeStat","heatmapVeriftypeMonth", "heatmapVeriftypeActivetab", "heatmapVeriftypeAggregate"];

	window.heatmapActivetabNamePosition = [0];
	window.heatmapActivetabNames = ["heatmapActivetabElement","heatmapActivetabModel","heatmapActivetabLocation","heatmapActivetabStat","heatmapActivetabMonth", "heatmapActivetabVeriftype", "heatmapActivetabAggregate"];

	window.heatmapAggregateNamePosition = [0];
	window.heatmapAggregateNames = ["heatmapAggregateElement","heatmapAggregateModel","heatmapAggregateLocation","heatmapAggregateStat","heatmapAggregateMonth", "heatmapAggregateVeriftype", "heatmapAggregateActivetab"];

}

