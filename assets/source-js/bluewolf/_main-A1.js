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



	var q1UnsortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 3];
	q1.html("Test array: " + q1UnsortedNumbers);
	var q1SortedArray = q1UnsortedNumbers.sort(); 
	var q1UnsortedNumbersDuplicate = [];

	// q1.html("Test array: " + q1UnsortedNumbers);
	function findDuplicate(e) {
		e.preventDefault();

		for (var i = 0; i < q1SortedArray.length - 1; i++) {
		    if (q1SortedArray[i + 1] == q1SortedArray[i]) {
		        q1UnsortedNumbersDuplicate.push(q1SortedArray[i]);       
		    }
		}

		a1.html("The repeated value in the test array is: " + q1UnsortedNumbersDuplicate);
	}
	// q1.html("Test array: " + q1UnsortedNumbers);
	q1Btn.on("click", findDuplicate);




	var q2description = "Find the first non-repeating character in a string:('DEFFD' -> E )";
	var q2TestString = 'DEFFDA';
	var q2StringArray = q2TestString.split("").sort();
	var q2StringUnique = [];

	function findFirstNonRepeatingLetter(e) {
		e.preventDefault();

		if (q2StringUnique.length < 1) {
			for (var i = 0; i < q2StringArray.length - 1; i++) {
			    if (q2StringArray[i + 1] == q2StringArray[i]) {
			    	// do nothing
			    } else {
			    	q2StringUnique.push(q2StringArray[i]);
			    }
			}
			a2.html("First unique character or sorted string: " + q2StringUnique[0]);
		}
	}

	q2.html("Test string: " + q2TestString + "<br>Sorted test string: " + q2StringArray);
	q2Btn.on("click",findFirstNonRepeatingLetter);
	

	function shuffleCards(myArray) {
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
	q3.html("<strong><u>Un-shuffled cards</u>:</strong> <br>" + oldDeck);
	// console.log(oldDeck);
	// shuffleCards(unshuffledCards);
	// console.log(unshuffledCards);

	q3Btn.on("click", function() {
		shuffleCards(unshuffledCards);
		a3.html("<br><strong><u>Shuffled cards</u>:</strong> <br>" + unshuffledCards);
	});
});