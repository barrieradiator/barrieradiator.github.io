const WEBSITE_NAME = "Barrie Radiator";

const INDEX_HTML_PATH = "file:///D:/Dev/Paid/2022/Barrie-Radiator/barrieradiator.github.io/index.html"

function hideAllPages() {
	var page_index = document.getElementById("page-index");
	page_index.setAttribute("hidden", "hidden");
	
	var page_archive = document.getElementById("page-archive");
	page_archive.setAttribute("hidden", "hidden"); 
	
	var page_about_us = document.getElementById("page-about-us");
	page_about_us.setAttribute("hidden", "hidden"); 
	
	var page_contact_us = document.getElementById("page-contact-us");
	page_contact_us.setAttribute("hidden", "hidden"); 
	
	var page_current_sales = document.getElementById("page-current-sales");
	page_current_sales.setAttribute("hidden", "hidden"); 
	
	var page_current_prices = document.getElementById("page-current-prices");
	page_current_prices.setAttribute("hidden", "hidden"); 
	
	var page_faq = document.getElementById("page-faq");
	page_faq.setAttribute("hidden", "hidden"); 

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

function displayArchive() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Archive";
	var current_page = document.getElementById("page-archive");
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

function displayCurrentSales() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Current Sales";	
	var current_page = document.getElementById("page-current-sales");
	current_page.removeAttribute("hidden"); 

}

function displayCurrentPrices() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - Current Prices";	
	var current_page = document.getElementById("page-current-prices");
	current_page.removeAttribute("hidden"); 
	
}

function displayFAQ() {
	hideAllPages();
	document.title = WEBSITE_NAME + " - FAQ";
	var current_page = document.getElementById("page-faq");
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
	
	var urlParams = new URLSearchParams(window.location.search);
	
	var title = document.getElementById("title");
	title.innerText = WEBSITE_NAME;
	
	var title = document.getElementById("brand-title");
	title.innerText = WEBSITE_NAME;
	
	var index_title = document.getElementById("index-title");
	index_title.innerText = WEBSITE_NAME;
	
	if(urlParams.has('fbclid')) {
		window.location = "https://barrie-radiator.github.io";
	}	
	else if(window.location.href == INDEX_HTML_PATH || window.location.href == "https://barrie-radiator.github.io/") {
		displayIndex();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#archive" || window.location.href == "https://barrie-radiator.github.io/#archive") {
		displayArchive();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#about-us" || window.location.href == "https://barrie-radiator.github.io/#about-us") {
		displayAboutUs();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#contact-us" || window.location.href == "https://barrie-radiator.github.io/#contact-us") {
		displayContactUs();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#current-sales" || window.location.href == "https://barrie-radiator.github.io/#current-sales" || window.location.href == "domain.com#merchandise") {
		displayCurrentSales();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#current-prices" || window.location.href == "https://barrie-radiator.github.io/#current-prices" || window.location.href == "domain.com#sponsors") {
		displayCurrentPrices();
	}
	else if(window.location.href == INDEX_HTML_PATH + "#faq" || window.location.href == "https://barrie-radiator.github.io/#faq" || window.location.href == "domain.com#contact") {
		displayFAQ();
	}
	else {
		displayError();
	}
}