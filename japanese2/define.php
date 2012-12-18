<?php
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
		$q="select `kanji`,`kana`,`english` from `edict` where `{$language}` like '{$padding1}{$text}{$padding2}'";
		
		$definition = DB::instance(DB_NAME)->select_rows($q, $type = 'assoc');
	
		
	}