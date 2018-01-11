var cont = 0;

function changePosition(){
	
	cont = cont + 1;

	if(cont%2 != 0){
		document.getElementById("wb").style.opacity = 1;
		document.getElementById("wb").style.visibility = "visible";
		document.getElementById("wb").style.transition = "visibility 0.3s, opacity 0.5s ease-out";
			
	}else{
		document.getElementById("wb").style.visibility = "hidden";
		document.getElementById("wb").style.opacity = 0;
	}
}
