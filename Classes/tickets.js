function sortTickets(inputArr, criteria){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }

    let sortedTickets = [];

    for (let i = 0; i < inputArr.length; i++) {
        let [destination, price, status] = inputArr[i].split('|'); 
        price = Number(price);
        sortedTickets.push(new Ticket(destination, price, status));
    }

    switch (criteria) {
        case 'destination':
            sortedTickets = sortedTickets.sort(function(a, b) {return a.destination.localeCompare(b.destination)});
            break;
        case 'price':
            sortedTickets.sort((a, b) => { Number(a.price) - Number(b.price) });
            break;
        case 'status':
            sortedTickets = sortedTickets.sort(function(a, b) {return a.status.localeCompare(b.status)});
        break;
        default:
            break;
    }

    return sortedTickets;

}

sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);