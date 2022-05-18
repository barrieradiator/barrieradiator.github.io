const WEBSITE_NAME = "Barrie Radiator";

function displayIndex() {
	document.title = WEBSITE_NAME;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME;
	paragraph.innerHTML = "Default Home Page Data";
}

function displayHome() {
	var pageTitle = " - Home";
	document.title = WEBSITE_NAME + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + pageTitle;
	paragraph.innerHTML = "Home";
}

function displayAboutUs() {
	var pageTitle = " - About Us";
	document.title = WEBSITE_NAME + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + pageTitle;
	paragraph.innerHTML = "Gerry is one of 2 licensed mechanics! and other text data goes here. Images can go here also.";
}

function displayContactUs() {
	var pageTitle = " - Contact Us";
	document.title = WEBSITE_NAME + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + pageTitle;
	paragraph.innerHTML = "Contact Us: <br>Email:<a href='mailto:mail@mail.com'>mail@mail.com</a> <br>Phone: <a href='tel:9051234567'>(905)123-4567</a>";
}

function displayFindUs() {
	var pageTitle = " - Find Us";
	document.title = WEBSITE_NAME + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + pageTitle;
	paragraph.innerHTML = "You can find us at 123 main street";
	
}

function displayError() {
	var pageTitle = " - Error";
	document.title = WEBSITE_NAME + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + pageTitle;
	paragraph.innerHTML = "Error! Something went wrong!";
}

function checkUrlAndLoadCorrespondingDisplay() {
	if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#home" || window.location.href == "/index.html#home" || window.location.href == "/#home") {
		displayHome();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html" || window.location.href == "/index.html" || window.location.href == "/") {
		displayIndex();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#about-us" || window.location.href == "/index.html#about-us" || window.location.href == "/#about-us") {
		displayAboutUs();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#contact-us" || window.location.href == "/index.html#contact-us" || window.location.href == "/#contact-us") {
		displayContactUs();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#find-us" || window.location.href == "/index.html#find-us" || window.location.href == "/#find-us") {
		displayFindUs();
	}
	else {
		displayError();
	}
}