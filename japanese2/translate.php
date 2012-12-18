<?php
		$text=$_REQUEST;
	
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
		
		$language = "english";
		
		#query to select the kanji (pictogram), english, and kana(syllabic) of the input
		$q="select `kanji`,`kana`,`english` from `edict` where `{$language}` like '{$padding1}{$text}{$padding2}'";
		
		$definition = DB::instance(DB_NAME)->select_rows($q, $type = 'assoc');
		# Pass information to the view
		#$this->template->content->definition = $definition;
		# Render template
		#echo $this->template;
		#var_dump($definition);
	
