function extract(content) {
    let contentElement = document.getElementById(content);
    
    let pattern = /(?<=\().+?(?=\))/;
    let match = contentElement.textContent.matchAll(pattern);
    console.log(match)
}