function statementSubmit (textForAnalysis) {

    console.log("::: Form Submitted :::")
    
	/* Function to POST data */
	const postData = async (url, data = {}) => {
		const res = await fetch(url,{
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
	}
	
	postData('http://localhost:8081/textAPI', textForAnalysis);
	
}

export { statementSubmit }
