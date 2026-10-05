// Setting the page height to 100% of the viewport height	
function setFullHeight() {
   var wH = $(window).height();

   $('.html', '.body').css({height: wH});
}