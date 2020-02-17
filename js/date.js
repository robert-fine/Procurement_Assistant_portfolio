// timeDisplay = document.querySelector('time-left');

function timeLeft() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();
  const nowSeconds = sec + min * 60 + hour * 60 * 60;
  const secondsLeft = 59400 - nowSeconds;
  const hoursLeft = Math.floor(secondsLeft / 3600);
  const minLeft = Math.floor((secondsLeft % 3600) / 60);
  const secLeftDisplay = 60 - sec;
  const negHoursLeft = Math.abs(Math.ceil(secondsLeft / 3600));
  const negMinLeft = Math.abs(Math.ceil((secondsLeft % 3600) / 60));

  const timeLeft = document.querySelector(".time-left");
  if (nowSeconds <= 59400) {
    timeLeft.innerHTML = `
    <h2 class="m-5 p-3 text-center">
  ${hoursLeft}h ${minLeft}m ${secLeftDisplay}s<br>until 4:30 PM
  </h2>
  `;
  } else {
    timeLeft.innerHTML = `
    <h2 class="m-5 p-3 text-center" style="color: red;">
  ${negHoursLeft}h ${negMinLeft}m ${sec}s<br>past 4:30 PM
  </h2>`;
  }
}
setInterval(timeLeft, 1000);
timeLeft();
