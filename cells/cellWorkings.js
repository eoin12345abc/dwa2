

$(document).ready(function() { // start doc ready; do not delete this!

/*these are the reproductive rules.  they are boolean values
since they are the reproductive rules, if the rule is set to true, and a certain condition is met
the cell will reproduce and attain a value of 1.  else the cell dies and ==0;
the condition to be met is the number of living nearby-neighbors.  
example: if nearby neighbors of cell (a,b)=Q
then check if ruleQ=true or false.  if true, then (a,b)=1; if false, than (a,b)=0.  Other rules != ruleQ have no bearing
*/

//var iterations;
//BASIC IDEA
//divide grid up into x*y points.  Create x*y matrix;  Store present itteration alive/dead values in matrix.
//alive =1, dead =0;  
//thus we have an x*y matrix of 1s and 0s.  
//output the present iteration
//loop through the present array, testing each point for alive or dead, and updating thusly
//output the new values
//do it all over again in animation loop

var rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule0;

function MyGrid (Grid,sizeX,sizeY,noX,noY) {
this.Grid=Grid;
this.sizeX=sizeX;
this.sizeY=sizeY;
this.noX=noX;
this.noY=noY;
this.initCells=initCells;
this.updateCells=updateCells;
this.countNeighbors=countNeighbors;
}

function countNeighbors(w,z){
/*  (0,0)   (0,maxX-1)
    (maxY-1,0)   (maxY-1, maxX-1) 	
*/
	var count=0;
	/*var minX=(z-1);
	var maxX=(z+1);
	var minY=(w-1);
	var maxY=(w+1); 	
	//the following if else statements are needed to take care of border situations 
	if (w==0){minY=0;}  

	if (w==(this.noY-1)){maxY=(this.noY-1);}
*/
	if (w==0){minY=0;}
	else     {minY=w-1;}   	
	
	if (w==(this.noY-1)){
		maxY=(this.noY-1);}
	else	{maxY=(w+1);}

	if (z==0){minX=0;}
	else     {minX=z-1;}   	
	
	if (z==(this.noX-1)){
		maxX=(this.noX-1);}
	else	{maxX=(z+1);}

	for(var i=minX; i<maxX+1; i++){
		for(var j =minY;j<maxY+1;j++){
			if (this.Grid[i][j]==1)  {count++;} 	//nothing happens if you have a "dead" cell
		}
	}

	if (this.Grid[w][z]==1) {count--;}  //dont count your own grid point	
	return count;
}


//initialize first cell state to random ???
function initCells(how){
	var first;
	if (how==1) {first= function(){Math.round(Math.random());}}
	if (how==0) {first= 0;}
	
	$("#wrapper").empty(); //clear body of formatting
	//for loop in for loop creates array of arrays, thus an "noX" x "noY" matrix.  
	//use Math fcn to populate entries with 1 or 0	
	//also Use CSS and Jquery to interpret matrix as visual grid of appropriate colors
		for(var i=0; i< this.noY; i++) {
			this.Grid[i] = new Array()	
			for(var j=0; j<this.noX; j++){
				this.Grid[i][j]=1;			
				//this.Grid[i][j]=Math.round(Math.random());
				if (this.Grid[i][j]== 0) {
					//name=' "+i+"."+j+"'
					$("#wrapper").append("<div class='cell zero' value='' > </div>");
					//$("div").prev().data("ilocation",i)
					//$("div").prev().data("jlocation",j)
				}
				else {
					//name='"+i+"."+j+"''
					$("#wrapper").append("<div class='cell one'  > </div>");
				}
			
			}
			$("#wrapper").append("<div class='footer'> </div>");		
		} 
	var x=(this.sizeX/this.noX);
	var y=(this.sizeY/this.noY);
	//take parameters to adjust the size of the output boxes and margins.
	$(".cell").css("width", x);
	$(".cell").css("height", y );	
	//(Grid,sizeX,sizeY,noX,noY,marg)	
	//$(".one").css("width", x);
	//$(".one").css("height", y );
	//$(".one").css("margin", this.marg);	
}


//this function will count the number of alive neighbors of a gridpoint.  
//the 2 arguments are the x,y coordinates of the grid point.
//it returns the count;


function updateCells(){
//ruleN.  Get ruleN from form.  
	//set up a temporary Grid so that we can sequentially update all the values in the cell "at once"
	//ie without having the calculation being affected by previously updated gridpoints.  
	//clear the body of any css formatting
	//Comment out so can see the process in action for testing. 
	var tempGrid= this.Grid;
	$("#wrapper").empty();	
	for(var i=0; i< this.noY; i++) {
		for(var j=0; j<this.noX; j++){
			switch (this.countNeighbors(i,j)){
				case 0: if(rule0) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 1: if(rule1) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 2: if(rule2) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 3: if(rule3) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 4: if(rule4) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 5: if(rule5) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 6: if(rule6) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 7: if(rule7) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
				case 8: if(rule8) {tempGrid[i][j]=1;} else{tempGrid[i][j]=0;} ; break;
			}
		//reset the grid to have the tempGrid values
		//CSS and JQUERY This ISH.  Transform matrix into CSS grid w/appropriate colors
		//i figured itd be faster to put CSS in here instead of looping through again later to put it in
			if (tempGrid[i][j]==1) {				
				//value='"+i+"."+j+"''
				$("#wrapper").append("<div class='cell one' >"+this.countNeighbors(i,j)+"</div>");		
			} 
			else {	
				//value='"+i+"."+j+"''
				$("#wrapper").append("<div class='cell zero'  >"+this.countNeighbors(i,j)+"</div>");		
			}
		}	
		this.Grid=tempGrid;
		$("#wrapper").append("<div class='footer'> </div>");	
	} 	

	var x=(this.sizeX/this.noX);
	var y=(this.sizeY/this.noY);
	//$(".zero").css("width", x);
	//$(".zero").css("height", y );
	$(".cell").css("width", x);
	$(".cell").css("height", y );
	//$(".zero").css("margin", this.marg);
}

function checkNums(){
		if (document.getElementById("one1").checked){
		rule1=true;		
		}			
		else {
		rule1=false; }

		if (document.getElementById("two").checked){
		rule2=true;		
		}	
		
		else {
		rule2=false; }
		
		if (document.getElementById("three").checked){
		rule3=true;		
		}			
		else {
		rule3=false; }
	
		if (document.getElementById("four").checked){
		rule4=true;		
		}	
		else {
		rule4=false; }

		if (document.getElementById("five").checked){
		rule5=true;		
		}			
		else {
		rule5=false; }

		if (document.getElementById("six").checked){
		rule6=true;		
		}	
		else {
		rule6=false; }
		
		if (document.getElementById("seven").checked){
		rule7=true;		
		}			
		else {
		rule7=false; }
	
		if (document.getElementById("eight").checked){
		rule8=true;		
		}	
		else {
		rule8=false; }

		if (document.getElementById("nine").checked){
		rule9=true;		
		}			
		else {
		rule9=false; }
	
		if (document.getElementById("zero").checked){
		rule0=true;		
		}	
		else {
		rule0=false; }
}

//can put 3 functions in 1 function with if statement get id...  do later.
function runStart(){
	//create a new MyGrid object called grid
	checkNums();	
	var width  =$("#width").val();
	var height =$("#height").val()
	var numX   =$("#numX").val();
	var numY   =$("#numY").val();

	grid =new MyGrid ([],width,height,numX,numY);
	input=0;
	grid.initCells(input);
}

function runInit(){

window.grid = new MyGrid ([],width,height,numX,numY);


}



$("#startButton").click(function(){
  runStart();	  
	$(".cell").click(function(){
	//alert($("#startButton").data("ilocation"));
	// alert($("event.target").val());	
	});
});

$("#initButton").click(function(){
  runInit();
 alert("rule 1 is "+rule1.toString()+".rule 2 is "+rule2.tostring()+".rule 3 is "+rule3.tostring()+
      "rule 4 is "+rule4.toString()+".rule 4 is "+rule4.tostring()+".rule 5 is "+rule5.tostring()+
      "rule 6 is "+rule6.toString()+".rule 7 is "+rule7.tostring()+".rule 8 is "+rule8.tostring()+
      "rule 0 is "+rule0.toString());
  });

$("#updateButton").click(function(){
  checkNums();
  window.grid.updateCells();
  });




//store the grid object in the body, with id== storage
		//$('body').data('storage', grid);

		//clear the wrapper so we have a clean page
		//$("body").detach();
		
		//call back the grid in case we deleted it (not sure)
		//grid=$('body').data('storage');

		//update the grid
		//grid.updateCells();

	//MyGrid (Grid,sizeX,sizeY,noX,noY,marg)
	//initialize grid


//$("body").append("<div class='wrapper'>");	


	/*requestAnimationFrame(animate,1200);
	function animate() {
		//grid.initCells();
		grid.updateCells();			
		requestAnimationFrame(animate,1200);
	}*/	

//	animate();
	/*
	function animate() {
	    setTimeout(function() {
		grid.updateCells();		
		requestAnimationFrame(draw);
		// Drawing code goes here
	    }, 1200);
	}*/
	/*
	
function setValue()
{
    window.myValue = "test";
}

function getValue()
{
    alert(window.myValue); // "test" (assuming setValue has run)
}
	*/
/*if (rule1==false) { $("#numbers").append("1 false"); }
	else {$("#numbers").append("1 true");}


		$("#numbers").append(width);*/  //check if rules are implemented.
	//width= document.getElementById("width").value;
	

//###################################	



// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)on
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


		
}); // end doc ready; do not delete this!


