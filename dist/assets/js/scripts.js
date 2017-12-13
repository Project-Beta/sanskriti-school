!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Siema", [], t) : "object" == typeof exports ? exports.Siema = t() : e.Siema = t();
}(this, function () {
	return function (e) {
		function t(s) {
			if (i[s]) return i[s].exports;var n = i[s] = { i: s, l: !1, exports: {} };return e[s].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
		}var i = {};return t.m = e, t.c = i, t.d = function (e, i, s) {
			t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: s });
		}, t.n = function (e) {
			var i = e && e.__esModule ? function () {
				return e.default;
			} : function () {
				return e;
			};return t.d(i, "a", i), i;
		}, t.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}, t.p = "", t(t.s = 0);
	}([function (e, t, i) {
		"use strict";
		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}Object.defineProperty(t, "__esModule", { value: !0 });var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e;
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
		},
		    r = function () {
			function e(e, t) {
				for (var i = 0; i < t.length; i++) {
					var s = t[i];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
				}
			}return function (t, i, s) {
				return i && e(t.prototype, i), s && e(t, s), t;
			};
		}(),
		    o = function () {
			function e(t) {
				var i = this;if (s(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.startIndex, this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler"].forEach(function (e) {
					i[e] = i[e].bind(i);
				}), this.init();
			}return r(e, [{ key: "attachEvents", value: function () {
					window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null }, this.selector.addEventListener("touchstart", this.touchstartHandler, { passive: !0 }), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler, { passive: !0 }), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler));
				} }, { key: "detachEvents", value: function () {
					window.removeEventListener("resize", this.resizeHandler), this.selector.style.cursor = "auto", this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler);
				} }, { key: "init", value: function () {
					this.attachEvents(), this.resolveSlidesNumber(), this.selector.style.overflow = "hidden", this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
						var i = document.createElement("div");i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i);
					}this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent(), this.config.onInit.call(this);
				} }, { key: "resolveSlidesNumber", value: function () {
					if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
						this.perPage = 1;for (var e in this.config.perPage) window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
					}
				} }, { key: "prev", value: function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					    t = arguments[1];if (!(this.innerElements.length <= this.perPage)) {
						var i = this.currentSlide;0 === this.currentSlide && this.config.loop ? this.currentSlide = this.innerElements.length - this.perPage : this.currentSlide = Math.max(this.currentSlide - e, 0), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
					}
				} }, { key: "next", value: function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					    t = arguments[1];if (!(this.innerElements.length <= this.perPage)) {
						var i = this.currentSlide;this.currentSlide === this.innerElements.length - this.perPage && this.config.loop ? this.currentSlide = 0 : this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
					}
				} }, { key: "goTo", value: function (e, t) {
					if (!(this.innerElements.length <= this.perPage)) {
						var i = this.currentSlide;this.currentSlide = Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
					}
				} }, { key: "slideToCurrent", value: function () {
					this.sliderFrame.style[this.transformProperty] = "translate3d(-" + this.currentSlide * (this.selectorWidth / this.perPage) + "px, 0, 0)";
				} }, { key: "updateAfterDrag", value: function () {
					var e = this.drag.endX - this.drag.startX,
					    t = Math.abs(e),
					    i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1;e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent();
				} }, { key: "resizeHandler", value: function () {
					this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length - this.perPage), this.slideToCurrent();
				} }, { key: "clearDrag", value: function () {
					this.drag = { startX: 0, endX: 0, startY: 0, letItGo: null };
				} }, { key: "touchstartHandler", value: function (e) {
					e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY;
				} }, { key: "touchendHandler", value: function (e) {
					e.stopPropagation(), this.pointerDown = !1, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag();
				} }, { key: "touchmoveHandler", value: function (e) {
					e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo && (e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + -1 * (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) + "px, 0, 0)");
				} }, { key: "mousedownHandler", value: function (e) {
					e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX;
				} }, { key: "mouseupHandler", value: function (e) {
					e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag();
				} }, { key: "mousemoveHandler", value: function (e) {
					e.preventDefault(), this.pointerDown && (this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + -1 * (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) + "px, 0, 0)");
				} }, { key: "mouseleaveHandler", value: function (e) {
					this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.updateAfterDrag(), this.clearDrag());
				} }, { key: "updateFrame", value: function () {
					this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
						var i = document.createElement("div");i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i);
					}this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
				} }, { key: "remove", value: function (e, t) {
					if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");this.innerElements.splice(e, 1), this.updateFrame(), t && t.call(this);
				} }, { key: "insert", value: function (e, t, i) {
					if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");this.innerElements.splice(t, 0, e), this.currentSlide = t <= this.currentSlide ? this.currentSlide + 1 : this.currentSlide, this.updateFrame(), i && i.call(this);
				} }, { key: "prepend", value: function (e, t) {
					this.insert(e, 0), t && t.call(this);
				} }, { key: "append", value: function (e, t) {
					this.insert(e, this.innerElements.length + 1), t && t.call(this);
				} }, { key: "destroy", value: function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					    t = arguments[1];if (this.detachEvents(), e) {
						for (var i = document.createDocumentFragment(), s = 0; s < this.innerElements.length; s++) i.appendChild(this.innerElements[s]);this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
					}t && t.call(this);
				} }], [{ key: "mergeSettings", value: function (e) {
					var t = { selector: ".siema", duration: 200, easing: "ease-out", perPage: 1, startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, onInit: function () {}, onChange: function () {} },
					    i = e;for (var s in i) t[s] = i[s];return t;
				} }, { key: "webkitOrNot", value: function () {
					return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
				} }]), e;
		}();t.default = o, e.exports = t.default;
	}]);
});

var siema = new Siema({
	selector: '.carousel-box',
	loop: true
});

setInterval(function () {
	siema.currentSlide === 4 ? siema.goTo(0) : siema.goTo(siema.currentSlide + 1);
}, 4000);
//Google Maps API
function init_map() {
	var myOptions = {
		zoom: 17,
		center: new google.maps.LatLng(28.5888, 77.17655749999994),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(28.5888, 77.17655749999994)
	});
	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', init_map);
var navbar = document.querySelector('section.navigation');
var header = document.querySelector('div.header');
var links = document.querySelector('div.links');

var linkList = [document.querySelector('div.link.about-us'), document.querySelector('div.link.curriculum'), document.querySelector('div.link.admissions'), document.querySelector('div.link.infrastructure')];
var barList = [document.querySelector('div.level2.about-us'), document.querySelector('div.level2.curriculum'), document.querySelector('div.level2.admissions'), document.querySelector('div.level2.infrastructure'), document.querySelector('div.level1')];

var headerHeight = header.clientHeight;
var minHeightTrue = headerHeight === 55 ? true : false;

var dropped = false;
var scrolled = false;

window.addEventListener('scroll', function () {
	var scrollHeight = window.scrollY;
	if (scrollHeight >= headerHeight) {
		scrolled = true;
		links.style.top = '0';
		links.style.height = dropped ? minHeightTrue ? '110px' : '12.5vh' : minHeightTrue ? '55px' : '7.5vh';
		links.style.position = 'fixed';
	} else if (scrolled) {
		links.style.position = 'static';
		links.style.height = dropped ? minHeightTrue ? '110px' : '12.5vh' : minHeightTrue ? '55px' : '7.5vh';
		header.style.height = minHeightTrue ? '55px' : '50%';
	}
});

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
	(function (i) {
		linkList[i].addEventListener('click', function () {
			for (let j = 0; j < linkList.length; j++) {
				if (j === i) continue;
				hide(barList[j], linkList[j]);
			}
			if (barList[i].classList.contains('nodisplay')) {
				show(barList[i], linkList[i]);
			} else {
				hide(barList[i], linkList[i]);
			}
		});
	})(i);
}

for (let i = 0; i < barList.length; i++) {
	(function (i) {
		function scrollHorizontally(e) {
			e = window.event || e;
			var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
			barList[i].scrollLeft -= delta * 40;
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
//Updates list AJAX
var updates;
var JSONupdates;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		updates = JSON.parse(this.responseText);
		JSONupdates = [updates.news, updates.achievements, updates.sports];
		insertItems();
	}
};
xmlhttp.open("GET", "/assets/js/updates.json", true);
xmlhttp.send();

var updateBox = [document.querySelector('div.news .updates-list'), document.querySelector('div.achievements .updates-list'), document.querySelector('div.sports .updates-list')];

function insertItems() {

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