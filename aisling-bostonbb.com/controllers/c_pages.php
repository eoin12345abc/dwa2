<?php

class pages_controller extends base_controller {

	public function __construct() {
		parent::__construct();
	} 
	
	/*-------------------------------------------------------------------------------------------------
	Access via http://yourapp.com/index/index/
	-------------------------------------------------------------------------------------------------*/
	public function index($contentName) {
		
		# If this view needs any JS or CSS files, add their paths to this array so they will get loaded in the head
			$client_files = Array(
				   "/aisling.css", 
				   "/aisling.js",				   
				  // "../js/lightbox.js",
				  // "../css/lightbox.css",
				    );
	    
	    	
	
		# Set the content of the template with a view file
			//$this->template->content = View::instance('v_index_index');
			$link="";
			switch ($contentName) {
				case "home":
					$link="_v_index_home";
					$title="Aisling Bed and Breakfast Home";
					break;
				case "house":
					$link="_v_index_house";
					$title="Aisling Bed and Breakfast House";
					break;
				/*case "reserve":
					$link="_v_index_reserve";
					break;*/
				case "gallery":
					$link="_v_index_gallery";
					$title="Aisling Bed and Breakfast Gallery";
					$client_files = Array(
					   "/aisling.css", 
					   "/aisling.js",
					   "/galleriffic/js/jquery.galleriffic.js",
					   "/galleriffic/js/jquery.opacityrollover.js",
					   "/galleriffic/css/galleriffic-2.css",
					   "/lightBox/prototype.js",
					   "/lightBox/scriptaculous.js?load=effects",
					   "/lightBox/lightbox.js",
					   "/lightBox/lightbox.css",
				   );
					break;
				case "rates":
					$link="_v_index_rates";
					$title="Aisling Bed and Breakfast Rates";
					break;
				case "booking":
					$link="_v_index_booking";
					$title="Aisling Bed and Breakfast Booking";
					break;
				case "contact":
					$link="_v_index_contact";
					$title="Contanct Aisling Bed and Breakfast";
					break;
				case "boston":
					$link="_v_index_boston";
					$title="Aisling Bed and Breakfast Boston";
					break;
				case "location":
					$link="_v_index_location";
					$title="Aisling Bed and Breakfast Location";
					break;
				case "hosts":
					$link="_v_index_hosts";
					$title="Aisling Bed and Breakfast Dympna and James";
					break;	
				case "breakfast":
					$link="_v_index_breakfast";
					$title="Aisling Bed and Breakfast Food";
					break;	
				case "reviews":
					$link="_v_index_reviews";
					$title="Aisling Bed and Breakfast Reviews";
					break;
				case "blog":
					$link="_v_index_blog";
					break;
				default:
				   $link="_v_index_home";
				   $title="Aisling Bed and Breakfast Home";
}
			$this->template->content = View::instance($link);
			
			#set client files.  Had to perform after view code since there is the gallery exception.
			$this->template->client_files = Utils::load_client_files($client_files);   
			
		# Now set the <title> tag
			$this->template->title = $title;
	
		
	      		
		# Render the view
			echo $this->template;

	}
	
	
	
		
} // end class
