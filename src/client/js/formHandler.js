function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const textForAnalysis = document.getElementById('textForAnalysis').value;

    console.log("::: Form Submitted :::")
    
	/* Function to POST data */
	const postData = async (url, data = {}) => {
		console.log(url);
		const res = await fetch(url,{
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
	}
	
	postData('/textAPI', textForAnalysis);
	
}

export { handleSubmit }
