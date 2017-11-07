var linkContainer = document.querySelector('div.linkContainer');
var header = document.querySelector('div.header');
var headerHeight = header.clientHeight;
window.addEventListener('scroll', function() {
	var scrollHeight = window.scrollY;
	if (scrollHeight > headerHeight) {
		linkContainer.style.position = 'fixed';
		linkContainer.style.top = '0';
	} else {
		linkContainer.style.position='static'
	}
})