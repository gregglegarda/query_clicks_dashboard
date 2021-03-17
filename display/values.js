console.log("VALUES FUNCTIONS");
/*******************************************************************************************
										Plotly Values Functions
*******************************************************************************************/

function display_raw_values(){
	console.log("display_raw_values");

	/********** Connect Global Value ***********/
	// connects the global variables to the front end

	$("#total").text("Total Clicks: " + totalNumberOfClicks.toString());
	$("#avgclicks").text("Average Daily Clicks: " +avgNumberOfClicks.toString());



}


