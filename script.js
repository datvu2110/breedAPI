

function handleSubmit() {
  	$("#submit-pic").on('submit', function(event) {
    	event.preventDefault();
    	$("#pics").empty();
    	getImage();
  	});
}

function getImage() {
	let input = $("#enter").val().toLowerCase();
	const url = 'https://dog.ceo/api/breed/' + input+ '/images/random';
	const options = {method: 'GET'};
	fetch(url, options)
	.then(response => response.json())
	.then(responseJson => displayDogs(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function displayDogs(responseJson){
	console.log(responseJson.message);
	if (responseJson.message ==="Breed not found (master breed does not exist)"){
		$('#pics').append(`<h2 style="text-align:center;">Check your spelling</h2>`)
	}
	else{
		$('#pics').append(`<img src="${responseJson.message}" height="20%" alt="Dog">`);
	}
	
}

$(function() {
  console.log('App loaded!');
  handleSubmit();
});