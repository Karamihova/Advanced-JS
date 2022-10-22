function create(words) {

  let elements = words;
  let parent = document.getElementById('content');

  for (const element of elements) {
    let p = document.createElement('p');
    p.textContent = element;
    p.style.display = 'none';
    let div = document.createElement('div');
    div.appendChild(p);

    function displayParagraph(event){
      event.target.children[0].style.display = 'inline';
    }

    div.addEventListener('click', displayParagraph);
    parent.appendChild(div);
    
  }
}