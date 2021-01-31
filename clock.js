let siren = new Audio('siren.mp3');

let doomsdayClockOneMin = 180;
let doomsdayClockOneMax = 300;

let doomsdayClockTwoMin = 120;
let doomsdayClockTwoMax = 240;

let doomsdayClockThreeMin = 5;
let doomsdayClockThreeMax = 5;

function doomsdayClockButtonClicked() {
    document.getElementById('doomsdayClockActivityStatus').innerHTML = 'Countdown Started';
}

function doomsdayClock(min, max) {

    doomsdayClockButtonClicked();

    let doomsdayClockSeconds =  Math.floor(Math.random() * (max - min + 1) + min);

    console.log('Doomsday is in ' + doomsdayClockSeconds + ' seconds');

    setTimeout(doomsdayClockActive, doomsdayClockSeconds * 1000);
}

function doomsdayClockActive() {
    siren.play();
    document.getElementById('doomsdayClockActivityStatus').innerHTML = 'Doomsday Clock'
}

// add reset button (or stop button) (browser refresh)
// Pressing button again overrides
// add rivets around the clock