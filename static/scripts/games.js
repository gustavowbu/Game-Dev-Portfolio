const games = [
    {
        "name": "Where's my horse?",
        "id": "wheres-my-horse",
        "descriptions": {
            "pt": ["Game Maker Studio 2", "Feito em 72 horas para a Mini Jam 206"],
            "en": ["Game Maker Studio 2", "Made in 72 hours for Mini Jam 206"]
        }
    }
]

const gameDescriptionElements = document.querySelectorAll(".game-description");
languageUpdateActions.push(() => {
    for (let game = 0; game < games.length; game++) {
        const gameDescriptionElement = gameDescriptionElements[game];
        const gameDescriptionItems = gameDescriptionElement.querySelectorAll(".game-description-item");
        const gameDescriptions = games[game].descriptions[currentLanguage];
        for (let item = 0; item < gameDescriptions.length; item++) {
            const description = gameDescriptions[item];
            gameDescriptionItems[item].querySelector("p").innerHTML = description;
        }
    }
})
