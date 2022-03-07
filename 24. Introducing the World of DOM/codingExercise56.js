const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const allSpans = document.querySelectorAll('span');

let count = 0;
for (let span of allSpans) {
  span.style.color = colors[count]
  count += 1;
}