document.getElementById('one').addEventListener('click', (event) => {
  console.log("one");
  event.stopPropagation();
});

document.getElementById('two').addEventListener('click', (event) => {
  console.log("two");
  event.stopPropagation();
});

document.getElementById('three').addEventListener('click', (event) => {
  console.log("three");
  event.stopPropagation();
});
