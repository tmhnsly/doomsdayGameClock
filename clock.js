const siren = new Audio('siren.mp3');

const doomsdayClockOneMin = 180;
const doomsdayClockOneMax = 300;

const doomsdayClockTwoMin = 120;
const doomsdayClockTwoMax = 240;

const doomsdayClockThreeMin = 30;
const doomsdayClockThreeMax = 30;

const buttonOneDefaultText = '3 - 4 Players Remaining';
const buttonTwoDefaultText = '2 Players Remaining';
const buttonThreeDefaultText = 'Quick Fire';

let timer;

function doomsdayClock(min, max) {

    let doomsdayClockSeconds =  Math.floor(Math.random() * (max - min + 1) + min);

    console.log('Doomsday is in ' + doomsdayClockSeconds + ' seconds');

    timer = setTimeout(doomsdayClockActive, doomsdayClockSeconds * 1000);
}

function disableButton(button) {
    document.querySelector(button).disabled = true;
}

function enableButton(button) {
    document.querySelector(button).disabled = false;
}

function darkenButtonColour(button) {
    document.querySelector(button).style.background = '#A30000';
}

function resetButtonColour(button) {
    document.querySelector(button).style.background = '#FF0000';
}

function initiateCountdown(display) {
    document.getElementById(display).innerText = 'Countdown Initiated';
}

function resetDisplayText(display, text) {
    document.getElementById(display).innerText = text;
}

function doomsdayClockActive() {
    siren.play();
    enableButton('#doomsdayClockButtonOne');
    enableButton('#doomsdayClockButtonTwo');
    enableButton('#doomsdayClockButtonThree');
    resetDisplayText('doomsdayClockButtonOneDisplay', buttonOneDefaultText);
    resetDisplayText('doomsdayClockButtonTwoDisplay', buttonTwoDefaultText);
    resetDisplayText('doomsdayClockButtonThreeDisplay', buttonThreeDefaultText);
    resetButtonColour('#doomsdayClockButtonOne');
    resetButtonColour('#doomsdayClockButtonTwo');
    resetButtonColour('#doomsdayClockButtonThree');
}

document.querySelector('#doomsdayClockButtonOne').addEventListener('click', e => {
    siren.play();
    siren.pause();
    doomsdayClock(doomsdayClockOneMin, doomsdayClockOneMax)
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonTwo');
    disableButton('#doomsdayClockButtonThree');
    initiateCountdown('doomsdayClockButtonOneDisplay');
    darkenButtonColour('#doomsdayClockButtonTwo');
    darkenButtonColour('#doomsdayClockButtonThree');
})

document.querySelector('#doomsdayClockButtonTwo').addEventListener('click', e => {
    siren.play();
    siren.pause();
    doomsdayClock(doomsdayClockTwoMin, doomsdayClockTwoMax)
    disableButton('#doomsdayClockButtonOne');
    disableButton('#doomsdayClockButtonTwo');
    disableButton('#doomsdayClockButtonThree');
    initiateCountdown('doomsdayClockButtonTwoDisplay');
    darkenButtonColour('#doomsdayClockButtonOne');
    darkenButtonColour('#doomsdayClockButtonThree');
})

document.querySelector('#doomsdayClockButtonThree').addEventListener('click', e => {
    siren.play();
    siren.pause();
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