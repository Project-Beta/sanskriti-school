(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== 'undefined') {
		factory(exports);
	} else {
		factory((root.level2 = {}));
	}
}(this, function (exports) {
	var _window = window;
	var _document = document;
	var mousemove = 'mousemove';
	var mouseup = 'mouseup';
	var mousedown = 'mousedown';
	var EventListener = 'EventListener';
	var addEventListener = 'add'+EventListener;
	var removeEventListener = 'remove'+EventListener;
	var newScrollX;

	var dragged = [];
	var reset = function(i, el) {
		for (i = 0; i < dragged.length;) {
			el = dragged[i++];
			el = el.container || el;
			el[removeEventListener](mousedown, el.md, 0);
			_window[removeEventListener](mouseup, el.mu, 0);
			_window[removeEventListener](mousemove, el.mm, 0);
		}

		// cloning into array since HTMLCollection is updated dynamically
		dragged = [].slice.call(_document.getElementsByClassName('level2'));
		for (i = 0; i < dragged.length;) {
			(function(el, lastClientX, pushed, scroller, cont){
				(cont = el.container || el)[addEventListener](
					mousedown,
					cont.md = function(e) {
						if (!el.hasAttribute('nochilddrag') ||
							_document.elementFromPoint(
								e.pageX
							) == cont
						) {
							pushed = 1;
							lastClientX = e.clientX;

							e.preventDefault();
						}
					}, 0
				);

				_window[addEventListener](
					mouseup, cont.mu = function() {pushed = 0;}, 0
				);

				_window[addEventListener](
					mousemove,
					cont.mm = function(e) {
						if (pushed) {
							(scroller = el.scroller||el).scrollLeft -=
								newScrollX = (- lastClientX + (lastClientX=e.clientX));
							if (el == _document.body) {
								(scroller = _document.documentElement).scrollLeft -= newScrollX;
							}
						}
					}, 0
				);
			 })(dragged[i++]);
		}
	}

	  
	if (_document.readyState == 'complete') {
		reset();
	} else {
		_window[addEventListener]('load', reset, 0);
	}

	exports.reset = reset;
}));
