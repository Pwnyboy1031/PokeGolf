import { game } from "./game";

const app = document.getElementById("app");
const spriteContainer = document.createElement("img");
const uiContainer = document.getElementById("interface");
const guessHolder = document.getElementById("guessHolder");
const userInputBox = document.getElementById("input");
const hint = document.createElement("img");
hint.setAttribute("id", "hint");
const scorecardTotal = document.getElementById("sctot");




function homeLoad(pokemonSpriteURL) {
        // initialize dom stuff
        spriteContainer.setAttribute("id", "pokemonSprite");
        updatePokemonSprite(pokemonSpriteURL);
        app.appendChild(spriteContainer);
        uiContainer.appendChild(spriteContainer);
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

function updateScoreboard() {
        for (let i = 1; i <= game.scoreboard.length; i++) {
                const scoreSlot = document.getElementById(`sc${i}`);
                scoreSlot.innerText = game.scoreboard[i-1];
                if (i == 9) {
                        console.log(game.scoreboard);
                        scorecardTotal.innerText = game.scoreboard.reduce(getSum);
                }
        }

        function getSum(total, num) {
                return total + num;
        } 
        
}


export {homeLoad, updatePokemonSprite,updateHint, updateGuesses, userInputBox, clearInput, updateScoreboard}