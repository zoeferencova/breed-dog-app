'use strict';

function getDogImages() {
	const breed = $('input[id="dog-breed"]').val();
	fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
		.then(response => response.json())
		.then(responseJson => responseJson.status === "error" ? alert(responseJson.message) : showImage(responseJson))
		.catch(error => alert(error.message));
}

function showImage(responseImage) {
	const imageString = `<img src="${responseImage.message}" alt="image of dog" class="results-img">`
	$('.images').html(imageString);
	$('.results').removeClass('hidden');
}

function watchForm(event) {
	$('form').submit(event => {
		event.preventDefault();
		getDogImages();
		$('input[id="dog-breed"]').val('')
	});
}

$(function() {
	console.log('App loaded! Waiting for submit!');
	watchForm();
})