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
            error: function () {
            		var data = "{\"Execution time\":2.6206729412079,\"Element\":\"cg\",\"Months\":\"'202012'\",\"Models\":[\"wpc\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"qpf06\",\"Months\":\"'202012'\",\"Models\":[\"ndfd\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"dp\",\"Months\":\"'202012'\",\"Models\":[\"gmos\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"cg\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"qpf06\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"dp\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"cg\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"qpf06\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"sn\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"mn\",\"Months\":\"'202012'\",\"Models\":[\"wpc\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"vs\",\"Months\":\"'202012'\",\"Models\":[\"blendx\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"mn\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"urma\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"conus\",\"conus\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}"

					let commaStringData = data.replace(/}\r\n{/g, "},\r\n{");  // replace }\r\n{ with },{ (to add commas in between)
					//let commaStringData = data.replace(/}\n{/g, "},\r\n{");  // replace }\n{ with },{ (to add commas in between)
					stringData = ("{\"clicks\":[" + commaStringData + "]}");

					//console.log(JSON.stringify(data));
					//console.log("error in loaddata.js load_data function. make sure that the .log file's format is correct. or, make sure that commas are being added correctly to each '/r/n' or '/n'");
                	//alert("Loading Data Error. Fake data Loaded");
            }
	});


	
}




async function load_data_fake(path){

	console.log("load_data_fake");

	var data = "{\"Execution time\":2.6206729412079,\"Element\":\"cg\",\"Months\":\"'202012'\",\"Models\":[\"wpc\",\"blendx\",\"gmos\",\"urma\"],\"locations\":[\"conus\",\"hi\",\"conus\",\"pr\",\"ak\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\",\"BIAS\",\"RMSE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"qpf06\",\"Months\":\"'202012'\",\"Models\":[\"ndfd\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"pr\",\"ak\",\"conus\",\"ak\",\"hi\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\",\"POD\",\"FAR\",\"CSI\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"dp\",\"Months\":\"'202012'\",\"Models\":[\"gmos\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"hi\",\"pr\",\"pr\",\"ak\",\"gu\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"POD\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"cg\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"hi\",\"pr\",\"ak\",\"gu\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"ME\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"qpf06\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"pr\",\"pr\",\"hi\",\"conus\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"GSS\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"dp\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"hi\",\"ak\",\"ak\",\"conus\",\"gu\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"REL\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"cg\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"gu\",\"hi\",\"ak\",\"ak\",\"ak\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"qpf06\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"gu\",\"ak\",\"ak\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"REL\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"sn\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"gu\",\"hi\",\"conus\",\"hi\",\"ak\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"ME\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"mn\",\"Months\":\"'202012'\",\"Models\":[\"wpc\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"ak\",\"ak\",\"gu\",\"pr\",\"hi\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\",\"FAR\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"vs\",\"Months\":\"'202012'\",\"Models\":[\"blendx\",\"blendx\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"conus\",\"hi\",\"ak\",\"pr\",\"conus\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}\r\n{\"Execution time\":2.6206729412079,\"Element\":\"mn\",\"Months\":\"'202012'\",\"Models\":[\"blend\",\"urma\",\"gmos\",\"ndfd\",\"urma\"],\"locations\":[\"pr\",\"pr\",\"pr\",\"ak\",\"ak\"],\"veriftype\":\"issue\",\"activeTab\":\"dailyCharts\",\"stats\":[\"MAE\"],\"aggregate\":\"true\"}"

	let commaStringData = data.replace(/}\r\n{/g, "},\r\n{");  // replace }\r\n{ with },{ (to add commas in between)
	//let commaStringData = data.replace(/}\n{/g, "},\r\n{");  // replace }\n{ with },{ (to add commas in between)
	stringData = ("{\"clicks\":[" + commaStringData + "]}");



}

