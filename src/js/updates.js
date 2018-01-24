//Updates list AJAX
var updates;
var JSONupdates;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		updates = JSON.parse(this.responseText);
		JSONupdates = [
			updates.news,
			updates.achievements,
			updates.sports
		];
		insertItems();
	}
};
xmlhttp.open("GET", "/assets/json/updates.json", true);
xmlhttp.send();


var updateBox = [
	document.querySelector('div.news .updates-list'),
	document.querySelector('div.achievements .updates-list'),
	document.querySelector('div.sports .updates-list')
]

function insertItems () {

	for (var i = 0; i < 3; i++) {

		for (var j = 0; j < 3; j++) {

			var li = document.createElement('li');
			var message = JSONupdates[i].items[j].message;
			li.setAttribute('class', 'updates-item');

			var dateEl = document.createElement('span');
			var date = document.createTextNode(JSONupdates[i].items[j].date + ":" + "\xa0\xa0\xa0");
			dateEl.appendChild(date);
			li.appendChild(dateEl);

			//Important Messages
			if (JSONupdates[i].items[j].important === 'yes') {
				li.classList.add('important');
			}

			//Link or Text messages
			if (JSONupdates[i].items[j].type === 'text') {
				li.innerHTML += message;
			} else {
				li.innerHTML += "<a href='" + JSONupdates[i].items[j].href + "'>" + message + "</a>";
			}

			updateBox[i].appendChild(li);

		}

	}

}