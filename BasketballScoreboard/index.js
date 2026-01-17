let scoreHome = 0 
let scoreGuest = 0

function guestPlusOne() {
    scoreGuest += 1
    document.getElementById("score-guest").textContent = scoreGuest
}

function guestPlusTwo() {
    scoreGuest += 2
    document.getElementById("score-guest").textContent = scoreGuest
}

function guestPlusThree() {
    scoreGuest += 3
    document.getElementById("score-guest").textContent = scoreGuest
}

function homePlusOne() {
    scoreHome += 1
    document.getElementById("score-home").textContent = scoreHome
}

function homePlusTwo() {
    scoreHome += 2
    document.getElementById("score-home").textContent = scoreHome
}

function homePlusThree() {
    scoreHome += 3
    document.getElementById("score-home").textContent = scoreHome
}