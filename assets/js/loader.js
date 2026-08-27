var ContentToggle;
document.addEventListener('DOMContentLoaded', function() {
    ContentToggle = document.getElementById("content");
    ContentToggle.style.visibility = "hidden";
});

window.onload = function() {
    $(window).on("load",function(){
        setTimeout(() => {
            ContentToggle.style.visibility = "visible";
            $(".loader-wrapper").fadeOut("slow");
        }, 1000);
    });
};
