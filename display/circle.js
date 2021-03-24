console.log("CIRCLE FUNCTIONS");

/*******************************************************************************************
										Plotly CIRCLE Functions
*******************************************************************************************/

function display_circle(divName, donutType, value){
	console.log("display_circle (" + divName +")");

	var data = [{
	values: [1],
	labels: [1],
	domain: {row: 0},
	name: '',
	hoverinfo: 'skip',
	textinfo: 'none',
	hole: .9,
	type: 'pie'

}];

var layout = {
	title: {
		text: donutType,
		font: {
			size: 15,
		}
	},
	annotations: [
		{
		  font: {
			size: 20
		  },
		  showarrow: false,
		  text: value.toString(),
		  x: 0.5,
		  y: 0.5
		}
	],
	height: 150,
	showlegend: false,
	margin: {
	l: 0,
	r: 0,
	b: 10,
	t: 50,
	pad: 5
	},
	grid: {rows: 0, columns: 0},
	plot_bgcolor: 'rgba(0, 0, 0, 0)',
	paper_bgcolor: 'rgba(0, 0, 0, 0)'
};

var config = {responsive: true};
Plotly.newPlot(divName, data, layout, config);

}






