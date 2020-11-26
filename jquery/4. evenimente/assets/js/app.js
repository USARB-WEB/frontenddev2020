$(document).ready(() => {

    let bgColor = "white";
    let buttonText = "Make page Blue";

    $("#button").html(buttonText);

    $("#button").click(function (e) { 
        e.preventDefault();
        if(bgColor === "white"){
            bgColor = "blue";
            buttonText = "Make page White";
        } else {
            bgColor = "white";
            buttonText = "Make page Blue";
        }
        $("#button").html(buttonText);
        $("body").css({
            backgroundColor: bgColor
        });        
    });

    $("#mario").on("click", () => {
        $("#mario").fadeOut();
    })

    setInterval(() => {
        if(!$("#mario").is(":visible")){
            $("#mario").fadeIn();
            $("#mario").css({
                left: "0",
                top: "0"
            });
        }
        
    }, 3000);


    $(document).keydown(function(e){
        switch (e.which){
        case 37:    //left arrow key
            $("#mario").css({
                left: "-=50"
            });
            $("#mario").css("background-position", "-530px -30px");
            break;
        case 38:    //up arrow key
            $("#mario").css({
                top: "-=50"
            });
            break;
        case 39:    //right arrow key
            $("#mario").css({
                left: "+=50"
            });
            $("#mario").css("background-position", "-300px -30px");
            break;
        case 40:    //bottom arrow key
            $("#mario").css({
                top: "+=50"
            });
            break;
        }
    });
});