"use strict";function fillNav(){var e=document.querySelector("section.navigation > div.links"),t=document.querySelector("div.links div.level1");for(var n in linkList){var l;if(linkList.hasOwnProperty(n))if(l=document.createElement("div"),l.className+="link flex","object"===_typeof(linkList[n])){var i=n.replace(/\s+/g,"-").toLowerCase();l.className+=" "+i;var o=document.createElement("a"),s=document.createTextNode(n+" ▾");o.className="flex",o.appendChild(s),l.appendChild(o);var a=document.createElement("div");a.className+=i+" container nodisplay level2";for(var r=0;r<linkList[n].length;r++){var c=document.createElement("div");c.className+="link flex";var o=document.createElement("a"),s=document.createTextNode(linkList[n][r].name);o.className="flex",o.appendChild(s),o.href=linkList[n][r].href,c.appendChild(o),a.appendChild(c)}e.appendChild(a)}else{var o=document.createElement("a"),s=document.createTextNode(n);o.className="flex",o.appendChild(s),o.href=linkList[n],l.appendChild(o)}t.appendChild(l)}startScripts()}function startScripts(){function e(e,t){c=!0,r?(n.style.height="165px",l.style.height="55px",i.style.height="110px"):(n.style.height="20%",l.style.height="37.5%",i.style.height="12.5vh"),t.style.background="#000029",e.classList.add("flex"),e.classList.remove("nodisplay")}function t(e,t){c=!1,n.style.height=r?"110px":"15%",l.style.height="50%",i.style.height=r?"55px":"7.5vh",t.style.background="inherit",e.classList.add("nodisplay"),e.classList.remove("flex")}var n=document.querySelector("section.navigation"),l=document.querySelector("div.header"),i=document.querySelector("div.links"),o=[document.querySelector("div.link.about-us"),document.querySelector("div.link.curriculum"),document.querySelector("div.link.admissions"),document.querySelector("div.link.infrastructure")],s=[document.querySelector("div.level2.about-us"),document.querySelector("div.level2.curriculum"),document.querySelector("div.level2.admissions"),document.querySelector("div.level2.infrastructure"),document.querySelector("div.level1")],a=l.clientHeight,r=55===a,c=!1,d=!1;window.addEventListener("scroll",function(){window.scrollY>=a?(d=!0,i.style.top="0",i.style.height=c?r?"110px":"12.5vh":r?"55px":"7.5vh",i.style.position="fixed"):d&&(i.style.position="static",i.style.height=c?r?"110px":"12.5vh":r?"55px":"7.5vh",l.style.height=r?"55px":"50%")});for(var u=0;u<o.length;u++)!function(n){o[n].addEventListener("click",function(){for(var l=0;l<o.length;l++)l!==n&&t(s[l],o[l]);s[n].classList.contains("nodisplay")?e(s[n],o[n]):t(s[n],o[n])})}(u);for(var h=0;h<s.length;h++)!function(e){function t(t){t=window.event||t;var n=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));s[e].scrollLeft-=40*n,t.preventDefault()}s[e].addEventListener?(s[e].addEventListener("mousewheel",t,!1),s[e].addEventListener("DOMMouseScroll",t,!1)):s[e].attachEvent("onmousewheel",t)}(h)}var linkList,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&(linkList=JSON.parse(this.responseText),fillNav())},xmlhttp.open("GET","/assets/json/navigation.json",!0),xmlhttp.send(),console.log("Lol, what are you doing 'inspecting the element'? GG have fun."),console.log("- ProjectBeta, Change the Status Quo");