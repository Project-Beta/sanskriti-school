var navbar = document.querySelector('section.navigation');
var header = document.querySelector('div.header');
var links = document.querySelector('div.links');

var linkList = [document.querySelector('div.link.about-us'),
				document.querySelector('div.link.curriculum'),
				document.querySelector('div.link.admissions'),
				document.querySelector('div.link.infrastructure')];
var barList = [document.querySelector('div.level2.about-us'),
				document.querySelector('div.level2.curriculum'),
				document.querySelector('div.level2.admissions'),
				document.querySelector('div.level2.infrastructure'),
				document.querySelector('div.level1')];

var headerHeight = header.clientHeight;
var minHeightTrue = (headerHeight === 55 ? true : false);

var dropped = false;
var scrolled = false;

window.addEventListener('scroll', function() {
	var scrollHeight = window.scrollY;
	if (scrollHeight >= headerHeight) {
		scrolled = true;
		links.style.top = '0';
		links.style.height = dropped ? (minHeightTrue ? '110px' : '12.5vh') : (minHeightTrue ? '55px' : '7.5vh');
		links.style.position = 'fixed';
	} else if (scrolled) {
		links.style.position = 'static';
		links.style.height = dropped ? (minHeightTrue ? '110px' : '12.5vh') : (minHeightTrue ? '55px' : '7.5vh');
		header.style.height = minHeightTrue ? '55px' : '50%';
	}
})

function show(bar, link) {
	dropped = true;
	if (minHeightTrue) {
		navbar.style.height = '165px';
		header.style.height = '55px';
		links.style.height = '110px';
	} else {
		navbar.style.height = '20%';
		header.style.height = '37.5%';
		links.style.height = '12.5vh';
	}
	link.style.background = '#000029';
	bar.classList.add('flex');
	bar.classList.remove('nodisplay');	
}
function hide(bar, link) {
	dropped = false;
	navbar.style.height = minHeightTrue ? '110px' : '15%';
	header.style.height = '50%';
	links.style.height = minHeightTrue ? '55px' : '7.5vh';
	link.style.background = 'inherit';
	bar.classList.add('nodisplay');
	bar.classList.remove('flex');
}

for (let i = 0; i < linkList.length; i++) {
	(function(i) {
		linkList[i].addEventListener('click', function() {
			for (let j = 0; j < linkList.length; j++) {
				if (j === i) continue;
				hide(barList[j], linkList[j]);
			}
			if (barList[i].classList.contains('nodisplay')) {
				show(barList[i], linkList[i]);
			} else {
				hide(barList[i], linkList[i]);
			}
		})
	}(i))
}

for (let i = 0; i < barList.length; i++) {
	(function(i) {
		function scrollHorizontally(e) {
			e = window.event || e;
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
			barList[i].scrollLeft -= (delta*20);
			e.preventDefault();
		}
		if (barList[i].addEventListener) {
			barList[i].addEventListener("mousewheel", scrollHorizontally, false);
			barList[i].addEventListener("DOMMouseScroll", scrollHorizontally, false);
		} else {
			barList[i].attachEvent("onmousewheel", scrollHorizontally);
		}
	})(i);
}