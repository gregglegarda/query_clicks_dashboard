console.log("VALUES FUNCTIONS");
/*******************************************************************************************
										Plotly Values Functions
*******************************************************************************************/

function display_raw_values(){
	console.log("display_raw_values");

	/********** Connect Global Value ***********/
	// connects the global variables to the front end
	$("#todayscount").text("Todays Count: " + todaysDateCounts.toString());
	$("#dailyavgcount").text("Average Daily Count: " +avgNumberOfClicks.toString());
	$("#overallcount").text("Overall Count: " + totalNumberOfClicks.toString());


}

