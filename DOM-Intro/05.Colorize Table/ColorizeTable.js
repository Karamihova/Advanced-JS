function colorize() {
    let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    for (const row of rowElements) {
        row.style.background = 'teal';
    }
}