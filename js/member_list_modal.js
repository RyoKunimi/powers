$(document).ready(function () {
	var trainee = $('#trainee0');
	console.log(trainee);
	for (var i = 1; i <= 7; i++) {
		trainee.clone(true).removeAttr("id").attr('id', 'trainee' + i).appendTo('.trainees');
	}	  
});
	
$( function() {
	$('.trainees').click( function () {
		$('#sampleModal').modal();
	});
});
