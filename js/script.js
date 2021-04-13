function init(){
	var warning = document.getElementById('entrybutton');
	
	function myEventFunction() {
		var entry =document.getElementById('entryinput');
		var output =document.getElementById('textout');
		alert("Pedro: " + entry.value);
		output.innerHTML = entry.value;









	}
	warning.addEventListener('click'
	}
window.addEventListener('load',init);