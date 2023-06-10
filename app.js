
let donutButton = document.querySelector('#donut-button')
let donutCount = document.getElementById('donut-count')
let autoClickButton = document.getElementById('auto-click-count')

let actualDonut = 0;
let autoClickerPrice = 100;
let totalAutoClickers = 0;





function addDonut() {
    ++actualDonut,
        donutCount.innerText = actualDonut.toFixed(0);
    // Math.floor(actualDonut)
    // round_down(actualDonut)

    console.log('number of times donut-button has been clicked')

    if (autoClickerPrice <= actualDonut) {
        document.getElementById('auto-button').disabled = false;
    }
    else {
        document.getElementById('auto-button').disabled = true;
    }

}

function addAutoClick() {

    if (autoClickerPrice <= actualDonut) {
        ++totalAutoClickers;
        autoClickButton.innerText = totalAutoClickers
        actualDonut -= autoClickerPrice;
        // Math.floor(actualDonut);
    }

    if (totalAutoClickers > 0) {
        autoClickerPrice = (autoClickerPrice) * 1.1;
    }
    levelOneAuto = setInterval(addDonut, 1000);



    if (totalAutoClickers == 1) {
        levelOneAuto
    }


}


// modal help
var modal = document.getElementById('info-modal');
var modalButton = document.getElementById('modal-button')
var span = document.getElementsByClassName('close')[0];

modalButton.onclick = function(){
    modal.style.display= 'block';
}

span.onclick = function(event){
    if( event.target == modal){
        modal.style.display = 'none';
    }
}









// var restartGame;
// if(confirm('Do you really want to restart? Your hard work will not be forgotten but your progress cannot be saved.')== true) {
// restartGame = 'Thank you for your hard work and contribution';
// } 
// else{
//     restartGame = 'Phew! Let\'s get back to work!';
// }
    





