console.log("GLOBAL DECLARE");


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
	window.arrayOfElementNames = [];
	window.arrayOfElementCounts = [];
	//window.totalOfElementCounts = totalNumberOfClicks;
	window.arrayOfElementPercent = [];

	// models
	window.arrayOfModelNames = [];
	window.arrayOfModelCounts = [];
	window.totalOfModelCounts = 0;
	window.arrayOfModelPercent = [];


	// locations
	window.arrayOfLocationNames = [];
	window.arrayOfLocationCounts = [];
	window.totalOfLocationCounts = 0;
	window.arrayOfLocationPercent = [];

	//stats
	window.arrayOfStatNames = [];
	window.arrayOfStatCounts = [];
	window.totalOfStatCounts = 0;
	window.arrayOfStatPercent = [];

	//months
	window.arrayOfMonthNames = [];
	window.arrayOfMonthCounts = [];
	window.totalOfMonthCounts = 0;
	window.arrayOfMonthPercent = [];

	//veriftype
	window.arrayOfVeriftypeNames = [];
	window.arrayOfVeriftypeCounts = [];
	window.totalOfVeriftypeCounts = 0;
	window.arrayOfVeriftypePercent = [];

	//activetab
	window.arrayOfActivetabNames = [];
	window.arrayOfActivetabCounts = [];
	window.totalOfActivetabCounts = 0;
	window.arrayOfActivetabPercent = [];


	//aggregate
	window.arrayOfAggregateNames = [];
	window.arrayOfAggregateCounts = [];
	window.totalOfAggregateCounts = 0;
	window.arrayOfAggregatePercent = [];

	//2 dimensions
	window.heatmapElementVerif =[];
	window.heatmapElementModel =[];
	window.heatmapModelLocation =[];
	window.heatmapModelMonth =[];


}







