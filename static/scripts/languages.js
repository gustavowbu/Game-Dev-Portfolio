const languages = {
    "pt": [
        "Prazer! Eu me chamo Gustavo Timbó.",
        "Desenvolvedor de Jogos",
        "Programador",
        "Estudante",
        "Sou um estudante de <span>Ciência da Computação</span> na Universidade Estadual do Ceará (UECE).",
        "Tenho <span>1 ano de experiência</span> em desenvolvimento de jogos.",
        "E posso desenvolver jogos com mecânicas <span>responsivas e otimizadas</span>.",
        "Jogos em Destaque",
    ],
    "en": [
        "Nice to meet you! I'm Gustavo Timbó.",
        "Game Developer",
        "Programmer",
        "Student",
        "I'm a <span>Computer Science</span> student in the State University of Ceará (UECE).",
        "I have <span>1 year of experience</span> in game development.",
        "And I can develop games with <span>responsive and optimized</span> mechanics.",
        "Game Highlights",
    ]
}

// Functions

function updateLanguage() {
    for (let i = 0; i < language.length; i++) {
        try {
            let element = document.querySelector(".l" + i);
            element.innerHTML = language[i];
        } catch (error) { }
    }
    updateJobTitle();
}

function updateJobTitle() {
    const jobTitle1 = document.querySelector("#job-title-1");
    const jobTitle2 = document.querySelector("#job-title-2");
    const jobTitle3 = document.querySelector("#job-title-3");

    // Portuguese Example:
    // 
    // jobTitle1.innerHTML = "Desenvolvedor de Jogos | Programador | Estudante";
    // jobTitle2.innerHTML = "";
    // jobTitle3.innerHTML = "";
    // if (screen.width < 1070) {
    //     jobTitle1.innerHTML = "Desenvolvedor de Jogos";
    //     jobTitle2.innerHTML = "Programador | Estudante";
    // }
    // if (screen.width <= 403) {
    //     jobTitle2.innerHTML = "Programador";
    //     jobTitle3.innerHTML = "Estudante";
    // }

    jobTitle1.innerHTML = language[1] + " | " + language[2] + " | " + language[3];
    jobTitle2.innerHTML = "";
    jobTitle3.innerHTML = "";
    if (screen.width < 1070) {
        jobTitle1.innerHTML = language[1];
        jobTitle2.innerHTML = language[2] + " | " + language[3];
    }
    // if (screen.width <= 403) {
    //     jobTitle2.innerHTML = language[2];
    //     jobTitle3.innerHTML = language[3];
    // }
}

// Get current language
let currentLanguage = navigator.language;
if (!(Object.keys(languages).includes(currentLanguage))) {
    currentLanguage = "en";
}
let language = languages[currentLanguage];
updateLanguage();

// Bind language switch action to buttons
const languageButtons = document.querySelectorAll(".language");
languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentLanguage = button.dataset.language;
        language = languages[currentLanguage];
        updateLanguage();
    })
})
