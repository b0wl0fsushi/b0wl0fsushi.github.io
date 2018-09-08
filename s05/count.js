var counter = 0;
function countUp(){
    counter = counter + 1000000000000000000;
    document.querySelector('#display').innerHTML = counter;
}

document.querySelector('#btnCountUp').onclick = () => {
    countUp();
};