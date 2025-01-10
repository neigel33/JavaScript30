const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  
  // Check if shift key is held down and checkbox is being checked
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // Start/stop marking checkboxes when we reach either this or last checked box
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      
      // Check all boxes in between
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
