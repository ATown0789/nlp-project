function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let textForAnalysis = document.getElementById('textForAnalysis').value
    Client.checkForName(textForAnalysis)

    console.log("::: Form Submitted :::")
    
	/* Function to POST data */
	const postData = async (url, data = {}) => {
		console.log(data);
		const res = await fetch(url,{
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		try {
			const newData = await res.json();
			return newData;
		}
		catch(error){
			console.log('error', error);
		}
	}
	
	postData('/textAPI', textForAnalysis);
	
}

export { handleSubmit }
