function checkSubmit(event) {
	event.preventDefault()
	
	const urlTestReg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
	
	//Get values from input fields
	const statement = document.getElementById('textForAnalysis').value;
	const url = document.getElementById('URLForAnalysis').value;
	
	//Validate that there is text in statement but not in url
	if(statement !== '' && url === ''){
		if(urlTestReg.test(statement))
			alert('Please enter URLs in the URL section');
		else
			Client.statementSubmit(statement);
	}
	//Validate that there is text url but not in statement
	else if(statement === '' && url !== ''){
		//Check that the URL is valid
		if(urlTestReg.test(url)){
			Client.URLSubmit(url);
		}
		else
			alert('Please Enter A Valid URL');
	}
	//Validate that only one field is being entered
	else if(statement !== '' && url !== '')
		alert('Please only enter text in one field')
	else if(statement === ''  && url === '')
		alert('Please enter something in one field')	
	
}

export { checkSubmit }