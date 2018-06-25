<!-- This file allows you to host this page as a static file on Heroku -->
<?php 
	session_id('same_session_id_for_all');
	session_start();

	$a = $_SESSION['pollCountYes'];
	$b = $_SESSION['pollCountNo'];

	if ($a == null) {
		$a = 0;
	}

	$ans = ($_GET["ans"]);
	if($slide == 'yes') { 
	 	$a++;
	 } else {
	 	$b++;
	}
	$_SESSION['pollCountYes'] = $a;
	$_SESSION['pollCountNo'] = $b;
 ?>
YES:<?php echo $a; ?>
NO:<?php echo $b; ?>