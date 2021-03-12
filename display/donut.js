console.log("DONUT FUNCTIONS");




/*******************************************************************************************
										Plotly DONUT Functions
*******************************************************************************************/




function plot_donut(){
var data = [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: elementArrayNames,
  domain: {row: 0},
  name: 'Element Daily Average',
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
      y: 0.5
    }
  ],
  height: 600,
  width: 400,
  showlegend: false,
  grid: {rows: 1, columns: 1}
};
var config = {responsive: true};
Plotly.newPlot('myDivDonut', data, layout,config);

}

