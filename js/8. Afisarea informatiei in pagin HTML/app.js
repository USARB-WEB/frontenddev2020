const persons = [];


const addPerson = () => {
    const person = {
        name: $("#name").val(),
        age: $("#age").val()
    };
    persons.push(person);
}

const deletePerson = (position) => {
    persons.splice(position, 1);
    listPersons();
}

const listPersons = () => {
    const personListContainer = $("#persons");

    personListContainer.html("");

    let i = 0;
    for (const person of persons) {
        personListContainer.html(
            personListContainer.html() + 
            `<li>
            ${person.name}, ${person.age}
            <button onclick="deletePerson(${i})">x</button>
            </li>`
        );
        i++;
    }   
}

$(document).ready(() => {
    $("#addButton").click(() => {
        addPerson();
        listPersons();
    });
});