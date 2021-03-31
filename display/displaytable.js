console.log("TABLE FUNCTIONS");
/*******************************************************************************************
										Plotly Table Functions
*******************************************************************************************/

function display_table(divName, data) {


  var tableTitle = "";

  var colorHeaderFill = {color: ['rgb(111, 111, 111)']};
  var colorHeaderFont = {family: "Arial", size: 12, color: "white"};
  var colorHeaderLine = {width: 1, color: 'rgb(50, 50, 50)'};

  var colorCellsLine =  {color: "black", width: 1};
  var colorCellsFill = {color: ['rgba(222, 222, 222, 0.65)', 'rgb(222, 222, 222)', 'rgba(222, 222, 222, 0.65)']};
  var colorCellsFont =  {family: "Arial", size: 8, color: ["black"]};



  console.log("display_table");

    var rows = arrayOfObjectsData;
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var headerNames = Plotly.d3.keys(rows[0]);

    var headerValues = [];
    var cellValues = [];
    for (i = 0; i < headerNames.length; i++) {
      headerValue = [headerNames[i]];
      headerValues[i] = headerValue;
      cellValue = unpack(rows, headerNames[i]);
      cellValues[i] = cellValue;
    }
/*
    //clean date
    for (i = 0; i < cellValues[1].length; i++) {
      var dateValue = cellValues[1][i].split(' ')[0]
      cellValues[1][i] = dateValue
    }
*/

    var data = [{
      type: 'table',
      columnwidth: [1000, 1200, 600, 2100, 1800, 1600, 700, 700, 2100, 600],
      columnorder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      header: {
        values: headerValues,
        align: "center",
        line: colorHeaderLine,
        fill: colorHeaderFill,
        font: colorHeaderFont
      },
      cells: {
        values: cellValues,
        align: ["center", "center"],
        line: colorCellsLine,
        fill: colorCellsFill,
        font: colorCellsFont
      }




    }]

    var layout = {
      title: tableTitle,
      height: 600,
      borderRadius: 10,
      autosize: true,
      plot_bgcolor: 'rgba(0, 0, 0, 0)',
      paper_bgcolor: 'rgba(0, 0, 0, 0)'
    }
    var config = {responsive: true};
    Plotly.newPlot(divName, data, layout, config);


}
