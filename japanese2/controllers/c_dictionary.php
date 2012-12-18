<?php

class dictionary_controller extends base_controller {
	
	public function __construct() {
			parent::__construct();
	} 

	public function index() {
		echo "Welcome to the index";
	}

	public function lookup($text) {
			
		#language must be either "kana", "english", or "kanji" to connect with our DB columns. 
		
		# Setup view
		$this->template->content = View::instance('v_dictionary_lookup');
		$this->template->title   = "Dictionary";
		
		#set up mysql connection
		$link    = mysql_connect('localhost', 'user', '');
		
		#change charset to utf8 so can read roman and japanese
		if( function_exists('mysql_set_charset') ){
		-	mysql_set_charset('utf8', $link);
		}
		else{
			mysql_query("SET NAMES 'utf8'", $link);
		}
		
		#  This function below converts a character into unicode decimal
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
		# UNICODE DECIMAL VALUES:  katakana 12448-12543,12784-12799 kana 12353-12438, 12441-12447
		#alphabet and assorted:alphabet: 65-90,97-122,126,96,92,64, 32=space, 256-591= random letters
		
		
		
		
		
		#boolean variables we will use in the next loop for the purposes of setting the language
		$isItKana=true;
		$isItRoman=true;
		
		/*the letter values in the first conditionalbelow are kana/katakana or space.  the second are roman(latin) alphabet 
		  if the unicode expression for any of the letters of your selected word are NOT in these values, than they are not
		  all kana, or all roman, and thus the above booleans will be set false
		  we use mb_FOO because this treates multibyte unicode characters as single letters
		  also, lets scrub thing of space marks while we are at it.  use dummy var $word*/
			
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
		
		
		
		
		
		
		//$text=$word;
	
		
			$language; 
			/*now use the booleans to set the $language
			here we also take into account the database formatting, where kana, kanji have no space surrounding their table entries, 
			but english does (ie, in sentences).  */
	
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
				
		$q="select `kanji`,`kana`,`english` from `edict` where `{$language}` like '{$padding1}{$text}{$padding2}'";
		
		$definition = DB::instance(DB_NAME)->select_rows($q, $type = 'assoc');
		# Pass information to the view
		mysql_close();
		$this->template->content->language = $language;
		$this->template->content->text = $text;
		$this->template->content->definition = $definition;
		$this->template->content->isItKana =$isItKana;
		$this->template->content->isItRoman =$isItRoman;
		
		# Render template
		echo $this->template;		
	}

}