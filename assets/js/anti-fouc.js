document.addEventListener('DOMContentLoaded', function() {
    document.body.style.visibility = 'hidden';
	window.onload = function() {
		$(window).on("load",function(){
			document.body.style.visibility = 'visible';
		});
	};
}); 

