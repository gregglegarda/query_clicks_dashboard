console.log("LINE FUNCTIONS");

/*******************************************************************************************
										Plotly LINE Functions
*******************************************************************************************/

function display_line(divName, divType, arrayCount, arrayAverage, cumulativeCount){
    console.log("display_line (" + divName +")");
    var pairKeyValue1 = array_of_objects_to_keys_and_values(arrayCount);
    var keys1 = pairKeyValue1[0];
    var values1 = pairKeyValue1[1];


    var pairKeyValue2 = array_of_objects_to_keys_and_values(arrayAverage);
    var keys2 = pairKeyValue2[0];
    var values2 = pairKeyValue2[1];

    var pairKeyValue3 = array_of_objects_to_keys_and_values(cumulativeCount);
    var keys3 = pairKeyValue3[0];
    var values3 = pairKeyValue3[1];



    var trace1 = {
        name:"daily count",
        x: keys1,
        y: values1,
        type: 'scatter'
    };

    var trace2 = {
        name:"average daily count",
        x: keys2,
        y: values2,
        type: 'scatter'
    };

    var trace3 = {
        name:"cumulative count",
        x: keys3,
        y: values3,
        type: 'scatter'
    };

     var layout = {
      title: 'History',
      height: 500,
      autosize: true,
      plot_bgcolor: 'rgba(0, 0, 0, 0)',
      paper_bgcolor: 'rgba(0, 0, 0, 0)'
    };
    var config = {responsive: true};
    var data = [trace1, trace2, trace3];

    Plotly.newPlot(divName, data, layout, config);

}
