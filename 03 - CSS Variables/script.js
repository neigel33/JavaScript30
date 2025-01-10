const inputs = document.querySelectorAll('.controls input');
const image = document.querySelector('img');

// Create a wrapper around the image
const wrapper = document.createElement('div');
wrapper.style.display = 'inline-block';
wrapper.style.padding = '10px';
wrapper.style.backgroundColor = '#ffc600';
wrapper.style.transition = 'all 0.2s';
wrapper.style.width = '200px';
wrapper.style.height = '200px';
image.parentNode.insertBefore(wrapper, image);
wrapper.appendChild(image);

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  if (this.name === 'spacing') {
    wrapper.style.padding = this.value + suffix;
  } else if (this.name === 'blur') {
    wrapper.style.filter = `blur(${this.value + suffix})`;
  } else if (this.name === 'base') {
    wrapper.style.backgroundColor = this.value;
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));