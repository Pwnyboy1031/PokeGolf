import Pokedex from 'pokedex-promise-v2';
import { homeLoad, userInputBox} from './updateDom';
import {game} from './game.js'


const P = new Pokedex();

async function getPokemonSprite() {
    try {
        const pokemon = await P.getResource([`api/v2/pokemon/${game.targetPokeId}`]);
        const pokemonSpriteURL = pokemon[0].sprites.front_default;
        return pokemonSpriteURL;
    } catch (error) {
        throw error
    }
}

async function init() {
    game.targetPokeId = game.getRandomID();
    const pokemonSpriteURL = await getPokemonSprite();
    homeLoad(pokemonSpriteURL);
}



init();
    document.addEventListener("keyup", (e) => {
        if (e.key === "Enter" && game.hasWon == false) {
                game.playerGuess = userInputBox.value;
                game.numberGuessed += 1;
                game.checkGuess();
                console.log(game.targetPokeId);
        } else if (e.key === "Enter" && game.hasWon == true) {
            game.newRound();
        }

        document.addEventListener("resize", (e) => {
            
        })
    })





export {getPokemonSprite}

