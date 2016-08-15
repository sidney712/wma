// Show the logo
$(document).ready(function() {
	$('#logo').click(function() {
		$('#wrapper').css('display','none');
		setTimeout(function() {$('#wrapper').fadeIn(1000)}, 2000);
	});
});


// LiveReload
// document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
