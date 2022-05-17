const WEBSITE_NAME = "Barrie Radiator";


	
function displayIndex() {
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME;
	paragraph.innerHTML = "Default Home Page Data";
}

function displayHome() {
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + " - Home";
	paragraph.innerHTML = "Home";
}

function displayAboutUs() {
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + " - About Us";
	paragraph.innerHTML = "Gerry is one of 2 licensed mechanics! and other text data goes here. Images can go here also.";
}

function displayContactUs() {
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + " - Contact Us";
	paragraph.innerHTML = "Contact Us: <br>Email:<a href='mailto:mail@mail.com'>mail@mail.com</a> <br>Phone: <a href='phone:9051234567'>(905)123-4567</a>";
}

function displayFindUs() {
	var title = document.getElementById("header");
	var paragraph = document.getElementById("main-body-paragraph");
	
	title.innerHTML = WEBSITE_NAME + " - Find Us";
	paragraph.innerHTML = "You can find us at 123 main street";
	
}