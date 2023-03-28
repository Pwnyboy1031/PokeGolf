console.log("hello poke golf!")

import Pokedex from 'pokedex-promise-v2';
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


document.addEventListener("DOMContentLoaded", async (e) => {
    //dom stuff
    const app = document.getElementById("app");
    const spriteContainer = document.createElement("img");
    spriteContainer.setAttribute("id", "pokemonSprite");
    app.appendChild(spriteContainer);
    const pokemonSpriteURL = await getPokemonSprite();
    spriteContainer.setAttribute("src", pokemonSpriteURL);
    const userInputBox = document.createElement("input");
    userInputBox.setAttribute("maxlength", 3)
    app.appendChild(userInputBox);
});


