var saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', checkForm, false);

function checkForm() {
    var nameInput = document.getElementById('name');
	var nameLength = nameInput.value.length;
	clearErrors(nameInput);
	if (nameLength < 6) {
	    var nameError = 'Не меньше 6 символов!';
		showError(nameError, nameInput);
	}
	
	var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	var emailInput = document.getElementById('email');
	var emailValue = emailInput.value;
	clearErrors(emailInput);
	if (!emailValue.match(reg)) {
	    var emailError = 'Неверный e-mail!';
	    showError(emailError, emailInput);   
	}
}

function showError(errorText, currentElement) {       
		var errorMessage = document.createElement('span');
		errorMessage.className = 'error-message';
		errorMessage.textContent = errorText;
		currentElement.parentNode.insertBefore(errorMessage, currentElement.nextSibling);
}

function clearErrors(listRow) {
	Array.prototype.forEach.call(listRow.parentNode.getElementsByClassName('error-message'), function(errorTextBlock) {
		listRow.parentNode.removeChild(errorTextBlock);	
	});
}