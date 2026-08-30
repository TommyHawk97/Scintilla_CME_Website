var ContentToggle;
document.addEventListener('DOMContentLoaded', function() {
    ContentToggle = document.getElementById("content");
    ContentToggle.style.visibility = "hidden";
        window.onload = function() {
            $(window).on("load",function(){
                setTimeout(() => {
                    $(".loader-wrapper").fadeOut("slow");
                }, 1000);
                ContentToggle.style.visibility = "visible";
            });
        };
    });