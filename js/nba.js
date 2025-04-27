
function changeTab(e) {
	var i, tabs;
	tabs = document.getElementsByClassName("season-tab");
	for (i = 0; i < tabs.length; i++) {
		tabs[i].className = tabs[i].className.replace(" active", "");
	}
	event.target.className += " active";
}

function onPlayerHover(elementId) {
	document.getElementById(elementId).querySelector(".fa-user").classList.add("fa-beat-fade");
	document.getElementById(elementId).querySelector("ul").classList.add("showlist");
}

function onPlayerOut(elementId) {
	document.getElementById(elementId).querySelector(".fa-user").classList.remove( "fa-beat-fade");
	document.getElementById(elementId).querySelector("ul").classList.remove("showlist");
}

function onPlayerClick(elementId) {
	players = document.getElementById(elementId).parentNode.querySelectorAll("li");
	for (i = 0; i < players.length; i++){
		players[i].style.display = "none";
	}
	document.getElementById(elementId).style.display = "block";
	document.getElementById(elementId).parentNode.parentNode.querySelector(".fa-user").classList.remove( "fa-beat-fade");
	document.getElementById(elementId).parentNode.classList.remove("showlist");
}

function allowDrop(ev) {
    ev.preventDefault();
  }

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var object = document.getElementById(ev.dataTransfer.getData("Text"));
	var x = ev.layerX - Math.trunc(object.offsetWidth / 2);
	var y = ev.layerY;
	console.log(x);
	object.style.top = y + "px";
	object.style.left = x + "px";
}

function imgError(img){
	img.src = "img/fallback.png";
}