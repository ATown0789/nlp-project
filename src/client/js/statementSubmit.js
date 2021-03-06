function statementSubmit (textForAnalysis) {

    console.log("::: Form Submitted :::")
    
	/* Function to fetch POST, await response, and update UI */
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
				document.getElementById('p1').innerHTML = `Tone: ${data.polarity}`;
				document.getElementById('p2').innerHTML = `Confidence: ${data.polarity_confidence.toFixed(2) * 100}%`;
				document.getElementById('p3').innerHTML = `Subjectivity: ${data.subjectivity}`;
				document.getElementById('p4').innerHTML = `Confidence: ${data.subjectivity_confidence.toFixed(2) * 100}%`;
			});
	}
	
	postData('http://localhost:8081/textAPI', textForAnalysis);
	
}

export { statementSubmit }
