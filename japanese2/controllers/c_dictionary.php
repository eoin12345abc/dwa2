<?php

class dictionary_controller extends base_controller {
	
	public function __construct() {
			parent::__construct();
			echo "users_controller construct called<br><br>";
	} 

	public function index() {
		echo "Welcome to the index";
	}

	public function lookup($language, $text) {
	

		function lstrip($string, $charlist) {
			// removes everything from start of string to last occurence of char in charlist
			$pos=0;
			$charlist = str_split($charlist);
			foreach ($charlist as $char) {
				$pos = max(strpos($string, $char), $pos);
			}
			$string_stripped = substr($string, $pos + 1);
			return $string_stripped;
			#courtesy of http://php.net/manual/en/function.ltrim.php
		}
		
		
		#language must be either "kana", "english", or "kanji" to connect with our DB columns. 
		# Setup view
		$this->template->content = View::instance('v_dictionary_lookup');
		$this->template->title   = "Dictionary";
		
		$link    = mysql_connect('localhost', 'user', '');
		
		#change charset to utf8 so can read roman and japanese
		if( function_exists('mysql_set_charset') ){
			mysql_set_charset('utf8', $link);
		}
		else{
			mysql_query("SET NAMES 'utf8'", $link);
		}
		#for testing purposes, outpout the present charset:  
		#$charset = mysql_client_encoding($link);
		#echo "The current character set is: $charset\n";
		
		
		#here we take into account the database, where kana, kanji have no space surrounding their table entries, but english does (ie, in sentences).  
		if($language == "english"){
			$padding1="% "; 
			$padding2=" %";
		}
		if($language == "kana" or $language == "kanji"){
			$padding1=""; 
			$padding2="";
		}
		
		#query to select the kanji (pictogram), english, and kana(syllabic) of the input
		
		#use in_array with custom character arrays to test for and set $language
		$q="select `kanji`,`kana`,`english` from `edict` where `{$language}` like '{$padding1}{$text}{$padding2}'";
		
		$definition = DB::instance(DB_NAME)->select_rows($q, $type = 'assoc');
		# Pass information to the view
		mysql_close();
		$this->template->content->text = $text;
		$this->template->content->definition = $definition;
		# Render template
		echo $this->template;		
	}

}