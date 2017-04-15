$(document).ready(function(){

$('form').on('submit', function(event){
	event.preventDefault();
				alert("aa");

	var formulario= $(this);
	$.ajax('reserva.html', {
		type: 'POST',
		data: formulario.serialize(),
		success: function(result){
			formulario.remove();
			$('#reservar').hide().html(result).fadeIn();
		}
	});
});
});