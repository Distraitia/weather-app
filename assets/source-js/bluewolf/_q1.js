function findDuplicate() {
	var reportRecipients = ['AAA', 'XYZ', 'AAA', 'ABC', 'XXX', 'XYZ', 'PQR'];
	var recipientsArray = reportRecipients.sort(); 

	var reportRecipientsDuplicate = [];

	console.log("Before for loop, reportRecipients: " + reportRecipients);
	console.log("Before for loop, recipientsArray: " + recipientsArray);
	console.log("Before for loop, reportRecipientsDuplicate: " + reportRecipientsDuplicate);

	for (var i = 0; i < recipientsArray.length - 1; i++) {
		console.log("For loop round: " + i);

	    if (recipientsArray[i + 1] == recipientsArray[i]) {
	        reportRecipientsDuplicate.push(recipientsArray[i]);
	        console.log("Matching if statement for round " + i + "!");
	        console.log("Inside for loop round " + i + ", reportRecipients: " + reportRecipients);
			console.log("Inside for loop round " + i + ", recipientsArray: " + recipientsArray);
			console.log("Inside for loop round " + i + ", reportRecipientsDuplicate: " + reportRecipientsDuplicate);
	    }
	}

	console.log("After for loop, reportRecipients: " + reportRecipients);
	console.log("After for loop, recipientsArray: " + recipientsArray);
	console.log("After for loop, reportRecipientsDuplicate: " + reportRecipientsDuplicate);
}