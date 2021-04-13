function init(){
	var warning = document.getElementById('entrybutton');
	
	function myEventFunction() {
		var entry =document.getElementById('entryinput');
		var output =document.getElementById('textoutput');
		alert("Pedro says: " + entry.value);
		output.innerHTML = entry.value;
	}
	warning.addEventListener('click',myEventFunction);
	}
window.addEventListener('load',init);