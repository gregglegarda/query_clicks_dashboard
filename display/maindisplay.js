console.log("MAIN DISPLAY FUNCTIONS");
/*******************************************************************************************
										Display Functions
*******************************************************************************************/

function main_display(){

		display_raw_values();
		display_table();

		display_circle("todayscountsDonut", "Today's Count", todaysDateCounts.toString());
		display_circle("averagedailycountsDonut", "Average Daily Count", avgNumberOfClicks.toString());
		display_circle("overallcountsDonut", "Overall Count", totalNumberOfClicks.toString());

		display_line("querydateLine", "Querydate", arrayOfDateCounts, arrayOfDateAverage, arrayOfCumulativeDateCounts);


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


		display_heatmap('heatmapElementModel', heatmapElementModel,arrayOfElementNames,arrayOfModelNames);
		display_heatmap('heatmapElementLocation', heatmapElementLocation,arrayOfElementNames,arrayOfLocationNames);
		display_heatmap('heatmapElementStat', heatmapElementStat,arrayOfElementNames,arrayOfStatNames);
		display_heatmap('heatmapElementMonth', heatmapElementMonth,arrayOfElementNames,arrayOfMonthNames);
		display_heatmap('heatmapElementVeriftype', heatmapElementVeriftype,arrayOfElementNames,arrayOfVeriftypeNames);
		display_heatmap('heatmapElementActivetab', heatmapElementActivetab,arrayOfElementNames,arrayOfActivetabNames);
		display_heatmap('heatmapElementAggregate', heatmapElementAggregate,arrayOfElementNames,arrayOfAggregateNames);


		display_heatmap("heatmapModelElement", heatmapModelElement, arrayOfModelNames,arrayOfElementNames);
		display_heatmap("heatmapModelLocation", heatmapModelLocation, arrayOfModelNames,arrayOfLocationNames);
		display_heatmap("heatmapModelStat", heatmapModelStat, arrayOfModelNames,arrayOfStatNames);
		display_heatmap("heatmapModelMonth", heatmapModelMonth, arrayOfModelNames,arrayOfMonthNames);
		display_heatmap("heatmapModelVeriftype",heatmapModelVeriftype, arrayOfModelNames,arrayOfVeriftypeNames);
		display_heatmap("heatmapModelActivetab", heatmapModelActivetab, arrayOfModelNames, arrayOfActivetabNames);
		display_heatmap("heatmapModelAggregate", heatmapModelAggregate, arrayOfModelNames,arrayOfAggregateNames);

		display_heatmap("heatmapLocationElement", heatmapLocationElement,arrayOfLocationNames , arrayOfElementNames);
		display_heatmap("heatmapLocationModel", heatmapLocationModel, arrayOfLocationNames, arrayOfModelNames);
		display_heatmap("heatmapLocationStat", heatmapLocationStat, arrayOfLocationNames, arrayOfStatNames);
		display_heatmap("heatmapLocationMonth", heatmapLocationMonth,arrayOfLocationNames,arrayOfMonthNames);
		display_heatmap("heatmapLocationVeriftype", heatmapLocationVeriftype,arrayOfLocationNames,arrayOfVeriftypeNames);
		display_heatmap("heatmapLocationActivetab", heatmapLocationActivetab,arrayOfLocationNames, arrayOfActivetabNames);
		display_heatmap("heatmapLocationAggregate", heatmapLocationAggregate,arrayOfLocationNames,arrayOfAggregateNames);

		display_heatmap("heatmapStatElement", heatmapStatElement, arrayOfStatNames, arrayOfElementNames);
		display_heatmap("heatmapStatModel", heatmapStatModel, arrayOfStatNames, arrayOfModelNames);
		display_heatmap("heatmapStatLocation", heatmapStatLocation, arrayOfStatNames, arrayOfLocationNames);
		display_heatmap("heatmapStatMonth", heatmapStatMonth,arrayOfStatNames, arrayOfMonthNames);
		display_heatmap("heatmapStatVeriftype", heatmapStatVeriftype,arrayOfStatNames, arrayOfVeriftypeNames);
		display_heatmap("heatmapStatActivetab", heatmapStatActivetab,arrayOfStatNames, arrayOfActivetabNames);
		display_heatmap("heatmapStatAggregate", heatmapStatAggregate,arrayOfStatNames,arrayOfAggregateNames);

		display_heatmap("heatmapMonthElement", heatmapMonthElement, arrayOfMonthNames, arrayOfElementNames);
		display_heatmap("heatmapMonthModel", heatmapMonthModel, arrayOfMonthNames, arrayOfModelNames);
		display_heatmap("heatmapMonthLocation", heatmapMonthLocation ,arrayOfMonthNames , arrayOfLocationNames);
		display_heatmap("heatmapMonthStat", heatmapMonthStat, arrayOfMonthNames,arrayOfStatNames);
		display_heatmap("heatmapMonthVeriftype", heatmapMonthVeriftype,arrayOfMonthNames, arrayOfVeriftypeNames);
		display_heatmap("heatmapMonthActivetab", heatmapMonthActivetab,arrayOfMonthNames, arrayOfActivetabNames);
		display_heatmap("heatmapMonthAggregate", heatmapMonthAggregate,arrayOfMonthNames,arrayOfAggregateNames);

		display_heatmap("heatmapVeriftypeElement", heatmapVeriftypeElement, arrayOfVeriftypeNames, arrayOfElementNames);
		display_heatmap("heatmapVeriftypeModel", heatmapVeriftypeModel, arrayOfVeriftypeNames, arrayOfModelNames);
		display_heatmap("heatmapVeriftypeLocation", heatmapVeriftypeLocation , arrayOfVeriftypeNames, arrayOfLocationNames);
		display_heatmap("heatmapVeriftypeStat", heatmapVeriftypeStat, arrayOfVeriftypeNames,arrayOfStatNames);
		display_heatmap("heatmapVeriftypeMonth", heatmapVeriftypeMonth, arrayOfVeriftypeNames,arrayOfMonthNames);
		display_heatmap("heatmapVeriftypeActivetab", heatmapVeriftypeActivetab,arrayOfVeriftypeNames, arrayOfActivetabNames);
		display_heatmap("heatmapVeriftypeAggregate", heatmapVeriftypeAggregate,arrayOfVeriftypeNames,arrayOfAggregateNames);

		display_heatmap("heatmapActivetabElement", heatmapActivetabElement, arrayOfActivetabNames, arrayOfElementNames);
		display_heatmap("heatmapActivetabModel", heatmapActivetabModel, arrayOfActivetabNames, arrayOfModelNames);
		display_heatmap("heatmapActivetabLocation", heatmapActivetabLocation , arrayOfActivetabNames, arrayOfLocationNames);
		display_heatmap("heatmapActivetabStat", heatmapActivetabStat, arrayOfActivetabNames,arrayOfStatNames);
		display_heatmap("heatmapActivetabMonth", heatmapActivetabMonth, arrayOfActivetabNames,arrayOfMonthNames);
		display_heatmap("heatmapActivetabVeriftype", heatmapActivetabVeriftype, arrayOfActivetabNames,arrayOfVeriftypeNames);
		display_heatmap("heatmapActivetabAggregate", heatmapActivetabAggregate, arrayOfActivetabNames,arrayOfAggregateNames);

		display_heatmap("heatmapAggregateElement", heatmapAggregateElement, arrayOfAggregateNames, arrayOfElementNames);
		display_heatmap("heatmapAggregateModel", heatmapAggregateModel, arrayOfAggregateNames, arrayOfModelNames);
		display_heatmap("heatmapAggregateLocation", heatmapAggregateLocation , arrayOfAggregateNames, arrayOfLocationNames);
		display_heatmap("heatmapAggregateStat", heatmapAggregateStat, arrayOfAggregateNames,arrayOfStatNames);
		display_heatmap("heatmapAggregateMonth", heatmapAggregateMonth, arrayOfAggregateNames,arrayOfMonthNames);
		display_heatmap("heatmapAggregateVeriftype", heatmapAggregateVeriftype, arrayOfAggregateNames,arrayOfVeriftypeNames);
		display_heatmap("heatmapAggregateActivetab", heatmapAggregateActivetab, arrayOfAggregateNames,arrayOfActivetabNames,);









}


