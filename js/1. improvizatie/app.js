window.onload = function () {
    moveCarScenario();

    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';

    setTimeout(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
    }, 2000)

    setTimeout(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    }, 4000)

    document.getElementById("redColorBtn").onclick = () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
    }
    
    document.getElementById("greenColorBtn").onclick = () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
    }

    document.getElementById("blueColorBtn").onclick = () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    }

};


function moveCarScenario(){
    const car = document.getElementById("car");
    
    setInterval(() => {
        if(car.offsetLeft < 400){
            car.style.left  =  (parseInt(car.offsetLeft) + 30) + "px";
        } else {
            car.style.left  =  (parseInt(car.offsetLeft) - 30) + "px";
        }
        
    }, 1000);
}
