function homeLoad(pokemonSpriteURL) {
        //dom stuff
        const app = document.getElementById("app");
        const spriteContainer = document.createElement("img");
        spriteContainer.setAttribute("id", "pokemonSprite");
        spriteContainer.setAttribute("src", pokemonSpriteURL);
        app.appendChild(spriteContainer);
        const userInputBox = document.createElement("input");
        userInputBox.setAttribute("maxlength", 3);
        app.appendChild(userInputBox);
}


export {homeLoad}