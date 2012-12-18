$(document).ready(function() { // start doc ready; do not delete this!function getSelText()

//alert($('#iframeID').contents().html());
//get selected text from window
	var getSelText = function(){
		var txt = '';
			if (window.getSelection) {
				txt = window.getSelection();
			}
			else if (document.getSelection)	{
				txt = document.getSelection();
			}
			else if (document.selection) {
				txt = document.selection.createRange().text;
			}
			return txt;
	}
	
	var getBox = function(){
		
	}
	
	var hideBox = function(){
		$("dictBox").hide();
	}
	
	var mouseTimer;
	var mouseClock;
	
	/* the following code lets you select the text, and have it be deemed "selected" only after'
	you have the mouse held down for a certain period of time.  (25 seconds.)  the point is, we need 
	a way to seperate a random click (ie to clear the selection) versus an intended selection.  
	I timed selection clicks last around a minimum of 25 ms. 
	*/
	$("body").mousedown(
		function() {
			mouseClock=0;
			mouseTimer=setInterval(function() {mouseClock++;},1);
		}
	);
	$("body").mouseup(
		function(){
			clearInterval(mouseTimer);
			if(mouseClock>25){
				var translateUrl= '/dictionary/lookup/english/'+getSelText();
				
					$.ajaxSetup ({  
						cache: false  
					});  
				
					var ajax_load = translateUrl;  
					$("#results").load(translateUrl);   
				//Tip('Some text', CLICKCLOSE, true, FOLLOWMOUSE, false)
			};
			}
		);
	$(".closeBox").click(
		function(){
			$("#results").remove();
		}
	);
	
	/*	$("iframeID").mousedown(
		function() {
			mouseClock=0;
			mouseTimer=setInterval(function() {mouseClock++;},1);
		}
	);
	$("#iframeID").mouseup(
		function(){
			clearInterval(mouseTimer);
			if(mouseClock>25){
				alert(getSelText());
				
				//Tip('Some text', CLICKCLOSE, true, FOLLOWMOUSE, false)
				};
			}
		);
	*/	
	/*$("body").tooltip({
		track: true, 
		delay: 0, 
		showURL: false, 
		opacity: 1, 
		fixPNG: true, 
		//extraClass: "pretty fancy", 
		top: -15, 
		left: 5, 
		bodyHandler: function() {
			return "heyo";
		},
	});*/

		

//$('#set1 *').tooltip();
		


}); // end doc ready; do not delete this!