const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => `
    <li>
      <label>
        <input type="checkbox" data-index=${i} ${plate.done ? 'checked' : ''} />
        ${plate.text}
      </label>
    </li>
  `).join('');
}

addItems.addEventListener('submit', addItem);
populateList(items, itemsList);