"use strict";function init_map(){var e={zoom:17,center:new google.maps.LatLng(28.5888,77.17655749999994),mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("gmap_canvas"),e),marker=new google.maps.Marker({map:map,position:new google.maps.LatLng(28.5888,77.17655749999994)}),google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)}),infowindow.open(map,marker)}function show(e,t){dropped=!0,minHeightTrue?(navbar.style.height="165px",header.style.height="55px",links.style.height="110px"):(navbar.style.height="20%",header.style.height="37.5%",links.style.height="12.5vh"),t.style.background="#000029",e.classList.add("flex"),e.classList.remove("nodisplay")}function hide(e,t){dropped=!1,navbar.style.height=minHeightTrue?"110px":"15%",header.style.height="50%",links.style.height=minHeightTrue?"55px":"7.5vh",t.style.background="inherit",e.classList.add("nodisplay"),e.classList.remove("flex")}function insertItems(){for(var e=0;e<3;e++)for(var t=0;t<3;t++){var i=document.createElement("li"),s=JSONupdates[e].items[t].message;i.setAttribute("class","updates-item");var n=document.createElement("span"),a=document.createTextNode(JSONupdates[e].items[t].date+":   ");n.appendChild(a),i.appendChild(n),"yes"===JSONupdates[e].items[t].important&&i.classList.add("important"),"text"===JSONupdates[e].items[t].type?i.innerHTML+=s:i.innerHTML+="<a href='"+JSONupdates[e].items[t].href+"'>"+s+"</a>",updateBox[e].appendChild(i)}}google.maps.event.addDomListener(window,"load",init_map);var navbar=document.querySelector("section.navigation"),header=document.querySelector("div.header"),links=document.querySelector("div.links"),linkList=[document.querySelector("div.link.about-us"),document.querySelector("div.link.curriculum"),document.querySelector("div.link.admissions"),document.querySelector("div.link.infrastructure")],barList=[document.querySelector("div.level2.about-us"),document.querySelector("div.level2.curriculum"),document.querySelector("div.level2.admissions"),document.querySelector("div.level2.infrastructure"),document.querySelector("div.level1")],headerHeight=header.clientHeight,minHeightTrue=55===headerHeight,dropped=!1,scrolled=!1;window.addEventListener("scroll",function(){window.scrollY>=headerHeight?(scrolled=!0,links.style.top="0",links.style.height=dropped?minHeightTrue?"110px":"12.5vh":minHeightTrue?"55px":"7.5vh",links.style.position="fixed"):scrolled&&(links.style.position="static",links.style.height=dropped?minHeightTrue?"110px":"12.5vh":minHeightTrue?"55px":"7.5vh",header.style.height=minHeightTrue?"55px":"50%")});for(var i=0;i<linkList.length;i++)!function(e){linkList[e].addEventListener("click",function(){for(var t=0;t<linkList.length;t++)t!==e&&hide(barList[t],linkList[t]);barList[e].classList.contains("nodisplay")?show(barList[e],linkList[e]):hide(barList[e],linkList[e])})}(i);for(var _i=0;_i<barList.length;_i++)!function(e){function t(t){t=window.event||t;var i=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));barList[e].scrollLeft-=40*i,t.preventDefault()}barList[e].addEventListener?(barList[e].addEventListener("mousewheel",t,!1),barList[e].addEventListener("DOMMouseScroll",t,!1)):barList[e].attachEvent("onmousewheel",t)}(_i);var updates,JSONupdates,xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&(updates=JSON.parse(this.responseText),JSONupdates=[updates.news,updates.achievements,updates.sports],insertItems())},xmlhttp.open("GET","/assets/js/updates.json",!0),xmlhttp.send();var updateBox=[document.querySelector("div.news .updates-list"),document.querySelector("div.achievements .updates-list"),document.querySelector("div.sports .updates-list")];