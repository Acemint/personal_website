$(".card-clicker" ).hover(
    function(){
        if($(this).children(".fill-image").stop(true, false)){
            $(this).children(".fill-image").animate({opacity: "0.7"}, 500);
        }
    }, 
    function(){
        
        $(this).children(".fill-image").animate({opacity: "0.1"}, 500);
    }
);