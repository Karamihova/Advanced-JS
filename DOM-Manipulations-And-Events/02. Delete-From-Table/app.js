function deleteByEmail() {
    let emailInputEl = document.querySelector('input[name = "email"]');
    let rowEmailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultEl = document.getElementById('result');

    let emails = Array.from(rowEmailElements);
    let targetEmail = emails.find(e => e.textContent === emailInputEl.value);

    if(targetEmail){
        targetEmail.parentNode.remove();
        resultEl.textContent = 'Deleted.'
    } else{
        resultEl.textContent = 'Not found.';
    }
}