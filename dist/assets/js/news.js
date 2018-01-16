var updates;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		updates = JSON.parse(this.responseText);
		switch (page) {
			case 0:
				updates = updates.news;
				break;
			case 1:
				updates = updates.achievements;
				break;
			case 2:
				updates = updates.sports;
				break;
		}
		insertItems();
	}
};
xmlhttp.open("GET", "/assets/js/updates.json", true);
xmlhttp.send();

var months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function insertItems() {

	var body = document.querySelector("section.main div.container div.text div.container");
	var itemArr = updates.items;
	var itemDate = itemArr[0].date;
	var currY = itemDate.substring(itemDate.length - 2, itemDate.length);

	var h2 = document.createElement('h2');
	var year = document.createTextNode('20' + currY);
	h2.appendChild(year);
	console.log(h2);
	body.appendChild(h2);

	var i = 0;

	function whileCheck() {

		while (itemArr[i].date.substring(itemArr[i].date.length - 2, itemArr[i].date.length) === currY && i != itemArr.length) {

			var li = document.createElement('li');
			var message = itemArr[i].message;
			li.setAttribute('class', 'updates-item');

			var dateEl = document.createElement('span');
			var date = document.createTextNode(itemArr[i].date + ":" + "\xa0\xa0\xa0");
			dateEl.appendChild(date);
			li.appendChild(dateEl);

			//Important Messages
			if (itemArr[i].important === 'yes') {
				li.classList.add('important');
			}

			//Link or Text messages
			if (itemArr[i].type === 'text') {
				li.innerHTML += message;
			} else {
				li.innerHTML += "<a href='" + itemArr[i].href + "'>" + message + "</a>";
			}

			body.appendChild(li);

			i++;
		}

		if (i != itemArr.length) {

			currY = (Number(currY) - 1).toString();

			var h2 = document.createElement('h2');
			var year = document.createTextNode('20' + currY);
			h2.appendChild(year);

			body.appendChild(h2);

			whileCheck();
		}
	}

	whileCheck();
}