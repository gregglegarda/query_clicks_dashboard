console.log("DONUT FUNCTIONS");

/*******************************************************************************************
										Plotly DONUT Functions
*******************************************************************************************/

function display_donut(divName, donutType, arrayPercent){
    console.log("display_donut (" + divName +")");
    var pairKeyValue = array_of_objects_to_keys_and_values(arrayPercent);
    var keys = pairKeyValue[0];
    var values = pairKeyValue[1];
    var data = [{
        values: values,
        labels: keys,
        domain: {row: 0},
        name: '',
        hoverinfo: 'label+percent+name',
        hole: .6,
        type: 'pie',
        textposition: 'auto'
    }];

    var layout = {
        title: {
            //text: donutType + ' Query Counts',
            font: {
                size: 15,
            }
	    },
      annotations: [
        {
          font: {
            size: 10
          },
          showarrow: false,
          text: donutType,
          x: 0.5,
          y: 0.5
        }
      ],
        height: 300,
        showlegend: false,
        margin: {
            l: 10,
            r: 10,
            b: 10,
            t: 10,
            pad: 5
        },
        grid: {rows: 0, columns: 0},
              plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)'
    };

    var config = {responsive: true};
    Plotly.newPlot(divName, data, layout, config);

}

/******************************* CONVERT DATA TO DONUT FORMAT ************************************/
//array of object dictionary converts to array of keys and array of values
function array_of_objects_to_keys_and_values(array){

  var keys = [];
  var values = [];
  for (var i = 0; i < array.length; i++) {
		//push each object into the global array
        if (Object.values(array[i]).toString() == 0) { continue; }
		values.push(Object.values(array[i]).toString());
		keys.push(Object.keys(array[i]).toString().toUpperCase());
	}
  return [keys,values];
}



