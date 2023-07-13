// Update onscreen text
function UpdateText(_Text){
    document.getElementById("Clock_Min").innerHTML = _Text.toString();
    return    
}

// Set time to 5 minutes
let countdownTime = 300;

// Initialize the countdown timer
let countdownInterval;

// Function to start the countdown
function startCountdown() {
  countdownInterval = setInterval(() => {
    countdownTime--;

    // Display time
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    UpdateText(`${minutes}:${seconds.toString().padStart(2, '0')}`);

    // If countdown has reached zero
    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      UpdateText("SCRAM!");
    }
  }, 1000);
}

// Reset the countdown timer
function resetCountdown() {
  clearInterval(countdownInterval);
  countdownTime = 300;
  UpdateText("5:00");
}

//Check for Space Bar press
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    resetCountdown();
    startCountdown();
  }
});

// Start countdown
startCountdown();

