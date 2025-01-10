const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// Replace makeGreen function with click handler
document.querySelector('p').addEventListener('click', function() {
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
});

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size:20px; background:blue; text-shadow: 10px 10px 0 red');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
