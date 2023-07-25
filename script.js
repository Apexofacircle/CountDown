//Global variables
let countdownTime;
let Time_Sec = 0
let Time_Min = 5

// Input Handler

function SetInput(_Min, _Sec){
  document.getElementById("MinIN").value = _Min;
  document.getElementById("SecIN").value = _Sec;
}

// Update onscreen text

function UpdateText(_Text){
    
    document.getElementById("Clock_Min").innerHTML = _Text.toString();
    return    
}



//SetTime
function SetTime(_Time_Min = 0, _Time_Sec = 0){
    countdownTime = _Time_Sec + (_Time_Min*60);   
}

SetTime(Time_Min, Time_Sec)

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
      UpdateText("DONE");
    }
  }, 1000);
}

// Reset the countdown timer
function resetCountdown() {
  clearInterval(countdownInterval);
  countdownTime = parseInt(Time_Min*60) + parseInt(Time_Sec);  //This was giving me grief. 

  Time_Min++;
  if(Time_Sec > 9){
    UpdateText(Time_Min + ":" + Time_Sec)
  }
  else{
    UpdateText(Time_Min + ":0" + String(Time_Sec))
  }
}

//Check for Space Bar press
document.addEventListener("keydown", function(event) {
  if (event.code === "KeyR") {
    resetCountdown();
    startCountdown();
  }
});

function InputUpdate(){
  Time_Sec = document.getElementById("SecIN").value;
  Time_Min = document.getElementById("MinIN").value;
  SetTime(Time_Min, Time_Sec)
  resetCountdown()
  startCountdown()
}

SetInput(Time_Min, Time_Sec)
UpdateText("5:00")


startCountdown()
