document.addEventListener("DOMContentLoaded", () => {
    alert("Hello from JavaScript");

    document.getElementById("superButton").addEventListener("click", () => {
        alert("Event listener works");
    });
    
    window.onresize = () => {
        alert("window resized")
    }
});





function setName (){
    console.log("setName");
    document.getElementById("name").innerHTML = document.getElementById("nameInput").value;
}

// setTimeout(() => {
//     alert("2 seconds timeout");
// }, 2000);


// setInterval(() => {
//     alert("one more second passed");
// }, 20000);
