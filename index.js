/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.substring(0, 2);
  let fixedHour = parseInt(hour);
  console.log(fixedHour);
  switch (true) {
    case (fixedHour < 12) :
      return "Good Morning";
      break;

    case (fixedHour <= 12 || fixedHour < 17) :
      return "Good Afternoon";
      break;

    case (fixedHour > 17) :
      return "Good Evening";
      break;

    default:
    return "Time entered incorectly";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let content = document.getElementById("greeting")
  content.innerHTML = message;
}
