console.log("RIDGELINE FUNCTIONS");
/*******************************************************************************************
										Ridgeline Functions
*******************************************************************************************/

function display_ridgeline(divName, data, xAxisTickLabels, yAxisTickLabels){
		//console.log(data);
		//console.log(xAxisTickLabels);
		//console.log(yAxisTickLabels);
		d3.selectAll("#" + divName +" > *").remove();
		// set the dimensions and margins of the graph
		var margin = {top: 50, right: 30, bottom: 60, left:100},
			width = 600 - margin.left - margin.right,
			height = 300 - margin.top - margin.bottom;

		// append the svg object to the body of the page
		var svg = d3.select("#"+divName)
		  .append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform","translate(" + margin.left + "," + margin.top + ")")
			.style("font", "12px arial")



		  // Get the different categories and count them
			var categories = yAxisTickLabels;
			var tempobj = Object.values(data);
			var n = Math.round(Math.max.apply(Math, data.map(function(o) { return Object.values(o); })));
		  // Compute the mean of each group
		  allMeans = []
		  allMax=[]
		  for (i in categories){
			currentGroup = categories[i]
			mean = d3.mean(data, function(d) { return +d[currentGroup] })
			allMeans.push(mean)
		  }

		  // Create a color scale using these means.
		  var myColor = d3.scaleSequential()
			.domain([0,n])
			.interpolator(d3.interpolateViridis);

		  // Add X axis
		  var x = d3.scaleLinear()
			.domain([-10, n+20])
			.range([ 0, width ]);
		  svg.append("g")
			.style("font", "12px arial")
			.attr("class", "xAxis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x).tickValues([0,n/4, n/2, n/4*3, n]).tickSize(-height) )
			.select(".domain").remove()

		  // Add X axis label:
		  svg.append("text")
			  .attr("text-anchor", "end")
			  .attr("x", width)
			  .attr("y", height + 40)
			  .text("Execution Times");

		  // Create a Y scale for densities
		  var y = d3.scaleLinear()
			.domain([0, 0.25])
			.range([ height, 0]);

		  // Create the Y axis for names
		  var yName = d3.scaleBand()
			.domain(categories)
			.range([0, height])
			.paddingInner(1)
		  svg.append("g")
			.style("font", "12px arial")
			.style("text-transform", "uppercase")
			.attr("class", "Axis")
			.call(d3.axisLeft(yName).tickSize(0))
			.select(".domain").remove()
			
			

		  // Compute kernel density estimation for each column:
		  var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40)) // increase this 40 for more accurate density.
		  var allDensity = []
		  for (i = 0; i < n; i++) {
			  key = categories[i]
			  density = kde( data.map(function(d){  return d[key]; }) )
			  if (key != undefined){
				allDensity.push({key: key, density: density});
			  }
		  }

		  // Add areas

		  svg.selectAll("areas")
			.data(allDensity)
			.enter()
			.append("path")
			  .attr("transform", function(d){ return("translate(0," + (yName(d.key)-height) +")" )})
			  .attr("fill", function(d){
				grp = d.key ;
				index = categories.indexOf(grp)
				value = allMeans[index]
				return myColor( value  )
			  })
			  .datum(function(d){return(d.density)})
			  .attr("opacity", 0.7)
			  .attr("stroke", "#000")
			  .attr("stroke-width", 0.1)
			  .attr("d",  d3.line()
				  .curve(d3.curveBasis)
				  .x(function(d) { return x(d[0]); })
				  .y(function(d) { return y(d[1]); })
			  )

		
			


}
// This is what I need to compute kernel density estimation
function kernelDensityEstimator(kernel, X) {
  return function(V) {
    return X.map(function(x) {
      return [x, d3.mean(V, function(v) { return kernel(x - v); })];
    });
  };
}
function kernelEpanechnikov(k) {
  return function(v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}

//cases
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}


