// JavaScript Document

var form = document.querySelector("#theForm");

var a = form.querySelector("a");
var p = form.querySelector("p");
var input = form.querySelector("input");
var euro = 9.49;
var dollar = 6.91;
var eurodec = 0;
var dollardec = 0;
var sek = input.value;
var notext = ", ";

a.onclick = function () { 
	if (isNaN(input.value) === true) {
		p.innerHTML = "Var god ange en siffra" + "<br/>" + p.innerHTML;	
	}
	
	else if (input.value <= 0) {
		p.innerHTML = "Ange en siffra som är högre än noll" + "<br/>" + p.innerHTML;	
	}
	
	else {
	var eurodec = Math.round((input.value/euro)*100)/100;
	var dollardec = Math.round((input.value/dollar)*100)/100;
	
		p.innerHTML = " "+input.value+" SEK blir "+eurodec+" Euro och "+dollardec+" Dollar. " + "<br/>" + p.innerHTML;
	}
};


	

