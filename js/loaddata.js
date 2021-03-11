console.log("LOAD DATA");
				
/************************ Formatting the data into a JSON Formatted String ***************************

this function converts the loaded data from this format:
		--------------
		{...}
		{...}
		{...}
		--------------

to this format (notice the commas and the new brackets and braces):
		--------------
		{
			"clicks":[
				{...},
				{...},
				{...}
			]
		}
		--------------
	
/********************************* Formatted Sample Data ********************************************
{
	"clicks":[
		{"Execution time":2.6206729412079,"Element":"mx","Months":"'202012'","Models":["blend","blendx","gmos","ndfd","urma"],"locations":["conus","conus","conus","conus","conus"],"veriftype":"issue","activeTab":"dailyCharts","stats":["MAE"],"aggregate":"true"},
		{"Execution time":11.954708814621,"Element":"mx","Months":"'202012'","Models":["blend","blendx","gmos","ndfd","wpc"],"locations":["conus","conus","conus","conus","conus"],"veriftype":"issue","activeTab":"dailyCharts","stats":["MAE"],"aggregate":"true"},
		{"Execution time":4.5289061069489,"Element":"mx","Months":"'202012'","Models":["blend","blendx","gmos","ndfd","urma"],"locations":["conus","conus","conus","conus","conus"],"veriftype":"issue","activeTab":"dailyCharts","stats":["MAE","ME"],"aggregate":"true"}
	]
}
*****************************************************************************************************/
async function load_data(path){
	/*
	console.log("load_data");
	$.ajax({
            type: 'POST',
            url: path,
			async: false,
            success: function (data) {
				console.log(data);
				let commaStringData = data.replace(/}\r\n{/g, "},\r\n{");  // replace }\r\n{ with },{ (to add commas in between)   
				//let commaStringData = data.replace(/}\n{/g, "},\r\n{");  // replace }\n{ with },{ (to add commas in between) 				
				stringData = ("{\"clicks\":[" + commaStringData + "]}");

				
            },
            error: function (data) {
				console.log(JSON.stringify(data));
				console.log("error in loaddata.js load_data function. make sure that the .log file's format is correct. or, make sure that commas are being added correctly to each '/r/n' or '/n'");
                alert("Loading Data Error.");
            }
	});
	console.log("load finished");



	*/


	var data = "{\"Execution time\":2.6206729412079,\"Element\":\"mx\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"mx\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"mx\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}"

	let commaStringData = data.replace(/}\r\n{/g, "},\r\n{");  // replace }\r\n{ with },{ (to add commas in between)
	//let commaStringData = data.replace(/}\n{/g, "},\r\n{");  // replace }\n{ with },{ (to add commas in between)
	stringData = ("{\"clicks\":[" + commaStringData + "]}");








	
}

