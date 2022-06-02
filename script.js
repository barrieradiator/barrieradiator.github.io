const WEBSITE_NAME = "Barrie Radiator";

const INDEX_HTML_PATH = "file:///D:/Dev/Paid%20Work/2022/05%20-%20May/Barrie%20Radiator/barrieradiator.github.io/index.html"

function hideAllPages() {	
	var page_index = document.getElementById("page-index");
	page_index.setAttribute("hidden", "hidden");
	var page_about_us = document.getElementById("page-about-us");
	page_about_us.setAttribute("hidden", "hidden"); 
	var page_contact_us = document.getElementById("page-contact-us");
	page_contact_us.setAttribute("hidden", "hidden"); 
	var page_find_us = document.getElementById("page-find-us");
	page_find_us.setAttribute("hidden", "hidden"); 
	var page_services = document.getElementById("page-services");
	page_services.setAttribute("hidden", "hidden"); 
	var page_current_sales = document.getElementById("page-current-sales");
	page_current_sales.setAttribute("hidden", "hidden"); 
}

function displayIndex() {
	hideAllPages();
	document.title = WEBSITE_NAME;
	var current_page = document.getElementById("page-index");
	current_page.removeAttribute("hidden"); 
}

function displayHome() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Home";
	var current_page = document.getElementById("page-home");
	current_page.removeAttribute("hidden"); 
}

function displayAboutUs() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - About Us";
	var current_page = document.getElementById("page-about-us");
	current_page.removeAttribute("hidden"); 
}

function displayContactUs() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Contact Us";
	var current_page = document.getElementById("page-contact-us");
	current_page.removeAttribute("hidden"); 
}

function displayFindUs() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Find Us";	
	var current_page = document.getElementById("page-find-us");
	current_page.removeAttribute("hidden"); 

}

function displayServices() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Services";	
	var current_page = document.getElementById("page-services");
	current_page.removeAttribute("hidden"); 
}

function displayCurrentSales() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Current Sales";
	var current_page = document.getElementById("page-current-sales");
	current_page.removeAttribute("hidden"); 
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
	if(window.location.href == INDEX_HTML_PATH + "#home" || window.location.href == "https://barrieradiator.github.io/#home" || window.location.href == "domain.com#home") {
		displayHome();
	}
	else if(window.location.href == INDEX_HTML_PATH || window.location.href == "https://barrieradiator.github.io/" || window.location.href == "domain.com") {
		displayIndex();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#about-us" || window.location.href == "https://barrieradiator.github.io/#about-us" || window.location.href == "domain.com#about-us") {
		displayAboutUs();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#contact-us" || window.location.href == "https://barrieradiator.github.io/#contact-us" || window.location.href == "domain.com#contact-us") {
		displayContactUs();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#find-us" || window.location.href == "https://barrieradiator.github.io/#find-us" || window.location.href == "domain.com#find-us") {
		displayFindUs();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#services" || window.location.href == "https://barrieradiator.github.io/#services" || window.location.href == "domain.com#services") {
		displayServices();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#current-sales" || window.location.href == "https://barrieradiator.github.io/#current-sales" || window.location.href == "domain.com#current-sales") {
		displayCurrentSales();
	}
	else {
		displayError();
	}
}