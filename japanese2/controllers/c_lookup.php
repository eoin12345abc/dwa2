<?
public function p_definition() {
		
	# Dump out the results of POST to see what the form submitted
	// print_r($_POST);
	//select english,kana from edit where kanji like 'KANJI%'
		
	# Insert this user into the database
//	$q="select `english`,`kana` from `edict` where `english` like '"+text+"kanji%'";
	$q="select `english`,`kana` from `edict` where `english` like 'red'";
	
	$text = DB::instance(DB_NAME)->sanitize($text);
	$definition=DB::instance(DB_NAME)->query($q);
	
	$users = DB::instance(DB_NAME)->select_kv("SELECT kana, kanji FROM users where en", 'user_id', 'name');

	# For now, just confirm they've signed up - we can make this fancier later
	echo $definition;
		
}