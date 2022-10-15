function editElement(html, match, replacer) {
    let element = html.textContent;
    let matcher = new RegExp(match, 'g');
    let edited = element.replace(matcher, replacer);
    html.textContent = edited;
    console.log(html.textContent);
}