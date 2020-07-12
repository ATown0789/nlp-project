function checkSubmit(event) {
	event.preventDefault()
	
	//Get values from input fields
	const statement = document.getElementById('textForAnalysis').value;
	const url = document.getElementById('URLForAnalysis').value;
	
	//Validate that there is text in statement but not in url
	if(statement !== '' && url === ''){
		Client.statementSubmit(statement);
	}
	//Validate that there is text url but not in statement
	else if(statement === '' && url !== ''){
		const urlTestReg = RegExp('^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?');
		//Check that the URL is valid
		if(urlTestReg.test(url)){
			Client.URLSubmit(url);
		}
		else
			alert('Please Enter A Valid URL');
	}
	else if(statement !== '' && url !== '')
		alert('Please only enter text in one field')
	else if(statement === ''  && url === '')
		alert('Please enter something in one field')	
	
}

export { checkSubmit }