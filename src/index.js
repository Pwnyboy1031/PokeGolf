import Pokedex from 'pokedex-promise-v2';
import { homeLoad, updatePokemonSprite} from './updateDom';
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

export {getPokemonSprite}

