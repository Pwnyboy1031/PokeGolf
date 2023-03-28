import Pokedex from 'pokedex-promise-v2';
import { homeLoad } from './homeLoad';
const P = new Pokedex();
const targetPokemonId = Math.floor(Math.random() * 151) + 1;
const userGuess = 1;

async function getPokemonSprite() {
    try {
        const pokemon = await P.getResource([`api/v2/pokemon/${targetPokemonId}`]);
        const pokemonSpriteURL = pokemon[0].sprites.front_default;
        return pokemonSpriteURL;
    } catch (error) {
        throw error
    }
}

async function init() {
    const pokemonSpriteURL = await getPokemonSprite();
    homeLoad(pokemonSpriteURL);
}

init();

