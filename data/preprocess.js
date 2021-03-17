console.log("PREPROCESS");

/*******************************************************************************************
										PRE PROCESS TO OBJECTS
*******************************************************************************************/
function convert_string_to_array_of_objects(data) {
	console.log("convert_string_to_array_of_objects ");

	//parse the data string into JSON objects format and store each object into a global array
	var jsonData = JSON.parse(data);
	for (var i = 0; i < jsonData.clicks.length; i++) {
		var click = jsonData.clicks[i];

		//push each object into the global array
		arrayOfObjectsData.push(click);
	}

}


/*******************************************************************************************
										PRE PROCESS TO CSV
*******************************************************************************************/

function export_data_to_csv(csvContent) {
	console.log("export_data_to_csv");
	
	//cleaning up data specific to this format into comma separated cells
	let s = csvContent;
	let content = s.split('\n')                        	// split lines
			.map(line => line.split(/'/).join(''))  	// split ' then join with none (to remove quotes from dates)
			.map(line => line.split(/,\s+/).join('/')) 	// split ,\s then join with / (for multiple dates)
			.map(line => line.split(/,/).join('/'))  	// split , then join with / (for multiple models and stats)
            .map(line => line.split(/\t/).join(','))  	// split \t then join with , (for separting the actual cells)
			.map(line => line.split(/\s+/).join('_'))  	// split remaining \s then join with _ (for the title)
            .join('\n');	                        	// rejoin lines

	//save into csv file
	var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "data.csv");

	//save tocsv by calling php
	$.ajax({
            type: 'POST',
            url: convertDataToCSVFilePath,
			async: false,
			data:{
				csvDataContent: content,
				csvDataContentPath: csvDataPath
			},
            success: function (data) {
				console.log("success in preprocess.js, export_data_to_csv function, convertdatatocsv.php");
            },
            error: function () {
				console.log("error in preprocess.js, export_data_to_csv function, convertdatatocsv.php");
                alert("Not Working");
            }
	});

}
/********************************* PRE PROCESS TO TABLE FORMAT  ***************************************/

function convert_array_object_to_table(array) {
	console.log("convert_array_object_to_table");
    // Use first element to choose the keys and the order
    var keys = Object.keys(array[0]);

    // Build header
    dataFrameCSV = keys.join("\t") + "\n";

    // Add the rows
    array.forEach(function(obj){
        dataFrameCSV += keys.map(k => obj[k]).join("\t") + "\n";
    });
    //return dataFrameCSV;
}







