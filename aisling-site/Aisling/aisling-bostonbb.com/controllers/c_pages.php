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
			$title="Aisling Bed and Breakfast";
			$metaDesc="Welcome to Aisling Bed and Breakfast, located in the heart of Boston.";
			$metaKeys="";
			switch ($contentName) {
				case "home":
					$link="_v_index_home";
					$title="Aisling Bed and Breakfast";
					$metaDesc="Welcome to Aisling Bed and Breakfast, located in the heart of Boston.";
					$metaKeys="Bed and Breakfast, Irish, Hotel, Boston, Inn, Aisling, Motel,Stay,Cheap,Central,Delicious, Dream";
					break;
				case "house":
					$link="_v_index_house";
					$title="Aisling Bed and Breakfast House";
					$metaDesc="An historic 19th centruy brownstone.";
					$metaKeys="Boston,Brownstone,Historic,Old,Central,Convenient,Value,Aisling,19th Century,Townhouse,Comfortable,Bed and Breakfast";
					break;
				/*case "reserve":
					$link="_v_index_reserve";
					break;*/
				case "gallery":
					$link="_v_index_gallery";
					$title="Aisling Bed and Breakfast Gallery";
					$metaDesc="View pictures of our bedrooms.";
					$metaKeys="Gallery,Pictures,Bedroom,View,Images,Boston,Bed and Breakfast,Aisling,Dream,Irish";
					break;
				case "rates":
					$link="_v_index_rates";
					$title="Aisling Bed and Breakfast Rates";
					$metaDesc="Our rates are per room and include breakfast.";
					$metaKeys="Rates,Cheap,Stay,Value,Check,Prices,Cost,Bargain,Breakfast Included,Per Room,Bedroom,Dream";
					break;
				case "booking":
					$link="_v_index_booking";
					$title="Aisling Bed and Breakfast Booking";
					$metaDesc="Book a room at Aisling Bed and Breakfast";
					$metaKeys="";
					break;
				case "contact":
					$link="_v_index_contact";
					$title="Contact Aisling Bed and Breakfast";
					$metaDesc="Please contact us for any questions.";
					$metaKeys="Contact,Phone,Email,Convenient,Time,Hours,Aisling,Bed and Breakfast,Check In";
					break;
				case "boston":
					$link="_v_index_boston";
					$title="Aisling Bed and Breakfast Boston";
					$metaDesc="Enjoy the rich American history of Boston. We are minutes away from many sites.";
					$metaKeys="Boston,History,Historic,Hotel,Fenway,Museums,Red Socks,Central,View,Freedom Trail,";
					break;
				case "location":
					$link="_v_index_location";
					$title="Aisling Bed and Breakfast Location";
					$metaDesc="The South End is known as Boston's \"Restaurant Row.\"";
					$metaKeys="Boston,History,Historic,Hotel,Fenway,Museums,Red Socks,Central,View,Freedom Trail,";
					break;
				case "reviews":
					$link="_v_index_reviews";
					$title="Aisling Bed and Breakfast Reviews";
					$metaDesc="Read some of our superb reviews on sites like Trip Advisor or The Irish Times.";
					$metaKeys="Reviews,Bed and Breakfast,Trip Advisor,TripAdvisor,BedandBreakfast.com,good reviews, user,user review,guest,guest review";
					break;
				case "breakfast":
					$link="_v_index_breakfast";
					$title="Aisling Bed and Breakfast Food";
					$metaDesc="Delicious culinary surprises and fine conversation await you at breakfast.";
					$metaKeys="Breakfast,Delicious,Home Cooked,Coffee,Conversation,Host,Guests,Aisling,Bed and Breakfast, Boston,Variety";
					break;
				case "hosts":
					$link="_v_index_hosts";
					$title="Aisling Bed and Breakfast Dympna and James";
					$metaDesc="Your hosts Dympna and James take pride in making you feel at home.";
					$metaKeys="Hosts,Dympna,James,Irish,Friendly,Conversation,Helpful,Warm,Aisling,Boston,Bed and Breakfast";
					break;
				case "blog":
					$link="_v_index_blog";
					$title="Aisling Bed and Breakfast Blog";
					$metaDesc="Read our blog and find out about life in Boston.";
					$metaKeys="Blog,Aisling,Boston,Bed and Breakfast,Read,Update,Post,Reviews,Life";
					break;
				default:
				   $link="_v_index_home";
				   $title="Aisling Bed and Breakfast Home";
				   $metaDesc="Welcome to Aisling Bed and Breakfast, located in the heart of Boston.";
				   $metaKeys="Bed and Breakfast, Irish, Hotel, Boston, Inn, Aisling, Motel,Stay,Cheap,Central,Popular,Hospitabal,Delicious, Dream";
					
}
			$this->template->content = View::instance($link);
			
			#set client files.  Had to perform after view code since there is the gallery exception.
			$this->template->client_files = Utils::load_client_files($client_files);   
			
		# Now set the <title> tag
			$this->template->title = $title;
		
		# Now set the <meta description> tag.  
		$this->template->metaDesc= $metaDesc;
		
		# Now set the <meta keywords> tag
		$this->template->metaKeys= $metaKeys;
		
			
	
		
	      		
		# Render the view
			echo $this->template;

	}
	
	
	
		
} // end class
