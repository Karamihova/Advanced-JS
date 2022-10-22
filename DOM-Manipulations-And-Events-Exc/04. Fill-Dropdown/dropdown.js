function addItem() {
    let newItemTextInput = document.getElementById('newItemText');
    let newItemValueInput = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.text = newItemTextInput.value;
    option.value = newItemValueInput.value;

    let menu = document.getElementById('menu');
    if(newItemTextInput.value !== '' && newItemValueInput.value !== ''){
        menu.appendChild(option);
    }

    newItemTextInput.value = '';
    newItemValueInput.value = '';
}