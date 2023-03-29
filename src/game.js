import { getPokemonSprite } from ".";
import { updatePokemonSprite } from "./updateDom";

const game = {
    targetPokeId: null,
    playerGuess: null,

    getRandomID: function() {
        // generates random number to query api for pokemon with that ID
        const randPokeId = Math.floor(Math.random() * 151) + 1;
        return randPokeId
    },

    newRound: function() {
        this.targetPokeId = this.getRandomID();
        this.playerGuess = null;
        updatePokemonSprite();
    },

    checkGuess: function() {    
        // checks guess against target, returns direction of next guess
        switch (true) {
            // correct
            case this.playerGuess == this.targetPokeId:
                this.newRound();
                break;
            // lower
            case this.playerGuess < this.targetPokeId:
            // higher
                break;
            case this.playerGuess > this.targetPokeId:
                break;
        }
    },
}

export {game}






