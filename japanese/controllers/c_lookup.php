<?
public function p_definition() {
		
	# Dump out the results of POST to see what the form submitted
	// print_r($_POST);
	//select english,kana from edit where kanji like 'KANJI%'
		
	# Insert this user into the database
	$q="select english,kana from edit where kanji like '"+text+"kanji%'";
	$text = DB::instance(DB_NAME)->sanitize($text);
	$definition=DB::instance(DB_NAME)->query($q);
	
	# For now, just confirm they've signed up - we can make this fancier later
	echo $definition;
		
}