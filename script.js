const WEBSITE_NAME = "Barrie Radiator";

function displayIndex() {
	document.title = WEBSITE_NAME;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME;
	paragraph.innerHTML = "Default Home Page Data";
}

function displayHome() {
	var pageTitle = "Home";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = pageTitle;
	paragraph.innerHTML = "Home";
}

function displayAboutUs() {
	var pageTitle = "About Us";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = pageTitle;
	paragraph.innerHTML = "Gerry is one of 2 licensed mechanics! and other text data goes here. Images can go here also.";
}

function displayContactUs() {
	var pageTitle = "Contact Us";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = pageTitle;
	paragraph.innerHTML = "Contact Us: <br>Email: <a href='mailto:mail@mail.com'>mail@mail.com</a> <br>Phone: <a href='tel:9051234567'>(905)123-4567</a>";
}

function displayFindUs() {
	var pageTitle = "Find Us";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = pageTitle;
	paragraph.innerHTML = "You can find us at 123 main street!<br>(If you wish, we could add google maps to this page.)";
	
}

function displayServices() {
	var pageTitle = "Services";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = pageTitle;
	paragraph.innerHTML = "Our services are as follows:<br>(This could be an image, a PDF, or just a text menu.)";
	
}

function displayCurrentSales() {
	var pageTitle = "Current Sales";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = pageTitle;
	paragraph.innerHTML = "Here's our current sales prices!<br>(This could be an image, a PDF, or just a text menu.)";
}

function displayError() {
	var pageTitle = "Error";
	document.title = WEBSITE_NAME + " - " + pageTitle;
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + " - " + pageTitle;
	paragraph.innerHTML = "Error! Something went wrong!";
}

function checkUrlAndLoadCorrespondingDisplay() {
	if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#home" || window.location.href == "https://barrieradiator.github.io/#home" || window.location.href == "domain.com#home") {
		displayHome();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html" || window.location.href == "https://barrieradiator.github.io/" || window.location.href == "domain.com") {
		displayIndex();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#about-us" || window.location.href == "https://barrieradiator.github.io/#about-us" || window.location.href == "domain.com#about-us") {
		displayAboutUs();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#contact-us" || window.location.href == "https://barrieradiator.github.io/#contact-us" || window.location.href == "domain.com#contact-us") {
		displayContactUs();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#find-us" || window.location.href == "https://barrieradiator.github.io/#find-us" || window.location.href == "domain.com#find-us") {
		displayFindUs();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#services" || window.location.href == "https://barrieradiator.github.io/#services" || window.location.href == "domain.com#services") {
		displayServices();
	}
	else if(window.location.href == "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html#current-sales" || window.location.href == "https://barrieradiator.github.io/#current-sales" || window.location.href == "domain.com#current-sales") {
		displayCurrentSales();
	}
	else {
		displayError();
	}
}