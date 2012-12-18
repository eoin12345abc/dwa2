<!DOCTYPE html>
<html>
<head>
	<title><?=@$title; ?></title>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	
	<!-- JS -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
	<script src="/dictionary.js"> </script>
				
	<!-- Controller Specific JS/CSS -->
	<?php echo @$client_files; ?>
	
<link rel="stylesheet" type="text/css" href="dictionaryStyles.css">
	
</head>

<body>	
	<div id='results'> </div>
	<div class='footer'></div>
 	<div id='wrapper'></div>
 
    <?=$content;?> 
	
	
	

</body>
</html>


 
   
