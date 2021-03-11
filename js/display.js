console.log("DISPLAY FUNCTIONS");



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
		color: "rgba(255, 100, 102, 0.7)", 
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
	var config = {responsive: true}
	Plotly.newPlot('myDiv', data, layout, config);
}




















function create_trace2(x, y){
	var x1 = x;
	var y1 = y;

	var name = x;
	

	console.log(x1);
	console.log(y1);
	
	var trace1 = {
	  x: x1,
	  y: y1,
	  name: name,
	  autobinx: false, 
	  histnorm: "count", 
	  marker: {
		color: "rgba(255, 100, 102, 0.7)", 
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








function push_trace_to_array2(){
/************************ push the trace to an array to be plotted later *************************/
	var data = [];
	var x=[];
	var y=[];
	for (var obj of arrayOfElementCounts) {
		
			for (const key in obj){
				x.push(key);
				y.push(obj[key]);
				
				
				//push each trace into the traceDataArray
				
			}
	}
	var sampleTrace = create_trace2(x, y);
	data.push(sampleTrace);
	return data;
}


function plot_bar(){
	var data = push_trace_to_array2();
	var layout = {
	  bargap: 0.05, 
	  bargroupgap: 0.2, 
	  barmode: "overlay", 
	  title: "Element Counts", 
	  xaxis: {title: "Element"}, 
	  yaxis: {title: "Count"}
	};
	var config = {responsive: true}
	Plotly.newPlot('myDiv2', data, layout, config);
}