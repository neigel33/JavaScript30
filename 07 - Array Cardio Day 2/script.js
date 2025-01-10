// Some and Every Checks
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});
console.log('Is at least one person 19 or older?', isAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});
console.log('Is everyone 19 or older?', allAdults);

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find() Find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log('Found comment:', JSON.stringify(comment, null, 2));

// Array.prototype.findIndex() Find and delete the comment with ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
// Delete the comment
comments.splice(index, 1);
console.log('Updated comments:', JSON.stringify(comments, null, 2));
