/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let strNum = string.split(" ");
  let strnum = parseInt(strNum, 10);

  if (strnum < 12) {
      return "Good Morning";
  } else if (strnum > 17) {
      return "Good Evening";
  } else {
     return "Good Afternoon";
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerHTML = string;
}
