function addItem() {
    let itemsEl = document.getElementById('items');
    let liEl = document.createElement('li');
    let inputEl = document.getElementById('newItemText');

    liEl.textContent = inputEl.value;
    itemsEl.appendChild(liEl);
}