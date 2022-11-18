class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){

        let names = new Set();

        for (const line of footballPlayers) {

            let [name, age, playerValue] = line.split('/');
            playerValue = Number(playerValue);
            names.add(name);

            if(this.invitedPlayers.some(p => p.name === name)){
                let currPlayer = this.invitedPlayers.find(p => p.name === name);
                if(currPlayer.playerValue < playerValue){
                    currPlayer.playerValue = playerValue; // may be +=
                }
            } else{
                let newPlayer = {
                    name,
                    age,
                    playerValue
                };
    
                this.invitedPlayers.push(newPlayer);
            } 

        }

        let result = Array.from(names).join(', ');
        return `You successfully invite ${result}.`;

    }

    signContract(selectedPlayer){

        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let currPlayer = this.invitedPlayers.find(p => p.name === name);

        if(currPlayer){
            if(playerOffer < currPlayer.playerValue){
                
                let priceDifference = currPlayer.playerValue - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);

            } else{
                currPlayer.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
            }
        } else{
            throw new Error(`${name} is not invited to the selection list!"`);
        }
    }

    ageLimit(name, age){
        let currPlayer = this.invitedPlayers.find(p => p.name === name);
        if(currPlayer){

            if(currPlayer.age < age){
                let ageDifference = age - currPlayer.age;
                if(ageDifference < 5){
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
                } else if(ageDifference > 5){
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            } else {
                return `${name} is above age limit!`;
            }

        } else{
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult(){
        let result = "Players list:" + '\n';
        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        for (const player of sortedPlayers) {
            result += `Player ${player.name}-${player.playerValue}`;
            result += '\n';
        } 

        return result;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());






