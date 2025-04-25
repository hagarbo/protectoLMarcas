

window.onload = function() {
	let seasons = document.getElementById("seasons");
	seasons.addEventListener("click", (event,seasons) => {
		seasons.childNodes.forEach(child => {
			child.classList.remove("active");
		});
		event.target.classList.add("active");
	}	);

}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	debugger;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}


function onPlayerHover(elementId) {
	document.getElementById(elementId).firstChild.firstChild.classList.add("fa-beat-fade");
	document.getElementById(elementId).childNodes[1].classList.add("showlist");
}

function onPlayerOut(elementId) {
	document.getElementById(elementId).firstChild.firstChild.classList.remove( "fa-beat-fade");
	document.getElementById(elementId).childNodes[1].classList.remove("showlist");
}

function onPlayerClick(elementId) {
	for (i = 0; i < document.getElementById(elementId).parentNode.childElementCount; i++){
		document.getElementById(elementId).parentNode.childNodes[i].style.display = "none";
	}
	document.getElementById(elementId).style.display = "block";
	document.getElementById(elementId).parentNode.parentNode.firstChild.firstChild.classList.remove("fa-beat-fade");
	document.getElementById(elementId).parentNode.classList.remove( "showlist");
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