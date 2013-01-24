//Use 'jQuery' instead of '$' to get over a conflict between jQuery and lightbox gallery

jQuery(document).ready(function() { // start doc ready; do not delete this!


jQuery(".column1").children("a").each(function() { jQuery(this).addClass("buttn");});
		
jQuery(".buttn").hover(  
	function () {
		jQuery(this).addClass("buttnOn");
	},
	function () {
		jQuery(this).removeClass("buttnOn");
	}
);

jQuery(".buttn").mousedown(
	function(){
	  jQuery(this).addClass("clicked");
});

	
//make the left side and right side of the page the same height dynamically
var leftHeight = jQuery(".column1").height();
var rightHeight = jQuery(".column2").height();
var rightWidth = jQuery(".column2").width();
var myHeight;
if (leftHeight>=rightHeight) {myHeight=leftHeight;}
else {myHeight=rightHeight;}
jQuery(".column1").css("height",myHeight);
jQuery(".column2").css("height",myHeight+8);	

//make the buttons on the first page the same height.
var buttnHeight = jQuery("#myButtnRoom").height();
jQuery("#myButtnBlog").css("height",buttnHeight);
var buttnHeight2 = jQuery("#myButtnBlog").height();



/*
$("#blanket").css("height",myHeight);
$("#blanket").css("height",myHeight+8);	
*/
//$("p").css("float",left); 
//I added 8 because this seems to come from the padding-bottom on column1 and I cant seem
//to get rid of the problem with outerHeight
//Start of stat counter code
//they have a <noscript> tag in their html...  why?



jQuery("#termsButton").click( 
	function(){
		jQuery("#termsAndConditions").fadeToggle(350, "swing");
		 jQuery("#termsAndConditions").scrollTop(0);
		jQuery("#blanket").fadeToggle(350, "swing");
});

jQuery("#privacyButton").click( 
	function(){
		jQuery("#privacyPolicy").fadeToggle(350, "swing");
		jQuery("#blanket").fadeToggle(350, "swing");
		jQuery("#termsAndConditions").scrollTop(0);
});

jQuery(document).bind("click", function (e) {
    if((jQuery(e.target).closest(".popUpButton").length == 0)&&(jQuery(e.target).closest(".popUpBox").length == 0)
		) {
        // click happened outside of menu, hide any visible menu items
		jQuery(".popUpBox").hide();
		jQuery("#blanket").hide();
    }
	});

jQuery(".info").css({'position':'relative','top':jQuery(this).parent().innerHeight()+'px'});

/*
//we want to resize thumbs so that they fit inside the thumbWrapper evenly
var column2Width =jQuery(".column2").width();
var noDuleek = 8;  //how many Duleek pics do we have?
var wrapperMargin = 0; //how many pixels of empty space shall we leave?
var column2padding; //the above should be up to column2's padding, which we cannot enter right now.
var wrapperPadding = 0;  //how many pixels of padding do you want for the thumbs wrapper?
var spaceBetween = 0;  //how many pixels in between pics?  Can set equal to wrapperPadding for parity.  
var noRows = 1;  //how many rows do we want to fit them on?
//  schematic:   [  | (t1)  (t2)  (t3)  (t4) |  ]   
//inside brackets is column 2,  inside | is thumbWrapper, inside () are thumbs

var duleekWidth= Math.floor((column2Width-2*wrapperMargin-2*wrapperPadding-(noDuleek-1)*spaceBetween)/noDuleek);


jQuery(".roomWrapper").css({"padding":wrapperPadding,"margin":wrapperMargin});
*/

/*
//the following image resize function is from adeeljaz https://github.com/adeelejaz/jquery-image-resize/blob/v2.1.2/jquery.ae.image.resize.min.js
(function(a){a.fn.aeImageResize=function(b){var c=0,d=a.browser.msie&&6==~~a.browser.version;return!b.height&&!b.width?this:(b.height&&b.width&&(c=b.width/b.height),this.one("load",function(){this.removeAttribute("height"),this.removeAttribute("width"),this.style.height=this.style.width="";var a=this.height,d=this.width,e=d/a,f=b.height,g=b.width,h=c;h||(f?h=e+1:h=e-1);if(f&&a>f||g&&d>g)e>h?f=~~(a/d*g):g=~~(d/a*f),this.height=f,this.width=g}).each(function(){(this.complete||d)&&a(this).trigger("load"),this.src=this.src}))}})(jQuery);

jQuery(function() {
  jQuery( ".duleekPic" ).aeImageResize({ height: 300, width:300 });
});
*/







	
//$(".buttn").wrap($(".buttnWrap"));
	//$(".buttn").prepend("<div class='buttnWrap'>");
	//$(".buttn").append("</div>");	
		
		
		
}); // end doc ready; do not delete this!
