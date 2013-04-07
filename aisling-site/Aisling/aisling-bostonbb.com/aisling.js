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




//lets us know if we have clicked a button, via adding a class to it, so we can change its color with css
jQuery(".buttn").mousedown(
	function(){
	  jQuery(this).addClass("clicked");
	  setTimeout(function(){
		jQuery(".buttn").removeClass("clicked");
	  },800);
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


//toggle hide/show when you click terms/conditions button
jQuery("#termsButton").click( 
	function(){
		jQuery("#termsAndConditions").fadeToggle(350, "swing");
		 jQuery("#termsAndConditions").scrollTop(0);
		jQuery("#blanket").fadeToggle(350, "swing");
});

//toggle hide/show when you click privacy button
jQuery("#privacyButton").click( 
	function(){
		jQuery("#privacyPolicy").fadeToggle(350, "swing");
		jQuery("#blanket").fadeToggle(350, "swing");
		jQuery("#termsAndConditions").scrollTop(0);
});

//close the privacy policy, terms and conditions, and css when you click the close button.
jQuery(".closeButton").click(
	function(){
		jQuery("#privacyPolicy").hide();
		jQuery("#blanket").hide();
		jQuery("#termsAndConditions").hide();
});

jQuery(document).bind("click", function (e) {
    if((jQuery(e.target).closest(".popUpButton").length == 0)&&(jQuery(e.target).closest(".popUpBox").length == 0)
		) {
        // click happened outside of menu, hide any visible menu items
		jQuery(".popUpBox").hide();
		jQuery("#blanket").hide();
    }
	});

//jQuery(".info").css({'position':'relative','top':jQuery(this).parent().innerHeight()+'px'});

//resize the font so it fits on one line
//column 2 =721 px, horizontal padding = 60 total (L+R) button = 80px.  ...  .width() only takes in the inner div width, doesnt count padding
var fSize=parseInt(jQuery("h1").css("font-size"));
var c2Size=(parseInt(jQuery(".column2").width()));
function changeFontSize() {
	while (parseInt(jQuery("h1").width())+parseInt(jQuery(".reserve").width())>(c2Size-25))
	{	
		fSize=(fSize)*.95;
		jQuery("h1").css("font-size",fSize+"px");
	}
}
changeFontSize();


/*
//the following image resize function is from adeeljaz https://github.com/adeelejaz/jquery-image-resize/blob/v2.1.2/jquery.ae.image.resize.min.js
(function(a){a.fn.aeImageResize=function(b){var c=0,d=a.browser.msie&&6==~~a.browser.version;return!b.height&&!b.width?this:(b.height&&b.width&&(c=b.width/b.height),this.one("load",function(){this.removeAttribute("height"),this.removeAttribute("width"),this.style.height=this.style.width="";var a=this.height,d=this.width,e=d/a,f=b.height,g=b.width,h=c;h||(f?h=e+1:h=e-1);if(f&&a>f||g&&d>g)e>h?f=~~(a/d*g):g=~~(d/a*f),this.height=f,this.width=g}).each(function(){(this.complete||d)&&a(this).trigger("load"),this.src=this.src}))}})(jQuery);

jQuery(function() {
  jQuery( ".duleekPic" ).aeImageResize({ height: 300, width:300 });
});
*/
				
}); // end doc ready; do not delete this!
