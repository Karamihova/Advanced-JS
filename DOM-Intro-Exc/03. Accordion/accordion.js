function toggle() {
    let buttonEl = document.querySelector('span.button');
    let moreTextEl = document.getElementById('extra');
    if(buttonEl.textContent === 'More'){
        buttonEl.textContent = 'Less';
        moreTextEl.style.display = 'block';
    } else{
        buttonEl.textContent = 'More';
        moreTextEl.style.display = 'none';

    }
}