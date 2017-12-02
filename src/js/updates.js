//Updates list AJAX
var updates;
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		updates = JSON.parse(this.responseText);
		console.log(updates)
	}
};
xmlhttp.open("GET", "/assets/js/updates.json", true);
xmlhttp.send();