jQuery(document).ready(function($) {
	

var form = $('.facture-page');
var submit_btn = form.find('.submit-btn');
var modalite_check = form.find('.modalite-check');



submit_btn.on('click', function(event) {
	event.preventDefault();
	if(modalite_check.prop( "checked" )) {
		//submit

	} else {
		alert("Veuillez accepter le contrat");
	}
	
});



});		//end document ready function


