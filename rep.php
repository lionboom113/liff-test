<!-- This file allows you to host this page as a static file on Heroku -->
<?php 
	session_id('same_session_id_for_all');
	session_start();

	$a = $_SESSION['pollCountYes'];
	$b = $_SESSION['pollCountNo'];

	if ($a == null) {
		$a = 0;
	}

	if ($b == null) {
		$b = 0;
	}

	echo $a; 
	echo $b;

	$ans = ($_GET["ans"]);
	if($ans == 'yes') { 
	 	$a++;
	 } else {
	 	$b++;
	}
	$_SESSION['pollCountYes'] = $a;
	$_SESSION['pollCountNo'] = $b;
	 echo $_SESSION['pollCountYes'];
	 echo $_SESSION['pollCountNo'];
 ?>
YES:<?php echo $a; ?>
NO:<?php echo $b; ?>