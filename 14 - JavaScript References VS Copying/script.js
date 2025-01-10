console.clear();  // Clear the console first

// Basic info object
const personInfo = {
    name: 'John Doe',
    age: 30
};
console.log('Person Info:', personInfo);

// Social media object
const socialMedia = {
    twitter: '@johndoe',
    facebook: 'john.doe'
};
console.log('Social Media:', socialMedia);

// Making copies
const personInfoCopy = { ...personInfo };
const socialMediaCopy = { ...socialMedia };

// Modifying copies
personInfoCopy.age = 31;
socialMediaCopy.twitter = '@johndoe_updated';

console.log('Original Person:', personInfo);
console.log('Copy of Person:', personInfoCopy);
console.log('Original Social:', socialMedia);
console.log('Copy of Social:', socialMediaCopy);

console.log('Console was cleared\nindex-FINISHED.html:90');
