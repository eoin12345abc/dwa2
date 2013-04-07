<!DOCTYPE html>
<html>
<head>
	<title><?=@$title; ?></title>
<!-- JS -->
	<script src="/jquery-1.9.1.min.js"></script>
	<script src="/dictionary.js"> </script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
	<META HTTP-EQUIV="Expires" CONTENT="-1">
	
	
	<!-- Controller Specific JS/CSS -->
	<?php echo @$client_files; ?>
	
<link rel="stylesheet" type="text/css" href="dictionaryStyles.css">
	
</head>

<body>	
	<div id='results'> 
	</div>
	<div class='footer'></div>
 
    <?=$content;?> 
	
	
	
</body>
<HEAD>
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="-1">
</HEAD>
</html>


 
   
