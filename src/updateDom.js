import { game } from "./game";

const app = document.getElementById("app");
const spriteContainer = document.createElement("img");
const uiContainer = document.getElementById("interface");
const guessHolder = document.getElementById("guessHolder");
const userInputBox = document.createElement("input");
const hint = document.createElement("img");
const scorecard = document.createElement("div");
scorecard.setAttribute("id", "scorecard");


function homeLoad(pokemonSpriteURL) {
        // initialize dom stuff
        spriteContainer.setAttribute("id", "pokemonSprite");
        updatePokemonSprite(pokemonSpriteURL);
        app.appendChild(spriteContainer);
        uiContainer.appendChild(spriteContainer);
        app.appendChild(userInputBox);
        userInputBox.setAttribute("maxlength", 3);
        hint.setAttribute("height", 200)
        hint.setAttribute("src", "assets/dash.svg")
        uiContainer.appendChild(hint)
        guessHolder.innerHTML = `<br>${game.numberGuessed}<br>Guesses`
}

async function updatePokemonSprite(spriteURL) {
        spriteContainer.setAttribute("src", spriteURL);
}

function updateHint(direction) {
        hint.setAttribute("src", direction)
}

function updateGuesses() {
        guessHolder.innerHTML = `<br>${game.numberGuessed}<br>Guesses`
}

function clearInput(){
        userInputBox.value = "";
}


export {homeLoad, updatePokemonSprite,updateHint, updateGuesses, userInputBox, clearInput}