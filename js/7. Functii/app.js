const draw = (figure) => {
    if(figure !== "Circle" && figure !== "Square") {
        console.log("Unknown figure");
    } else {
        console.log(`${figure} drawed`);
    }
}

const clear = (figure) => {
    if(figure !== "Circle" && figure !== "Square") {
        console.log("Unknown figure");
    } else {
        console.log(`${figure} cleared`);
    }
}


console.log("Start");
draw("Circle");
draw("Square");
clear("Circle");
draw("Line");
draw("Line");

