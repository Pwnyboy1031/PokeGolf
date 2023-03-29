const app = document.getElementById("app");
const spriteContainer = document.createElement("img");
function homeLoad(pokemonSpriteURL) {
        // initialize dom stuff

        spriteContainer.setAttribute("id", "pokemonSprite");
        updatePokemonSprite(pokemonSpriteURL);
        app.appendChild(spriteContainer);
        const userInputBox = document.createElement("input");
        userInputBox.setAttribute("maxlength", 3);
        app.appendChild(userInputBox);
}

function updatePokemonSprite(spriteURL) {
        spriteContainer.setAttribute("src", spriteURL);
}


export {homeLoad, updatePokemonSprite}