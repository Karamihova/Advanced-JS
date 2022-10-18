function addItem() {
    let itemsEl = document.getElementById('items');
    let newItemTextInputEl = document.getElementById('newItemText');

    let liEl = document.createElement('li');
    liEl.textContent = newItemTextInputEl.value;
    newItemTextInputEl.value = '';

    let linkEl = document.createElement('a');
    linkEl.href = '#';
    linkEl.textContent = '[Delete]';
    linkEl.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    liEl.appendChild(linkEl);
    itemsEl.appendChild(liEl);


}