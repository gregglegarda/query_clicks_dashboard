console.log("BUTTONS TOP NAVIGATION SLIDER");


/*******************************************************************************************
										ARROWS ATTRIBUTE BUTTON Functions
*******************************************************************************************/
var navtabs = ["maintab" , "elementtab","modeltab","locationtab","stattab","monthtab","veriftab","activetab", "aggregatetab" ];



function topnavSliderConnect(){
			$("#arrow1").click(function(){
					highlightTopnavActive(0);
			});
			$("#arrow2").click(function(){
					highlightTopnavActive(1);
			});
			$("#arrow3").click(function(){
					highlightTopnavActive(2);
			});
			$("#arrow4").click(function(){
					highlightTopnavActive(3);
			});
			$("#arrow5").click(function(){
					highlightTopnavActive(4);
			});
			$("#arrow6").click(function(){
					highlightTopnavActive(5);
			});
			$("#arrow7").click(function(){
					highlightTopnavActive(6);
			});
			$("#arrow8").click(function(){
					highlightTopnavActive(7);
			});
			$("#arrow9").click(function(){
					highlightTopnavActive(8);
			});
			$("#arrow10").click(function(){
					highlightTopnavActive(9);
			});



			$("#navigation1").click(function(){
					highlightTopnavActive(0);
			});
			$("#navigation2").click(function(){
					highlightTopnavActive(1);
			});
			$("#navigation3").click(function(){
					highlightTopnavActive(2);
			});
			$("#navigation4").click(function(){
					highlightTopnavActive(3);
			});
			$("#navigation5").click(function(){
					highlightTopnavActive(4);
			});
			$("#navigation6").click(function(){
					highlightTopnavActive(5);
			});
			$("#navigation7").click(function(){
					highlightTopnavActive(6);
			});
			$("#navigation8").click(function(){
					highlightTopnavActive(7);
			});
			$("#navigation9").click(function(){
					highlightTopnavActive(8);
			});
			$("#navigation10").click(function(){
					highlightTopnavActive(9);
			});
}
function highlightTopnavActive(n){
	for(var each of navtabs){
		$("#"+each).removeClass("active");
	}
	$("#"+navtabs[n]).addClass("active");
}

function clickNavigateSlider(n){
	$("#navigation"+n).click();
	
}
