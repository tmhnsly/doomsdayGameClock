let siren = new Audio('siren.mp3');
let buttonClick = new Audio('button.mp3');

let doomsdayClockOneMin = 180;
let doomsdayClockOneMax = 300;

let doomsdayClockTwoMin = 120;
let doomsdayClockTwoMax = 240;

let doomsdayClockThreeMin = 30;
let doomsdayClockThreeMax = 30;

let timer;

function disableButton(button) {
    document.querySelector(button).disabled = true;
}

document.querySelector('#doomsdayClockButtonOne').addEventListener('click', e => {
    doomsdayClock(doomsdayClockOneMin, doomsdayClockOneMax)
    e.target.disabled = true;
    document.getElementById('doomsdayClockButtonOneDisplay').innerText = 'Countdown Initiated';
    disableButton('#doomsdayClockButtonTwo');
    disableButton('#doomsdayClockButtonThree');
    document.querySelector('#doomsdayClockButtonTwo').style.background = '#A30000';
    document.querySelector('#doomsdayClockButtonThree').style.background = '#CC0605';
})

document.querySelector('#doomsdayClockButtonTwo').addEventListener('click', e => {
    doomsdayClock(doomsdayClockTwoMin, doomsdayClockTwoMax)
    e.target.disabled = true;
    document.getElementById('doomsdayClockButtonTwoDisplay').innerText = 'Countdown Initiated';
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonThree');
    document.querySelector('#doomsdayClockButtonOne').style.background = '#A30000';
    document.querySelector('#doomsdayClockButtonThree').style.background = '#A30000';
})

document.querySelector('#doomsdayClockButtonThree').addEventListener('click', e => {
    doomsdayClock(doomsdayClockThreeMin, doomsdayClockThreeMax)
    e.target.disabled = true;
    document.getElementById('doomsdayClockButtonThreeDisplay').innerText = 'Countdown Initiated';
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonTwo');
    document.querySelector('#doomsdayClockButtonOne').style.background = '#A30000';
    document.querySelector('#doomsdayClockButtonTwo').style.background = '#A30000';
})

document.querySelector('#doomsdayClockResetButton').addEventListener('click', e => {
    buttonClick.play();
    location.reload();
})

function doomsdayClock(min, max) {

    let doomsdayClockSeconds =  Math.floor(Math.random() * (max - min + 1) + min);

    console.log('Doomsday is in ' + doomsdayClockSeconds + ' seconds');

    timer = setTimeout(doomsdayClockActive, doomsdayClockSeconds * 1000);
}

function doomsdayClockActive() {
    
    siren.play();

    // Enable buttons
    document.querySelector('#doomsdayClockButtonOne').disabled = false;
    document.querySelector('#doomsdayClockButtonTwo').disabled = false;
    document.querySelector('#doomsdayClockButtonThree').disabled = false;

    // Reset button display text
    document.getElementById('doomsdayClockButtonOneDisplay').innerHTML = '3 - 4 Players Remaining';
    document.getElementById('doomsdayClockButtonTwoDisplay').innerHTML = '2 Players Remaining';
    document.getElementById('doomsdayClockButtonThreeDisplay').innerHTML = 'Quick Fire';

    // Reset button "light" colour
    document.querySelectorAll('.clockStartBackground').background = '#CC0605';
}