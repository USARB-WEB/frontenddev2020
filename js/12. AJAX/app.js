$(document).ready(() => {
    $("#btnLoadPersons").click(async () => {
        $("#loader").show();
        await loadPersons();
        $("#loader").hide();
    });
});

function loadPersons() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $.get("http://localhost:3000/persons", function (persons) {
                if (persons.length) {
                    $("#persons").html("");
                    for (const person of persons) {
                        $("#persons").html(
                            $("#persons").html() +
                            `<li>${person.name}, [${person.phone}]</li>`
                        );
                    }
                } else {
                    $("#persons").html("No persons to show");
                }
                console.log("done");
                resolve();
            });

        }, 2000);
    });
}

