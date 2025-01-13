const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function populateVoices() {
  voices = speechSynthesis.getVoices();
  const maleVoices = voices.filter(voice => voice.name.includes('Male'));
  const femaleVoices = voices.filter(voice => voice.name.includes('Female'));
  voicesDropdown.innerHTML = maleVoices.concat(femaleVoices)
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

// Set the text to be spoken
msg.text = document.querySelector('[name="text"]').value;

