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
});