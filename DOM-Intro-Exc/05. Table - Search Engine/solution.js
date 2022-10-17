function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      let inputEl = document.getElementById('searchField').value;
      let rowsEl = document.querySelectorAll('tbody tr');
      for (const row of rowsEl) {
         row.classList.remove('select');
         if(inputEl !== '' && row.innerHTML.includes(inputEl)){
            row.className = 'select';
         }
      }

      inputEl.value = '';

   }
}