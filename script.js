let countdownTime;
let Time_Sec = 0
let Time_Min = 5
// Update onscreen text

function UpdateText(_Text){
    countdownTime = Time_Sec + Time_Min*60;
    document.getElementById("Clock_Min").innerHTML = _Text.toString();
    return    
}





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

