console.log("DISPLAY FUNCTIONS");

function display_numbers_on_front(){

		/********** Connect Global Value ***********/
	// connects the global variables to the front end
	console.log("Total Clicks2: " + typeof totalNumberOfClicks.toString());
	console.log("Total Clicksaa: " + $("#total").text());

	$("#total").innerHTML = ("Total Clicks: " + totalNumberOfClicks.toString());
	$("#avgclicks").innerHTML = ("Average Daily Clicks: " +avgNumberOfClicks.toString());
	console.log("Total Clicksbb: " + $("#total").text());


}



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





//D3 HEATMAP

function create_heatmap() {


// set the dimensions and margins of the graph
	var margin = {top: 30, right: 30, bottom: 30, left: 30},
		width = 450 - margin.left - margin.right,
		height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
	var svg = d3.select("#my_dataviz")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
	var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
	var myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

// Build X scales and axis:
	var x = d3.scaleBand()
		.range([0, width])
		.domain(myGroups)
		.padding(0.01);
	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x))

// Build X scales and axis:
	var y = d3.scaleBand()
		.range([height, 0])
		.domain(myVars)
		.padding(0.01);
	svg.append("g")
		.call(d3.axisLeft(y));

// Build color scale
	var myColor = d3.scaleLinear()
		.range(["white", "#69b3a2"])
		.domain([1, 100])

//Read the data
	d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function (data) {

		// create a tooltip
		var tooltip = d3.select("#my_dataviz")
			.append("div")
			.style("opacity", 0)
			.attr("class", "tooltip")
			.style("background-color", "white")
			.style("border", "solid")
			.style("border-width", "2px")
			.style("border-radius", "5px")
			.style("padding", "5px")

		// Three function that change the tooltip when user hover / move / leave a cell
		var mouseover = function (d) {
			tooltip.style("opacity", 1)
		}
		var mousemove = function (d) {
			tooltip
				.html("The exact value of<br>this cell is: " + d.value)
				.style("left", (d3.mouse(this)[0] + 70) + "px")
				.style("top", (d3.mouse(this)[1]) + "px")
		}
		var mouseleave = function (d) {
			tooltip.style("opacity", 0)
		}

		// add the squares
		svg.selectAll()
			.data(data, function (d) {
				return d.group + ':' + d.variable;
			})
			.enter()
			.append("rect")
			.attr("x", function (d) {
				return x(d.group)
			})
			.attr("y", function (d) {
				return y(d.variable)
			})
			.attr("width", x.bandwidth())
			.attr("height", y.bandwidth())
			.style("fill", function (d) {
				return myColor(d.value)
			})
			.on("mouseover", mouseover)
			.on("mousemove", mousemove)
			.on("mouseleave", mouseleave)
	})

}