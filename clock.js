let siren = new Audio('siren.mp3');
let buttonClick = new Audio('button.mp3');

let doomsdayClockOneMin = 180;
let doomsdayClockOneMax = 300;

let doomsdayClockTwoMin = 120;
let doomsdayClockTwoMax = 240;

let doomsdayClockThreeMin = 30;
let doomsdayClockThreeMax = 30;

let timer;

document.querySelector('#doomsdayClockButtonOne').addEventListener('click', e => {
    buttonClick.play();
    e.target.disabled = true;
    document.getElementById('doomsdayClockButtonOneDisplay').innerHTML = 'Countdown Initiated';
    doomsdayClock(doomsdayClockOneMin, doomsdayClockOneMax)
    document.querySelector('#doomsdayClockButtonTwo').disabled = true;
    document.querySelector('#doomsdayClockButtonThree').disabled = true;
})

document.querySelector('#doomsdayClockButtonTwo').addEventListener('click', e => {
    buttonClick.play();
    e.target.disabled = true;
    doomsdayClock(doomsdayClockTwoMin, doomsdayClockTwoMax)
    document.getElementById('doomsdayClockButtonTwoDisplay').innerHTML = 'Countdown Initiated';
    document.querySelector('#doomsdayClockButtonOne').disabled = true;
    document.querySelector('#doomsdayClockButtonThree').disabled = true;
})

document.querySelector('#doomsdayClockButtonThree').addEventListener('click', e => {
    buttonClick.play();
    e.target.disabled = true;
    doomsdayClock(doomsdayClockThreeMin, doomsdayClockThreeMax)
    document.getElementById('doomsdayClockButtonThreeDisplay').innerHTML = 'Countdown Initiated';
    document.querySelector('#doomsdayClockButtonOne').disabled = true;
    document.querySelector('#doomsdayClockButtonTwo').disabled = true;
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
    document.querySelector('#doomsdayClockButtonOne').disabled = false;
    document.querySelector('#doomsdayClockButtonTwo').disabled = false;
    document.querySelector('#doomsdayClockButtonThree').disabled = false;
    document.getElementById('doomsdayClockButtonOneDisplay').innerHTML = '3 - 4 Players Remaining';
    document.getElementById('doomsdayClockButtonTwoDisplay').innerHTML = '2 Players Remaining';
    document.getElementById('doomsdayClockButtonThreeDisplay').innerHTML = 'Quick Fire';
}