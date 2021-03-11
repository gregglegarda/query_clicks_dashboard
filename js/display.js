console.log("DISPLAY FUNCTIONS");

	/********** Connect Global Value ***********/
	// connects the global variables to the front end
	$("#totalclicks").text("Total Clicks: " + totalNumberOfClicks);
	$("#avgclicks").text("Average Daily Clicks: " +avgNumberOfClicks);




/*******************************************************************************************
										Plotly Histogram Functions
*******************************************************************************************/


function create_trace(nameOfElement, countOfElement){
	var x1 = [];
	var y1 = [];

	var name = nameOfElement.toUpperCase();
	
	for (var i = 0; i < countOfElement; i++) 
	{
	  x1.push(name);
	  y1.push(countOfElement);

		
	}
	console.log(x1);
	console.log(y1);
	
	var trace1 = {
	  x: x1,
	  y: y1,
	  name: name,
	  autobinx: false, 
	  histnorm: "count", 
	  marker: {
		color: "rgba(255,100,102,0.7)",
		 line: {
		  color:  "rgba(255, 100, 102, 1)", 
		  width: 1
		}
	  },  
	  opacity: 0.5, 
	  type: "bar", 
	  xbins: {
		end: 14, 
		size: 0.22, 
		start: -22
	  }
	};
	
	return trace1;
	
}


function push_trace_to_array(){
/************************ push the trace to an array to be plotted later *************************/
	var data = [];
	
	for (var obj of arrayOfElementCounts) {
		
			for (const key in obj){
				var sampleTrace = create_trace(key, obj[key]);
				
				//push each trace into the traceDataArray
				data.push(sampleTrace);
			}
	}
	return data;
}



/************************ plot the data on the display *************************/
function plot_histogram(){
	var data = push_trace_to_array();
	var layout = {
	  bargap: 0.05, 
	  bargroupgap: 0.2, 
	  barmode: "overlay", 
	  title: "Element Counts", 
	  xaxis: {title: "Element"}, 
	  yaxis: {title: "Count"}
	};
	var config = {responsive: true};
	Plotly.newPlot('myDiv', data, layout, config);
}




/*******************************************************************************************
										Plotly DONUT Functions
*******************************************************************************************/




function plot_donut(){
var data = [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  domain: {row: 0},
  name: 'GHG Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  text: 'CO2',
  textposition: 'inside',
  domain: {row: 1},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Element Click Counts',
  annotations: [
    {
      font: {
        size: 10
      },
      showarrow: false,
      text: 'Daily Average',
      x: 0.5,
      y: 0.22
    },
    {
      font: {
        size: 10
      },
      showarrow: false,
      text: 'Today\'s Clicks',
      x: 0.5,
      y: 0.78
    }
  ],
  height: 600,
  width: 400,
  showlegend: false,
  grid: {rows: 2, columns: 1}
};
var config = {responsive: true};
Plotly.newPlot('myDivDonut', data, layout,config);

}