<!--
	Hire me :)
-->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Cooper Goeke - a web developer & designer.</title>
		<meta name="description" content="The portfolio of Cooper Goeke, a web developer based in Cincinnati, Ohio.">
		<meta name="keywords" content="cooper, goeke, portfolio, website, developer, designer, programmer">
		<meta name="author" content="Cooper Goeke">
		
		<!-- Fonts -->
		<link href='https://fonts.googleapis.com/css?family=Raleway:600,400,500,300,200,400italic' rel='stylesheet' type='text/css'>
		
		<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="./styles/stylesheets/main_styles.css">
		
		<!-- Scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>
		<script src="https://unpkg.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>
		<script src="./scripts/main_scripts.js"></script>
		
		<!--Favicon-->
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="/favicon/manifest.json">
		<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#4374ff">
		<link rel="shortcut icon" href="/favicon/favicon.ico">
		<meta name="msapplication-config" content="/favicon/browserconfig.xml">
		<meta name="theme-color" content="#4374ff">
		
		<!-- Facebook -->
		<meta property="fb:app_id"			content="1302524843118765" />
		<meta property="og:url"				content="http://coopergoeke.com/" />
		<meta property="og:title"			content="Cooper Goeke - a web developer & designer." />
		<meta property="og:description"		content="The portfolio of Cooper Goeke, a web developer based in Cincinnati, Ohio." />
		<meta property="og:image"			content="http://coopergoeke.com/images/CooperGoeke.jpg" />

	</head>
	<body>
		<div id="header_logo_wrapper" class="loading">
			<img id="header_logo_2" class="header_logo" src="./images/header_logo_2.svg">
			<img id="header_logo_3" class="header_logo" src="./images/header_logo_3.svg">
			<img id="header_logo_4" class="header_logo" src="./images/header_logo_4.svg">
			<img id="header_logo_5" class="header_logo" src="./images/header_logo_5.svg">
			<h1 class="hidden">Cooper<span>Goeke</span></h1>
		</div>
		<div id="loading_screen">
			<img src="./images/loader.gif" alt="">
			<p>Loading...</p>
		</div>
		<?php require('./html_partials/menu.html'); ?>
		<?php require('./html_partials/side_navigation.html'); ?>
		<?php require('./html_partials/page_5.html'); ?>
		<?php require('./html_partials/page_4.html'); ?>
		<?php require('./html_partials/page_3.html'); ?>
		<?php require('./html_partials/page_2.html'); ?>
		<?php require('./html_partials/page_1.html'); ?>
	</body>
</html>