'use strict';

function choose() {
	/*Chooses base on the inptu what div would show up */

	if(document.getElementById('1').checked) {
		if(document.getElementById('div2').style.display = 'block') document.getElementById('div2').style.display = 'none';
		if(document.getElementById('div3').style.display = 'block') document.getElementById('div3').style.display = 'none';
		if(document.getElementById('div4').style.display = 'block') document.getElementById('div4').style.display = 'none';

		document.getElementById('div1').style.display = 'block';
	}

	else if(document.getElementById('2').checked) {
		if(document.getElementById('div1').style.display = 'block') document.getElementById('div1').style.display = 'none';
		if(document.getElementById('div3').style.display = 'block') document.getElementById('div3').style.display = 'none';
		if(document.getElementById('div4').style.display = 'block') document.getElementById('div4').style.display = 'none';

		document.getElementById('div2').style.display = 'block';
	}

	else if(document.getElementById('3').checked) {
		if(document.getElementById('div1').style.display = 'block') document.getElementById('div1').style.display = 'none';
		if(document.getElementById('div2').style.display = 'block') document.getElementById('div2').style.display = 'none';
		if(document.getElementById('div4').style.display = 'block') document.getElementById('div4').style.display = 'none';

		document.getElementById('div3').style.display = 'block';
	}

	else if(document.getElementById('4').checked){
		if(document.getElementById('div1').style.display = 'block') document.getElementById('div1').style.display = 'none';
		if(document.getElementById('div2').style.display = 'block') document.getElementById('div2').style.display = 'none';
		if(document.getElementById('div3').style.display = 'block') document.getElementById('div3').style.display = 'none';

		document.getElementById('div4').style.display = 'block';
	}
}

function toNum(word) {
	switch(word) {
		case "one"		: 	return 1;	break;
		case "two"		: 	return 2;	break;
		case "three"	: 	return 3;	break;
		case "four"		: 	return 4;	break;
		case "five"		: 	return 5;	break;
		case "six"		: 	return 6;	break;
		case "seven"	: 	return 7;	break;
		case "eight"	: 	return 8;	break;
		case "nine"		: 	return 9;	break;
		case "ten"		: 	return 10;	break;
		case "eleven"	: 	return 11;	break;    
		case "twelve"	: 	return 12;	break;
		case "thirteen"	: 	return 13;	break;
		case "fourteen"	: 	return 14;	break;
		case "fifteen"	: 	return 15;	break;
		case "sixteen"	: 	return 16;	break;
		case "seventeen": 	return 17;	break;
		case "eighteen"	: 	return 18;	break;
		case "nineteen"	: 	return 19;	break;
		case "twenty"	: 	return 20;	break;
		case "thirty"	: 	return 30;	break;
		case "forty"	: 	return 40;	break;
		case "fifty"	: 	return 50;	break;
		case "sixty"	: 	return 60;	break;
		case "seventy"	: 	return 70;	break;
		case "eighty"	: 	return 80;	break;
		case "ninety"	: 	return 90;	break;
	}
}

function toWord(num, flag, special) {	
	
}

function divider(number) {	//determines digits place
	var ans, special, string = "";	

	ans = parseInt(number / 100);
	special = number % 100;

	if(ans != 0){
		string += toWord(ans, 0, special) + "hundred ";	//the second parameter 0 means that the current number is the ones/hundreds digit
	}

	ans = parseInt(special / 10);
	special = number % 10;

	if(ans != 0){
		string += toWord(ans, 1, special);	
	}
	//checks if the tens digit is one (special case)
	if(ans == 1) return string;	
	
	else{
		if(special != 0) string += toWord(special, 0, 0);
		return string;
	}
}

function numToWords() {
	
}

function wordsToNum(enter, out) {
	var input = document.getElementById(enter).value.split(" ");
	var output = document.getElementById(out);
	var number = 0, store = 0, flag = 0, flag2 = 0, store2 = 0;

	for(var i = 0; i < input.length; i++) {
		if(input[i] == "million") {	
			store *= 1000000;
			number += store;
			store = 0;
		}
		
		else if(input[i] == "thousand") {	//if encountered a string "thousand", 1000*stored num
			store *= 1000;
			number += store;
			store = 0;

			if(flag != 1) {	
				flag2 = 1;	
			}
		}

		else if(input[i] == "hundred"){
			if(flag2 == 1) {
				store *= 100;
				number += store;
				store = 0;
			}

			else{
				store *= 100;
				flag = 1;
			}
		}

		else{
			store += toNum(input[i]);
		}
	}

	output.value = number+store;
	return output.value = number+store;
}

function wordsToCurr(enter, out) {
	var number = wordsToNum(enter, out);
	var output = document.getElementById(out);
	var currency = document.getElementById('varIn4').value;

	output.value = currency + number;
}

function numDelimited() {
	var number = document.getElementById('varIn5').value;
	var delimiter = document.getElementById('varIn6').value;
	var jumps = parseInt(document.getElementById('varIn7').value);
	var output = document.getElementById('varOut4');
	var array = [];

	if(parseInt(number) > 1000000) {
		output.value = "Input greater than 1000000";
		return;
	}

	for(var i = 0; i < number.length; i++){
		if(i == number.length - jumps) {
			array.push(delimiter);	
		}

		array.push(number[i]);
	}

	output.value = array.join("");
}
