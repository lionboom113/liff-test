<!-- This file allows you to host this page as a static file on Heroku -->
<?php 
	$poll = ($_GET["poll"]);
	session_id($poll);
	session_start();

	$a = $_SESSION['pollCountYes'];
	$b = $_SESSION['pollCountNo'];

	if ($a == null) {
		$a = 0;
	}

	if ($b == null) {
		$b = 0;
	}

	$ans = ($_GET["ans"]);
	if($ans == 'yes') { 
	 	$a++;
	 } else if($ans == 'no'){
	 	$b++;
	}
	$_SESSION['pollCountYes'] = $a;
	$_SESSION['pollCountNo'] = $b;
 ?>
YES:<?php echo $a; ?>
<br/>
NO:<?php echo $b; ?>