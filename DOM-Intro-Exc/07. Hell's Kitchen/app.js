function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputEls = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurant = '';
      let bestSalary = 0;
      let avgSalary = 0;
      let bestWorkers = []; // {name: str, salary: num}
      
      for (const line of inputEls) {
         let [restaurant, workersLine] = line.split(' - ');
         
         let workers = workersLine.split(', ');
         let currAvgSalary = 0;
         let currBestSalary = 0;
         let currBestWorkers = [];

         for (const worker of workers) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);

            let currWorker = {};
            currWorker.workerName = name;
            currWorker.salary = salary;

            currBestWorkers.push(currWorker);

            if(salary > currBestSalary){
               currBestSalary = salary
            }

            currAvgSalary += salary;
         }

         currAvgSalary = currAvgSalary / workers.length;

         if(currAvgSalary > avgSalary){
            avgSalary = currAvgSalary;
            bestSalary = currBestSalary;
            bestRestaurant = restaurant;
            bestWorkers = currBestWorkers;
         }
      }

      let bestRestaurantEl = document.querySelector('#bestRestaurant p');
      bestRestaurantEl.textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      let result = '';
      
      let sortedArr = bestWorkers.sort((a, b) => Number(b.salary) - Number(a.salary));
      for (const worker of sortedArr) {
         let name = '';
         let salary = '';

         for (const key in worker) {

            if(key === 'workerName'){
               name = worker[key];
            }

            if(key === 'salary'){
               salary = worker[key];
            }
         }

            let line = `Name: ${name} With Salary: ${salary} `;
            result += line;
         
      }

      let restaurantWorkersEl = document.querySelector('#workers p');
      restaurantWorkersEl.textContent = result;
   }
}