<?
public function p_getDef() {
		
	# Dump out the results of POST to see what the form submitted
	// print_r($_POST);
	
		
	# Insert this user into the database
	$user_id = DB::instance(DB_NAME)->insert("users", $_POST);
	
	# For now, just confirm they've signed up - we can make this fancier later
	echo "You're signed up";
		
}