function search() {
   let searchTextEl = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let matches = 0;

   for (const town of towns) {
      if(town.textContent.includes(searchTextEl) && searchTextEl !== ''){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
         
      }
   }

   let resultEl = document.getElementById('result');
   resultEl.textContent = `${matches} matches found`;
}
