console.log("VALUES FUNCTIONS");
/*******************************************************************************************
										Plotly Values Functions
*******************************************************************************************/

function display_numbers_on_front(){
	var divContent = $('#total').text();
	console.log(divContent+"jhv");
		/********** Connect Global Value ***********/
	// connects the global variables to the front end

	$("#total").text("Total Clicks: " + totalNumberOfClicks.toString());
	$("#avgclicks").text("Average Daily Clicks: " +avgNumberOfClicks.toString());



}


