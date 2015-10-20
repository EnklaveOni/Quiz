//Otazky a odpovedi
var	allQuestions = [
	{
		question: "Za kolik dni se v lidskem tele obmeni veskera voda?",
		choice: ["12 dni", "14 dni", "16 dni", "24 dni"],
		correct: "16 dni",
		correctAnswer: false,
		answered: false,
		check: ""
	},
	{
		question: "Stari naseho vesmiru je",
		choice: ["7 Miliard let", "9 Miliard", "14 Miliard", "17 Miliard"],
		correct: "14 Miliard",
		correctAnswer: false,
		answered: false,
		check: ""
	},
	{
		question: "Jak dlouho trva slunecnimu paprsku urazit trasu ze Slunce na Zemi?",
		choice: ["8 Sekund", "56 Sekund", "8 Minut", "19 Minut"],
		correct: "8 Minut",
		correctAnswer: false,
		answered: false,
		check: ""
	}
];


//Hrac
function Player(firstName, score){
	this.firstName = firstName,
	this.score = 0
}

