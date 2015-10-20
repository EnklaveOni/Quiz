//Globalni promenne
var qNumber = 0,
	headline = qNumber + 1;
	headerEl = document.getElementById('headr'),
	questionsEl = document.getElementById('questions'),
	jmeno = "",
	prijmeni = "";


//Startovaci obrazovka
var start = function(){
	//jmeno = prompt("Napis sve jmeno", ""),
	player = new Player(jmeno);
	addQuestions();

}

// Pridani otazky na stranku
var addQuestions = function(){
	headerEl.innerHTML = "Question " + (headline + qNumber) + ": <br />" +  allQuestions[qNumber].question;
	questions.innerHTML = "";
	for (var i = 0; i < (allQuestions.length) + 1; i++) {
		questions.innerHTML += "<input type='radio' name='question' id='r" + i +
		"' value='" + allQuestions[qNumber].choice[i] + "'>" +
			allQuestions[qNumber].choice[i] + "</input><br />";
	};

	nextSecond();
};


//Event kliknuti id="nextButton" - kontrola zvolene otazky, pricteni bodu popr. ukonceni quizu
var next = function(){
	var form = document.getElementById("questions"),
		formIntput = form.getElementsByTagName("input"),
		isChecked
	for(var i = 0; i < formIntput.length; i++){
		if(formIntput[i].checked === true){
			isChecked = true;
			break;
		}else{
			isChecked = false;
		}

	}

	if( isChecked ){
		var check = document.querySelector("input[name='question']:checked").value;
		allQuestions[qNumber].check = check;
		allQuestions[qNumber].answered = true;	

		if (check === allQuestions[qNumber].correct) {
			player.score += 1;
			allQuestions[qNumber].correctAnswer = true;
		};

		qNumber++;			
	}else{
		alert("Musis zvolit jednu z mosnosti!")
	}



	if ( qNumber < allQuestions.length){
		addQuestions();
	} else {
		ende();
		var form = document.getElementById("nextForm"),
			removeForm = document.body.removeChild(form);
	}
};

//Event na tlacitku id="prevButton"
var previous = function(){
	qNumber--
	addQuestions();

	if ( allQuestions[qNumber].correctAnswer === true ){
		player.score -= 1;
	}
}

//Kliknuti na id="nextButton" podruhe (predtim stsknuto previous)
var nextSecond = function(){
	if ( allQuestions[qNumber].answered === true){
		var form = document.getElementById("questions"),
			inputForm = form.getElementsByTagName("input");
		for (var i = 0; i < inputForm.length; i++){
			if ( inputForm[i].value === allQuestions[qNumber].check ){
				inputForm[i].checked = true;
			}
		}
	}
}

//Zobrazeni score
var ende = function(){
	if(player.score === 0){
		headerEl.innerHTML = "Je to s tebou spatne " + player.firstName;
		questions.innerHTML = "Mas " + player.score + " bodu.<br /> Nic jsi nevedel!";
	}else if(player.score <= 2){
		headerEl.innerHTML = "Nic moc, chce to vic studovat " + player.firstName;
		questions.innerHTML = "Tvoje score je: " + player.score + "<br />Vrat se az budes chytrejsi";		
	}else{
		headerEl.innerHTML = "Vis uplne vsechno!" + player.firstName + "!!!";
		questions.innerHTML = "Mas " + player.score + " body!!!.<br /> Jsi nejchytrejsi na svete";		
	}
}

/*
1. Uvodni obrazovka nabizi dve moznosti:
	a. zvolit noveho hrace (text box a tlacitko start)
	b. prihlasit se s existujicim hracem (ulozen v local storage)
		- pres cookies udelat "Welcome 'user'" 
2. Pri zvoleni jmena/hrace udelat fadeout/in na prvni otazku
3. Kliknutim na previous/next udelat fadeout/in efekt
4. Ukladat otazky v externim JSON souboru

*/