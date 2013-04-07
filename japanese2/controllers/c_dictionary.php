<?php

class dictionary_controller extends base_controller {
	
	public function __construct() {
			parent::__construct();
	} 

	public function index() {
		echo "Welcome to the index";
	}

	#main function.  we will use this to access the database and lookup words, and then return translations
	public function lookup($text,$lang,$sqlLimit) {
			
			# Setup view
			$this->template->content = View::instance('v_dictionary_lookup');
			$this->template->title   = "Dictionary";
					
			/*
				here we also take into account the database formatting, where kana, kanji have no space surrounding their table entries, 
				but english does (ie, in sentences).  	
				Note, language must be either "kana", "english", or "kanji" to connect with our DB columns. */
			
				//assume kanji as the base case language
				
		switch ($lang) {
			case "english":
				$language ="english";
				$padding1="% "; 
				$padding2=" %";
			break;
			case "kana":
				$language ="kana";
				$padding1=""; 
				$padding2="%";
			break;
			default:
				$language ="kanji";
				$padding1=""; 
				$padding2="%";
		}
				
			#sanitize input for sql
			$text = DB::instance(DB_NAME)->sanitize($text);
			
			#make a nice, customized sql query
			$q="select `kanji`,`kana`,`english` from `edict` where `{$language}` like '{$padding1}{$text}{$padding2}' {$sqlLimit}";
			
			#use a library with our query to pull data from the database
			$definition = DB::instance(DB_NAME)->select_rows($q, $type = 'assoc');
			
			# Pass information to the view
			$this->template->content->text = $text;
			$this->template->content->definition = $definition;
			
			# Render template
			echo $this->template;		
	}

}