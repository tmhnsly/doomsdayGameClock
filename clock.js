let siren = new Audio('siren.mp3');

let doomsdayClockOneMin = 3;
let doomsdayClockOneMax = 3;

let doomsdayClockTwoMin = 3;
let doomsdayClockTwoMax = 3;

let doomsdayClockThreeMin = 3;
let doomsdayClockThreeMax = 3;

let timer;

function doomsdayClock(min, max) {

    let doomsdayClockSeconds =  Math.floor(Math.random() * (max - min + 1) + min);

    console.log('Doomsday is in ' + doomsdayClockSeconds + ' seconds');

    timer = setTimeout(doomsdayClockActive, doomsdayClockSeconds * 1000);
}

function disableButton(button) {
    document.querySelector(button).disabled = true;
}

function initiateCountdown(display) {
    document.getElementById(display).innerText = 'Countdown Initiated';

}

function darkenButtonColour(button) {
    document.querySelector(button).style.background = '#A30000';
}

function resetButtonColour(button) {
    document.querySelector(button).style.background = '#FF0000';
}

function resetDisplayText() {
    document.getElementById('doomsdayClockButtonOneDisplay').innerText = '3 - 4 Players Remaining';
    document.getElementById('doomsdayClockButtonTwoDisplay').innerText = '2 Players Remaining';
    document.getElementById('doomsdayClockButtonThreeDisplay').innerText = 'Quick Fire';
}

function enableButton(button) {
    document.querySelector(button).disabled = false;
}

function doomsdayClockActive() {
    siren.play();
    enableButton('#doomsdayClockButtonOne');
    enableButton('#doomsdayClockButtonTwo');
    enableButton('#doomsdayClockButtonThree');
    resetDisplayText();
    resetButtonColour('#doomsdayClockButtonOne');
    resetButtonColour('#doomsdayClockButtonTwo');
    resetButtonColour('#doomsdayClockButtonThree');
}


document.querySelector('#doomsdayClockButtonOne').addEventListener('click', e => {
    doomsdayClock(doomsdayClockOneMin, doomsdayClockOneMax)
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonTwo');
    disableButton('#doomsdayClockButtonThree');
    initiateCountdown('doomsdayClockButtonOneDisplay');
    darkenButtonColour('#doomsdayClockButtonTwo');
    darkenButtonColour('#doomsdayClockButtonThree');
})

document.querySelector('#doomsdayClockButtonTwo').addEventListener('click', e => {
    doomsdayClock(doomsdayClockTwoMin, doomsdayClockTwoMax)
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonTwo');
    disableButton('#doomsdayClockButtonThree');
    initiateCountdown('doomsdayClockButtonTwoDisplay');
    darkenButtonColour('#doomsdayClockButtonOne');
    darkenButtonColour('#doomsdayClockButtonThree');
})

document.querySelector('#doomsdayClockButtonThree').addEventListener('click', e => {
    doomsdayClock(doomsdayClockThreeMin, doomsdayClockThreeMax)
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonTwo');
    disableButton('#doomsdayClockButtonThree');
    initiateCountdown('doomsdayClockButtonThreeDisplay');
    darkenButtonColour('#doomsdayClockButtonOne');
    darkenButtonColour('#doomsdayClockButtonTwo');
})

document.querySelector('#doomsdayClockResetButton').addEventListener('click', e => {
    location.reload();
})