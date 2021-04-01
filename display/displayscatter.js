console.log("VALUES SCATTER");
/*******************************************************************************************
										Plotly Values Functions
*******************************************************************************************/

function display_scatter(){
	console.log("display_raw_values");

	/********** Connect Global Value ***********/
	// connects the global variables to the front end
	$("#todayscount").text("Todays Count: " + todaysDateCounts.toString());
	$("#dailyavgcount").text("Average Daily Count: " +avgNumberOfClicks.toString());
	$("#overallcount").text("Overall Count: " + totalNumberOfClicks.toString());


}

