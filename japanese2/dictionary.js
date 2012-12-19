$(document).ready(function() { // start doc ready; do not delete this!function getSelText()

	//get selected text from window
	var getSelText = function(){
		var txt = '';
			if (window.getSelection) {
				txt = window.getSelection();
			}
			/*if(document.getElementById('iframeID').contentWindow.getSelection){
				txt = document.getElementById('iframeID').contentWindow.getSelection();
			}*/
			
			else if (document.getSelection)	{
				txt = document.getSelection();
			}
			else if (document.selection) {
				txt = document.selection.createRange().text;
			}
			return txt;
	}
	
	//use this function to load a word(var)'s translated grid into our results div via Ajax
	var loadAjax = function(x){
	var translateUrl= '/dictionary/lookup/'+x;
					$.ajaxSetup ({  
						cache: false  
					});  
				
					var ajax_load = translateUrl;  
					
					$("#results").load(translateUrl);   
	}
	
	
	
	
	/* the following code lets you select the text, and have it be deemed "selected" only after'
	you have the mouse held down for a certain period of time.  (25 seconds.)  the point is, we need 
	a way to seperate a random click (ie to clear the selection) versus an intended selection.  
	I timed selection clicks last around a minimum of 25 ms. 
	*/
	var mouseTimer;
	var mouseClock;
	
	//time how long the mouse is held down
	$("body").mousedown(
		function() {
			mouseClock=0;
			mouseTimer=setInterval(function() {mouseClock++;},1);
		}
	);

	//if click was long enough, select text, translate it, load it into results div via Ajax
	$("body").mouseup(
		function(){
			clearInterval(mouseTimer);
			if(mouseClock>25){
					loadAjax(getSelText());
			};
		}
	);
	
	//if you double click the body, clear the results div.
	$("body").dblclick(
		function(){
			$("#results").empty();
		}
	);
	
	//if you click "close" (close box), clear the results div.
	$("#closeBox").click(
		function(){
			$("#results").empty();
		}
	);
	
	//if you click the translateButton, translate your input and put it into the results div, via Ajax
	$('#translateButton').click(function() {
					loadAjax($('#word').val());	
			});
	
}); // end doc ready; do not delete this!