import { getPokemonSprite} from ".";
import { updatePokemonSprite, updateGuesses, updateHint, clearInput, updateScoreboard} from "./updateDom";

const game = {
    targetPokeId: null,
    playerGuess: 0,
    numberGuessed: 0,
    scoreboard: [],
    hasWon: false,

    getRandomID: function() {
        // generates random number to query api for pokemon with that ID
        const randPokeId = Math.floor(Math.random() * 151) + 1;
        return randPokeId
    },

    newRound: async function() {
        this.targetPokeId = this.getRandomID();
        console.log(this.targetPokeId);
        this.playerGuess = 0;
        const pokemonSpriteURL = await getPokemonSprite();
        clearInput();
        updatePokemonSprite(pokemonSpriteURL);
        updateGuesses();
        updateHint("assets/dash.svg")
        this.hasWon = false;
    },

    checkGuess: function() {    
        updateGuesses();
        // checks guess against target, returns direction of next guess
        switch (true) {
            // correct
            case this.playerGuess == this.targetPokeId:
                this.scoreboard.push(this.numberGuessed);
                updateScoreboard();
                updateHint("assets/pokeball.png");
                this.hasWon = true;
                this.numberGuessed = 0;
                break;
            // higher
            case this.playerGuess > this.targetPokeId:
                updateHint("assets/redArrow.svg")
                break;
                // lower
            case this.playerGuess < this.targetPokeId:
                updateHint("assets/greenArrow.svg")
                break;
        }
    },
}

export {game}






