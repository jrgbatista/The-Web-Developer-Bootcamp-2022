// WRITE YOUR CODE IN HERE:
const add100Buttons = document.querySelector('#container');
for (let i = 1; i <= 100; i += 1) {
  let button = document.createElement('button');
  button.innerText = "I'm a button";
  add100Buttons.appendChild(button);
}