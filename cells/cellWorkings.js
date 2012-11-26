

$(document).ready(function() { // start doc ready; do not delete this!

//BASIC IDEA
//divide grid up into y*x points.  Create y*x matrix;  Store present itteration alive/dead values in matrix.
//alive =1, dead =0;  
//thus we have an y*x matrix of 1s and 0s.  
//output the present iteration
//loop through the present array, testing each point for alive or dead, and updating thusly
//output the new values


var rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule0;
/*these are the reproductive rules.  they are boolean values
since they are the reproductive rules, if the rule is set to true, and a certain condition is met
the cell will reproduce and attain a value of 1.  else the cell dies and ==0;
the condition to be met is the number of living nearby-neighbors.  
example: if nearby neighbors of cell (a,b)=Q
then check if ruleQ=true or false.  if true, then (a,b)=1; if false, than (a,b)=0.  Other rules != ruleQ have no bearing
*/



function MyGrid (Grid,sizeX,sizeY,noX,noY) {
//This is the basic object, the grid we are playing on
	this.Grid=Grid;
	this.sizeX=sizeX;
	this.sizeY=sizeY;
	this.noX=noX;
	this.noY=noY;
	this.initCells=initCells;
	this.updateCells=updateCells;
	this.countNeighbors=countNeighbors;
	this.changeColors=changeColors;
}



function countNeighbors(w,z){
//this function will count the number of alive neighbors of a gridpoint.  
//the 2 arguments are the y,x coordinates of the grid point.
//it returns the count;  The grid looks like a rectangle with coordinates:
		/*  (0,0)   (0,maxX-1)
		    (maxY-1,0)   (maxY-1, maxX-1) 	
		*/
	var count=0;
	var minX, maxX, minY, maxY; 	
	//the following if else statements are needed to take care of border situations 

	if (w==0){minY=0;}
	else     {minY=w-1;}  

	if (w==(this.noY-1)){
		maxY=(w);}
	else	{maxY=w+1;}

	if (z==0){minX=0;}
	else     {minX=z-1;}   
	
	if (z==(this.noX-1)){
		maxX=z;}
	else	{maxX=(z+1);}

	for(var i=minX; i<maxX+1; i++){
		for(var j =minY;j<maxY+1;j++){
			if (this.Grid[i][j]==1)  {count++;} 	//nothing happens if you have a "dead" cell
		}
	}

	if (this.Grid[w][z]==1) {count--;}  //dont count your own grid point	
	return count;
}


function initCells(){
//initialize the cell board	
	var first =function(){
	//get the value from the radio to determine the initialization
		if (document.getElementById("dead").checked) {return 0;}
		if (document.getElementById("alive").checked) {return 1;}
		if (document.getElementById("random").checked) {return Math.round(Math.random());}
							//use Math fcn to populate entries with 1 or 0
	} 	
	
	$("#wrapper").empty(); //clear wrapper of formatting
	
	//for loop in for loop creates array of arrays, thus an "noY" x "noX" matrix.  
	//also Use CSS and Jquery to interpret matrix as visual grid of appropriate colors
	for(var i=0; i< this.noY; i++) {
		this.Grid[i] = new Array();	
		for(var j=0; j<this.noX; j++){
			this.Grid[i][j]=first();			
			if (this.Grid[i][j]== 0) {
				$("#wrapper").append("<div class='cell zero' id='"+i+"."+j+"'' > </div>");
				//attach an unique id to each cell that is its coordinates in "y.x" form 
			}
			else {
				$("#wrapper").append("<div class='cell one'  id='"+i+"."+j+"'' > </div>");
			}			
		}
		$("#wrapper").append("<div class='footer'> </div>");		
	} 

	var x=(this.sizeX-this.noX-1)/this.noX;
	var y=(this.sizeY-this.noY-1)/this.noY;
	//take parameters to adjust the size of the output boxes and margins.  take into account 1px per edge.
	$(".cell").css("width", x);
	$(".cell").css("height", y );	
}

var tempGrid= new Array();
//will need this var in a minute

function updateCells(){
//update the Cells
	//set up a temporary Grid so that we can sequentially update all the values in the cell "at once"
	//ie without having the calculation being affected by previously updated gridpoints.  
	//I dont know if there is a more efficient way to do this.
	for(var i=0; i< this.noY; i++) {
		tempGrid[i]=new Array();
		for(var j=0; j<this.noX; j++){
			tempGrid[i][j]=this.Grid[i][j];
		}	
	}
	
	$("#wrapper").empty();	//clear our wrapper of CSS/HTML
	for(var i=0; i< this.noY; i++) {
		for(var j=0; j<this.noX; j++){
			var a= this.countNeighbors(i,j);  //count the number of living neighbors
			switch (a){  //now decide what to do based upon that.
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
				$("#wrapper").append("<div class='cell one' value='"+i+"."+j+"'' ></div>");		
			} 
			else {	
				$("#wrapper").append("<div class='cell zero' value='"+i+"."+j+"'' ></div>");		
			}
		}	
		$("#wrapper").append("<div class='footer'> </div>");	//start the next row
	} 	
	//have to do another loop to reset the Grid values.
	for(var i=0; i< this.noY; i++) {
		for(var j=0; j<this.noX; j++){
			this.Grid[i][j]=tempGrid[i][j];
		}	
	}
	
	var x=(this.sizeX-this.noX-1)/this.noX;
	var y=(this.sizeY-this.noY-1)/this.noY;
	$(".cell").css("width", x);
	$(".cell").css("height", y );
}


function checkNums(){
//this function is used to apply the rules you toggle in the html body		
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

	if (document.getElementById("zero").checked){
	rule0=true;		
	}	
	else {
	rule0=false; }
}




function changeColors(){  //function to change the colors of a tile
	var coordinates;	
	$(".cell").click(function(event) { //acts on click
		//splice up that tag we assigned earlier as the id to get the x and y coordinates
		coordinates=(event.target.id);
		var middle=coordinates.indexOf(".");
		var y = Number(coordinates.slice(0,middle+1));
		var x = Number(coordinates.slice(middle+1,coordinates.length));
		//on click your Grid value changes from 1-->0 or vice versa
			window.grid.Grid[y][x]==(window.grid.Grid[y][x])%2; 
		//when you click, you will also alternate the classes of one and zero aka living and dead		
		if(     $(this).hasClass("one") ) {		
			$(this).removeClass("one");
			$(this).addClass("zero");
			}
		else{		
			$(this).removeClass("zero");
			$(this).addClass("one");
		}
	});
}


$("#startButton").click(function(){
//when you click the start button, this happens:
	checkNums();  //get the rules
	              //get the inputs 		
	var width  =$("#width").val();
	var height =$("#height").val()
	var numX   =$("#numX").val();
	var numY   =$("#numY").val();
		      //make a new grid with those inputs
	grid =new MyGrid ([],width,height,numX,numY);
		      //initiate it with initialization variable determining whether random/dead/alive		
	grid.initCells();
		      //allow colors to be changed 	
	changeColors.call(grid);
});


$("#updateButton").click(function(){
//when you click the update button, this happens:
//get the rules.  update the cells.  allow colors to be changed
	checkNums();
	window.grid.updateCells();
  	changeColors.call(grid);
});
/*
function animate() {
//In the future, may want to add animation functionality		
		grid.updateCells();			
		requestAnimationFrame(animate,1200);
}
*/

//###################################	
//further animation code...


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


