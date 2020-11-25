$(document).ready(() => {
    $(".element").css({
        backgroundColor: "blue"
    });

    $("#element5").css({
        backgroundColor: "green"
    });

    for(let i = 1; i <= 10; i++) {
        $(`#element${i}`).css({
            left: `${i * 10}px`
        });
    }


    for(let i = 1; i <= 10; i++) {
        $(`#element${i}`).animate({
            left: `+=${i * 20}`
        }, 2000);
    }

    $(`#ball`).animate({
        left: `+=120`
    }, 500);

    $(`#ball`).animate({
        top: `+=100`,
        left: `+=10`
    }, 500);


    const ballColors = [
        "red", "green", "blue", 
        "yellow", "violet", "black",
        "orange", "pink", "cyan"
    ];

    for (let index = 0; index < 9; index++) {       
        $(`#ball`).animate({
            left: `+=20`,
        }, 500);
    
        $(`#ball`).animate({
            top: `+=100`,
            left: `+=15`
        }, 500, "linear", () => {
            $("#ball").css({
                backgroundColor: ballColors[index]
            });
        });
    }
});