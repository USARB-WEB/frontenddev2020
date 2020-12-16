let persons = [];


const addPerson = () => {
    const person = {
        name: $("#name").val(),
        age: $("#age").val()
    };
    persons.push(person);
    localStorage.setItem("persons", JSON.stringify(persons));
}

const deletePerson = (position) => {
    persons.splice(position, 1);
    listPersons();
    localStorage.setItem("persons", JSON.stringify(persons));
}

const listPersons = () => {
    const personListContainer = $("#persons");

    personListContainer.html("");

    let i = 0;
    if(!persons) {
        return;
    }
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

    if(localStorage.getItem("persons")){
        persons = JSON.parse(localStorage.getItem("persons"));
    }    

    listPersons();

    $("#addButton").click(() => {
        addPerson();
        listPersons();
    });
});