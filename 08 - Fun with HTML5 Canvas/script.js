const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

if (!ctx) {
    console.error('Canvas context not supported');
    throw new Error('Canvas context not supported');
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initial setup
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Initial drawing settings
ctx.strokeStyle = '#FF0000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// Drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    
    // Get coordinates whether mouse or touch event
    const x = e.offsetX || e.touches?.[0].pageX - canvas.offsetLeft;
    const y = e.offsetY || e.touches?.[0].pageY - canvas.offsetTop;
    
    // Change color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    
    // Update coordinates
    [lastX, lastY] = [x, y];
    
    // Update color
    hue++;
    hue = hue % 360;
    
    // Change line width
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

function startDrawing(e) {
    isDrawing = true;
    const x = e.offsetX || e.touches?.[0].pageX - canvas.offsetLeft;
    const y = e.offsetY || e.touches?.[0].pageY - canvas.offsetTop;
    [lastX, lastY] = [x, y];
}

function stopDrawing() {
    isDrawing = false;
}

// Event listeners with cleanup
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch support
canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    startDrawing(e);
});
canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    draw(e);
});
canvas.addEventListener('touchend', stopDrawing);
