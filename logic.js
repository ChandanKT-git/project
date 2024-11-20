let cnum = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempt = 0;
let lowerLimit = 1;
let upperLimit = 100;

// DOM Elements
let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let hintBtn = document.getElementById("hintBtn");
let message = document.getElementById("msg");
let hintMsg = document.getElementById("hintMsg");

// Check user guess
function check() {
    let usernum = parseInt(userinp.value);

    // Validation
    if (isNaN(usernum) || usernum < 1 || usernum > 100 ||!Number.isInteger(usernum) ) {
        message.innerHTML = "Please enter a valid number between 1 and 100.";
        message.style.color = "orange";
        return;
    }

    // Game logic
    if (usernum === cnum) {
        message.innerHTML = "🎉 Congratulations! You guessed the number!";
        message.style.color = "green";
        resBtn.style.display = "block";
        hintBtn.style.display = "none";
    } else if (usernum > cnum) {
        message.innerHTML = "📉 Too high! Try again.";
        message.style.color = "red";
        upperLimit = Math.min(upperLimit, usernum - 1);
    } else {
        message.innerHTML = "📈 Too low! Try again.";
        message.style.color = "red";
        lowerLimit = Math.max(lowerLimit, usernum + 1);
    }

    // Update attempts and show hint button
    attempt++;
    attemptData.innerHTML = attempt;
    hintBtn.style.display = "block";

    // Clear input field
    userinp.value = "";
}

// Provide a hint
function provideHint() {
    hintMsg.innerHTML = `Try a number between ${lowerLimit} and ${upperLimit}.`;
}

// Restart the game
function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    lowerLimit = 1;
    upperLimit = 100;
    attemptData.innerHTML = attempt;
    message.innerHTML = "";
    hintMsg.innerHTML = "";
    message.style.color = "black";
    userinp.value = "";
    resBtn.style.display = "none";
    hintBtn.style.display = "none";
}

// Event Listeners
subBtn.addEventListener("click", check);
hintBtn.addEventListener("click", provideHint);
resBtn.addEventListener("click", restart);
