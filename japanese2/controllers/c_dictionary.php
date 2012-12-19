<?php

class dictionary_controller extends base_controller {
	
	public function __construct() {
			parent::__construct();
	} 

	public function index() {
		echo "Welcome to the index";
	}

	#main function.  we will use this to access the database and lookup words, and then return translations
	public function lookup($text) {
			
			# Setup view
			$this->template->content = View::instance('v_dictionary_lookup');
			$this->template->title   = "Dictionary";

			
			/*This function below converts a character into unicode decimal.  we need this since we are using mixed japanese/roman
			ref: http://stackoverflow.com/questions/9361303/can-i-get-the-unicode-value-of-a-character-or-vise-versa-with-php */
			function _uniord($c) {
				if (ord($c{0}) >=0 && ord($c{0}) <= 127)
					return ord($c{0});
				if (ord($c{0}) >= 192 && ord($c{0}) <= 223)
					return (ord($c{0})-192)*64 + (ord($c{1})-128);
				if (ord($c{0}) >= 224 && ord($c{0}) <= 239)
					return (ord($c{0})-224)*4096 + (ord($c{1})-128)*64 + (ord($c{2})-128);
				if (ord($c{0}) >= 240 && ord($c{0}) <= 247)
					return (ord($c{0})-240)*262144 + (ord($c{1})-128)*4096 + (ord($c{2})-128)*64 + (ord($c{3})-128);
				if (ord($c{0}) >= 248 && ord($c{0}) <= 251)
					return (ord($c{0})-248)*16777216 + (ord($c{1})-128)*262144 + (ord($c{2})-128)*4096 + (ord($c{3})-128)*64 + (ord($c{4})-128);
				if (ord($c{0}) >= 252 && ord($c{0}) <= 253)
					return (ord($c{0})-252)*1073741824 + (ord($c{1})-128)*16777216 + (ord($c{2})-128)*262144 + (ord($c{3})-128)*4096 + (ord($c{4})-128)*64 + (ord($c{5})-128);
				if (ord($c{0}) >= 254 && ord($c{0}) <= 255)    //  error
					return FALSE;
				return 0;
					} 					
			/*UNICODE DECIMAL VALUES:  katakana 12448-12543,12784-12799 kana 12353-12438, 12441-12447
			alphabet and assorted:alphabet: 65-90,97-122,126,96,92,64, 32=space, 256-591= random letters*/
			
			/*the letter values in the first conditionalbelow are kana/katakana or space.  the second are roman(latin) alphabet 
			  if the unicode expression for any of the letters of your selected word are NOT in these values, than they are not
			  all kana, or all roman, and thus the above booleans will be set false
			  we use mb_FOO because this treates multibyte unicode characters as single letters*/
				
			#boolean variables we will use in the loop for the purposes of setting the language later
			$isItKana=true;
			$isItRoman=true;
			
			for($i=0; $i<mb_strlen($text,'utf-8'); $i++){
				
				$letter=mb_substr($text,$i,$i+1,'utf-8');
				$number=_uniord($letter);
				//don't do anything if we get a space, aka 32
				if($number!=32){ 
				if(! (($number>=12353 && $number<=12543) ||($number>=12441 && $number<=12447) ||($number>=12784 && $number<=12799)
					|| ($number>=12353 && $number<=12438) || ($number>=12441 && $number<=12447)))
						{
						$isItKana=false;
						}
				if(! (($number>=65 && $number<=90) || ($number>=97 && $number<=122) || ($number>=256 && $number<=591)  
					/* these numbers caused bugs...|| 126 || $number==96 || $number==92 || $number==64*/))	
						{
						$isItRoman=false;
						}
				}
			}
				/*now use the booleans to set the $language
				here we also take into account the database formatting, where kana, kanji have no space surrounding their table entries, 
				but english does (ie, in sentences).  	
				Note, language must be either "kana", "english", or "kanji" to connect with our DB columns. */
			
				$language ="kanji";
				$padding1=""; 
				$padding2="%";
		
				if($isItKana)
					{
							$language ="kana";
					}
				
				if($isItRoman)
					{
							$language ="english";
							$padding1="% "; 
							$padding2=" %";
					}	
			
			#sanitize input for sql
			$text = DB::instance(DB_NAME)->sanitize($text);
			
			#make a nice, customized sql query
			$q="select `kanji`,`kana`,`english` from `edict` where `{$language}` like '{$padding1}{$text}{$padding2}'";
			
			#use a library with our query to pull data from the database
			$definition = DB::instance(DB_NAME)->select_rows($q, $type = 'assoc');
			
			# Pass information to the view
			$this->template->content->text = $text;
			$this->template->content->definition = $definition;
			
			# Render template
			echo $this->template;		
	}

}