function GetNow() {
			fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings", {   
				headers: {
				Authorization:'Basic ' + btoa('test@liferay.com:test')
				}
			})
			.then(res => res.json())
			.then((data) => {
				console.log("Correct execution: ", data);
			})
			.catch((error) => {
				console.error("Error execution: ", error);
			});
			}


			function PostNow()  {
			fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings", {   
				method: "POST",
				headers: {
				Authorization:'Basic ' + btoa('test@liferay.com:test'),
				"Content-Type": "application/json",
				},
				body: JSON.stringify({
				headline: "Liferay API DXP (PLACEHOLDER)",
				articleBody: "Liferay API (PLACEHOLDER).",

				})
			})
			
			} 


			function GetId() {
			fetch(
			`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${document.getElementById("1prjs").value}`,
			{
				method: "GET",
				headers: {
				Authorization: "Basic " + btoa("test@liferay.com:test"),
				}
			})
			.then(res => res.json())
			.then((data) => {
				console.log("Correct execution: ", data);
				return data.id;
			})
			.catch((error) => {
				console.error("Error execution: ", error);
			});
				
			}
			
			function DeleteNow() {
			fetch(
				`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${document.getElementById("1pr").value}`,
				{
				method: "DELETE",
				headers: {
					Authorization: "Basic " + btoa("test@liferay.com:test"),
				}
				})
			
			.then((data) => {
				console.log("Correct execution: ", data);
			})
			.catch((error) => {
				console.error("Error execution: ", error);
			});
			}