"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {
	
	var tal = 10
	//Variblen har värdet 10
	return tal;
	//returnerar variablen
	
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {
	
	var tal1 = 2.5
	var tal2 = 8
	
	//tal1*tal2 ger resultatet
	var resultat = tal1 * tal2
	
	return resultat;

}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {
	console.log(tal1,tal2)
	
	//tal1 - tal2 ger resultatet
	var resultat = tal1 - tal2
	
	return resultat;
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {

	//variabeln får namnet avr och har värdet tal som avrundas av funktionen Math.round
	var avr = Math.round(tal)
	//returnerar variabeln avr
	return avr;
	
}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {
	
	//returnerar längden på textremsan
	return text.length
	
	
	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {
	
	//räknar ut den näst sista bokstaven i texten. 
	var text2 = text.charAt(text.length-2)

	return text2 
	
}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {
	var space = ", ";
	var fullname = surname+space+firstname;
	console.log(fullname);	
	return fullname
	
	// eller så kan man skriva return surname + ", " + firstname
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {
	
	return words.substr(words.indexOf(' ')+1);
	//skriver ut texten ifrån första mellanslaget + 1

}


/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {
	//variablen får värdet Boolean
	var myBoolean = Boolean ( false );
	
	if (number >= 100) { 
	myBoolean=true;
	}
	//om värdet är större eller lika med 100 är det sant
	
	else { 
	myBoolean=false; 
	}
	//annars är det falskt
		
	return myBoolean;
	
	
}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {
	
	//om epost är mindre än 1, ska nedan text visas
	if(epost.length<1||namn.length<1) { 
		return "Du har glömt att ange namn eller e-post";
	}
	
	//om epost innnehåller @ ska nedan text visas 	
	else if(epost.indexOf("@") >= 0) {
		return "Ditt meddelande skickas";
	}
	
	//annars ska nedan visas
	else {
		return "Ange en e-postadress";
	}

}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {
	
	var length = arr.length;
	console.log(arr);
	
	//räknar ut längden / 2
	var middle = length/2;
	//avrundar halva längden uppåt
	var middleround = Math.round(middle);
	console.log(middleround);
	//ger resultat på avrundningen - 1 (för att första värdet är noll)
	var realmiddle = middleround-1;
	console.log(arr[realmiddle]);
	//lådan (arrayen) innehåller realmiddle
	return arr[realmiddle];
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {
	
	var i = 0;
	
	var length = arr.length;
	//summan är noll, efter varje loop plussas (++) ett på summan(+1)
	var summa = 0;
	for(i;i<length;i++) {
		summa +=arr[i];
	}
	//medelvärdet är summan/längden
	var medel = summa/length;
	//returnerar medelvärdet
	return medel;
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

