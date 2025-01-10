const secretCode = 'wesbos';
const pressed = [];

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    
    // Keep only the most recent entries that could match secretCode
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    if (pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        // Add cornify if available
        if (typeof cornify_add === 'function') {
            cornify_add();
        }
    }
    
    console.log(pressed);
});