function loadSelectors(){
	const select1 = document.getElementById("selector-team");
	const select2 = document.getElementById("selector-player");
	for (i = 0; i < select1.childNodes.length; i++){
		select1.childNodes[i].selected = false;
	}
	select1.childNodes[0].selected = true;
	for (i = 1; i < select2.childNodes.length; i++){
		select2.childNodes[i].remove();
	}
}

function crearNodo(tag,atributos){
	nodo = document.createElement(tag);
	for (key in atributos){
		attr = document.createAttribute(key);
		attr.value = atributos[key];
		nodo.setAttributeNode(attr);
	}
	return nodo;
}

function imgError(img){
	img.src = "img/fallback.png";
}

function editarCelda(celda){
	var dialog = document.getElementById('edit-dialog');
	var input = document.getElementById('update-data-input');
	input.value = "";
	dialog.showModal();
	dialog.addEventListener('close',() => dialogHandler(dialog,celda));
}
