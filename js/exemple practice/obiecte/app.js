const person = {
    name: "Ion Creanga",
    age: 123,
    phones: ["112", "223"],
    birthDate: "01.01.2020",
    address: {
        street: "Stefan cel Mare",
        house_number: 2,
        apartment: 5
    }
};

document.getElementById("personName").innerHTML = person.name;
document.getElementById("birthDate").innerHTML = person.birthDate;