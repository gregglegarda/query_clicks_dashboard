console.log("MAIN DISPLAY FUNCTIONS");
/*******************************************************************************************
										Display Functions
*******************************************************************************************/

function main_display(){

		display_raw_values();

		display_circle("todayscountsDonut", "Today's Count", todaysDateCounts.toString());
		display_circle("averagedailycountsDonut", "Average Daily Count", avgNumberOfClicks.toString());
		display_circle("overallcountsDonut", "Overall Count", totalNumberOfClicks.toString());

		display_line("querydateLine", "Querydate", arrayOfDateCounts, arrayOfDateAverage, arrayOfCumulativeDateCounts);
		display_table();

		display_histogram("elementHistogram", "Element",arrayOfElementCounts);
		display_histogram("modelHistogram", "Model",arrayOfModelCounts);
		display_histogram("locationHistogram", "Location",arrayOfLocationCounts);
		display_histogram("statHistogram", "Stat",arrayOfStatCounts);
		display_histogram("monthHistogram", "Month",arrayOfMonthCounts);
		display_histogram("veriftypeHistogram", "Veriftype",arrayOfVeriftypeCounts);
		display_histogram("activetabHistogram", "Activetab",arrayOfActivetabCounts);
		display_histogram("aggregateHistogram", "Aggregate",arrayOfAggregateCounts);

		display_donut("elementDonut", "Element", arrayOfElementPercent);
		display_donut("modelDonut", "Model", arrayOfModelPercent);
		display_donut("locationDonut", "Location", arrayOfLocationPercent);
		display_donut("statDonut", "Stat", arrayOfStatPercent);
		display_donut("monthDonut", "Month", arrayOfMonthPercent);
		display_donut("veriftypeDonut", "Veriftype", arrayOfVeriftypePercent);
		display_donut("activetabDonut", "Activetab", arrayOfActivetabPercent);
		display_donut("aggregateDonut", "Aggregate", arrayOfAggregatePercent);

		display_heatmap(heatmapElementVerif);

}


