console.log("HISTOGRAM FUNCTIONS");



/*******************************************************************************************
										Plotly Histogram Functions
*******************************************************************************************/


function create_trace(nameOfElement, countOfElement){
	var x1 = [];
	var y1 = [];

	var name = nameOfElement.toUpperCase();
	
	for (var i = 0; i < countOfElement; i++) 
	{
	  x1= [name];
	  y1 = [countOfElement];
	}
	//console.log(x1);
	//console.log(y1);
	
	var trace1 = {
	  x: x1,
	  y: y1,
	  name: name,
	  autobinx: false,
	  histnorm: "count",
	  marker: {
		color: "rgb(31,119,180,1)", //"rgba(255,100,102,0.7)",
		 line: {
		  color:  "rgb(31,119,180,1)", //"rgba(255, 100, 102, 1)",
		  width: 1
		}
	  },  
	  opacity: 0.8,
	  type: "bar",
	  xbins: {
		end: 14, 
		size: 0.22, 
		start: -22
	  }
	};
	
	return trace1;
	
}


function push_trace_to_array(arrayPercent){
/************************ push the trace to an array to be plotted later *************************/
	var data = [];
	
	for (var obj of arrayPercent) {
		
			for (const key in obj){
				var sampleTrace = create_trace(key, obj[key]);
				
				//push each trace into the traceDataArray
				data.push(sampleTrace);
			}
	}
	//console.log("here"+ JSON.stringify(data));
	return data;
}



/************************ plot the data on the display *************************/
function display_histogram(divName, divType, arrayPercent){
	console.log("display_histogram (" + divName + ")");
	var data = push_trace_to_array(arrayPercent);
	var layout = {
		bargap: 0.05,
		bargroupgap: 0.2,
		barmode: "overlay",
		height: 350,
		title: divType + " Counts",
		xaxis: {title: divType, mirror: 'ticks', linecolor: 'white',linewidth: 1, zeroline: false},
		yaxis: {title: "Count", mirror: 'ticks', linecolor: 'white',linewidth: 1, zeroline: false},
		plot_bgcolor: 'rgba(0, 0, 0, 0)',
		paper_bgcolor: 'rgba(0, 0, 0, 0)'
	};

	var config = {responsive: true};


	Plotly.newPlot(divName, data, layout, config);
}


