var siren = new Audio('siren.mp3');

function doomsdayClockButtonClicked() {
    document.getElementById('doomsdayClockActivityStatus').innerHTML = 'Doomsday Clock Armed';
}

function doomsdayClockOne() {

    doomsdayClockButtonClicked();

    doomsdayClockOneMin = Math.ceil(180);
    doomsdayClockOneMax = Math.floor(300);

    let doomsdayClockOneSeconds =  Math.floor(Math.random() * (doomsdayClockOneMax - doomsdayClockOneMin + 1) + doomsdayClockOneMin);

    console.log('Doomsday is in ' + doomsdayClockOneSeconds + ' seconds');

    setTimeout(doomsdayClockActive, doomsdayClockOneSeconds * 1000);
}

function doomsdayClockTwo() {

    doomsdayClockButtonClicked();

    doomsdayClockTwoMin = Math.ceil(120);
    doomsdayClockTwoMax = Math.floor(240);

    let doomsdayClockTwoSeconds =  Math.floor(Math.random() * (doomsdayClockTwoMax - doomsdayClockTwoMin + 1) + doomsdayClockTwoMin);

    console.log('Doomsday is in ' + doomsdayClockTwoSeconds + ' seconds');

    setTimeout(doomsdayClockActive, doomsdayClockTwoSeconds * 1000);
}

function doomsdayClockThree() {

    doomsdayClockButtonClicked();

    doomsdayClockTwoMin = Math.ceil(20);
    doomsdayClockTwoMax = Math.floor(30);

    let doomsdayClockTwoSeconds =  Math.floor(Math.random() * (doomsdayClockTwoMax - doomsdayClockTwoMin + 1) + doomsdayClockTwoMin);

    console.log('Doomsday is in ' + doomsdayClockTwoSeconds + ' seconds');

    setTimeout(doomsdayClockActive, doomsdayClockTwoSeconds * 1000);
}

function doomsdayClockActive() {
    siren.play();
    document.getElementById('doomsdayClockActivityStatus').innerHTML = 'Doomsday Clock'
}