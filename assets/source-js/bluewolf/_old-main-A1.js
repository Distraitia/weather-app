$(document).on("ready", function() {
	// console.log("Document is ready!");

	var q1Btn = $(".q1 .btn"),
		q2Btn = $(".q2 .btn"),
		q3Btn = $(".q3 .btn");
	var q1 = $(".q1 .answerbox p.question"),
		q2 = $(".q2 .answerbox p.question"),
		q3 = $(".q3 .answerbox p.question");
	var a1 = $(".q1 .answerbox p.answer"),
		a2 = $(".q2 .answerbox p.answer"),
		a3 = $(".q3 .answerbox p.answer");

	var a1Debug = false;

	function findDuplicate(e) {
		e.preventDefault();

		var reportRecipients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 3];
		var recipientsArray = reportRecipients.sort(); 

		// This creates a blank array 
		var reportRecipientsDuplicate = [];

		// if (a1Debug == true) {
		// 	console.log("Before for loop, reportRecipients: " + reportRecipients);
		// 	console.log("Before for loop, recipientsArray: " + recipientsArray);
		// 	console.log("Before for loop, reportRecipientsDuplicate: " + reportRecipientsDuplicate);
		// }

		for (var i = 0; i < recipientsArray.length - 1; i++) {
			// if (a1Debug == true) {
			// 	console.log("For loop round: " + i);
			// }

		    if (recipientsArray[i + 1] == recipientsArray[i]) {
		        reportRecipientsDuplicate.push(recipientsArray[i]);

		  //       if (a1Debug == true) {
			 //        console.log("Matching if statement for round " + i + "!");
			 //        console.log("Inside for loop round " + i + ", reportRecipients: " + reportRecipients);
				// 	console.log("Inside for loop round " + i + ", recipientsArray: " + recipientsArray);
				// 	console.log("Inside for loop round " + i + ", reportRecipientsDuplicate: " + reportRecipientsDuplicate);
				// }
		    }
		}

		// if (a1Debug == true) {
		// 	console.log("After for loop, reportRecipients: " + reportRecipients);
		// 	console.log("After for loop, recipientsArray: " + recipientsArray);
		// 	console.log("After for loop, reportRecipientsDuplicate: " + reportRecipientsDuplicate);
		// }
		var a1HTML = a1.html();
		var newHTML = a1HTML + "<br>Repeated number! It is: " + reportRecipientsDuplicate;
		a1.html(newHTML);
	}

	q1Btn.on("click", findDuplicate);

	



	function findFirstNonRepeatingLetter(e) {
		e.preventDefault();
		var description = "Find the first non-repeating character in a string:('DEFD' -> E )";
		var testString = 'DEFFDA';

		var stringArray = testString.split("").sort();

		var stringUnique = [];

		a2.html("String: " + testString + "<br>testString: " + stringArray);

		if (stringUnique.length < 1) {
			for (var i = 0; i < stringArray.length - 1; i++) {
				if (a1Debug == true) {
					console.log("For loop round: " + i);
				}

			    if (stringArray[i + 1] == stringArray[i]) {
			        // stringUnique.push(stringArray[i]);
			        // a2.html(stringUnique);
			    } else {
			    	stringUnique.push(stringArray[i]);
			    }
			}
			var a2HTML = a2.html();
			var newHTML = a2HTML + "<br>First non-repeating character is: " + stringUnique[0];
			a2.html(newHTML);
		}

		// var a2HTML = a2.html();
		// var newHTML = a2HTML + "<br>Repeated number! It is: " + stringUnique;
		// a2.html(newHTML);
	}
	q2Btn.on("click",findFirstNonRepeatingLetter);
	


	function shuffleCards(cardArray) {
		var description = "A standard deck of 52 cards is represented in an array. Each card is represented as an integer. Write a method to shuffle the cards.";

		var i = cardArray.length, 
			j, 
			tempi, 
			tempj;

		if ( i === 0 ) return false;

		while ( --i ) {
			j = Math.floor( Math.random() * ( i + 1 ) );
			tempi = cardArray[i];
			tempj = cardArray[j];
			cardArray[i] = tempj;
			cardArray[j] = tempi;
		}
	}
	// var shuffledCards = shuffleCards(unshuffledCards);
	// q3.html("Un-shuffled cards: <br>" + unshuffledCards);
	// a3.html("Shuffled cards: <br>" + shuffledCards);

	// q3Btn.on("click",shuffleCards(unshuffledCards));

	// randomize the order of an array
	function arrayRandomize(myArray) {
		var i = myArray.length, j, tempi, tempj;
		if ( i === 0 ) return false;
		while ( --i ) {
			j = Math.floor( Math.random() * ( i + 1 ) );
			tempi = myArray[i];
			tempj = myArray[j];
			myArray[i] = tempj;
			myArray[j] = tempi;
		}
	}

	var oldDeck = unshuffledCards;
	q3.html("Un-shuffled cards: <br>" + oldDeck);
	// console.log(oldDeck);
	// arrayRandomize(unshuffledCards);
	// console.log(unshuffledCards);

	q3Btn.on("click", function() {
		arrayRandomize(unshuffledCards);
		a3.html("<br>Shuffled cards: <br>" + unshuffledCards);
	});
});