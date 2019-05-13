/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(str) {
	let hours = parseInt(str.split(':')[0]);



	if (hours < 12) {
		return 'Good Morning';
	} else if (hours === 12 || hours < 17) {
		return 'Good Afternoon';
	} else if (hours >= 17) {
		return 'Good Evening';
	}
}
/* Write your implementation of displayMessage() */

function displayMessage(str) {
	document.getElementById('greeting').textContent = str;
}
