const WEBSITE_NAME = "Barrie Radiator";

function displayIndex() {
	var title = document.getElementById("header");
	title.innerHTML = WEBSITE_NAME;
}

function displayHome() {
	var title = document.getElementById("header");
	title.innerHTML = WEBSITE_NAME + " - Home";
}

function displayAboutUs() {
	var title = document.getElementById("header");
	title.innerHTML = WEBSITE_NAME + " - About Us";
}