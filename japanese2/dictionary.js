$(document).ready(function() { // start doc ready; do not delete this!function getSelText()

//divide into sections
// section1 :  select text.  load into view with AJAX
// section2 :  prepare selection for translation


// section1 start
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
	
	/*limit can not be passed as a variable in SQL, so let's use javascript to generate a limit
	clause and input that */
	
	var limit = function(start,length){
		return "limit "+start+", "+(start+length);
	}
	
	//use this function to load a word(var)'s translated grid into our results div via Ajax
	var loadAjax = function(text,language,sqlLimit){
		sqlLimit=encodeURI(limit(0,1));
		text=encodeURI(text);
		$("body").off("mousedown");
		$("body").off("mouseup");
		var translateUrl= '/dictionary/lookup/'+text+'/'+language+'/'+sqlLimit;
			$.ajaxSetup ({  
				cache: false  
			});  
		
			var ajax_load = translateUrl;  
			$("#results").show();
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
			var text=getSelText();
			var lang=testLanguage(text);
			clearInterval(mouseTimer);
			if(mouseClock>25){
				loadAjax(text,lang,0);
				};
		}
	);
	
	$(".next").click(
		function(){
			var word = $(".word").text();
			
			
		}	
	);
	
	
	//if you double click the body, clear the results div.
	$("body").dblclick(
		function(){
			$("#results").empty();
			$("#results").hide();
		}
	);
	
	//if you click "close" (close box), clear the results div.
	$("#closeBox").click(
		function(){
			$("#results").empty();
			$("#results").hide();
		}
	);
	
	//if you click the translateButton, translate your input and put it into the results div, via Ajax
	$('#translateButton').click(function() {
					loadAjax($('#word').val());	
			});
// end section1
// section2 start

	/*UNICODE DECIMAL VALUES:  katakana 12448-12543,12784-12799 kana 12353-12438, 12441-12447
	alphabet and assorted:alphabet: 65-90,97-122,126,96,92,64, 32=space, 256-591= random letters*/



				/*the letter values in the first conditionalbelow are kana/katakana or space.  the second are roman(latin) alphabet 
	  if the unicode expression for any of the letters of your selected word are NOT in these values, than they are not
	  all kana, or all roman, and thus the above booleans will be set false
	  we use mb_FOO because this treates multibyte unicode characters as single letters*/

		

		function testLanguage(text){
			text=text.toString();
			var isItKana=true;
			var isItRoman=true;
			var language="kanji";
			var len = text.length;
			for(i=0; i<len; i++){
				var number=text.charCodeAt(i); //convert character in string to unicode value
				//since we are running a look over the whole selection, if any character is not-roman or not-kana, then that makes the whole string false
				//don't do anything if we get a space, aka 32
				if(number!=32){ 
				if(! ((number>=12353 && number<=12543) ||(number>=12784 && number<=12799) || (number==12288)))
						{
						isItKana=false;
						}
				if(! ((number>=65 && number<=90) || (number>=97 && number<=122) || (number>=256 && number<=591)))  
					//these numbers caused bugs...|| 126 || number==96 || number==92 || number==64))	
						{
						isItRoman=false;
						}
				}
			}
			
			//let 0=roman, 1=kana, We don't need to specify the case for other/kanji, shall assume that as the base case
			if(isItRoman==true){
			language="english";
			}
			else if(isItKana==true){
			language="kana";
			}
			return language;
		}


}); // end doc ready; do not delete this!