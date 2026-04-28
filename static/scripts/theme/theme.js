const themeButton = document.querySelector(".theme-button");
const html = document.querySelector("html");

let themeButtonPath = "assets/theme/sun.png";
let saveThemeToLocalStorage = false;
let pathHasStatic = false;
let funcs = [];

function toggleTheme() {
    let theme = getTheme();
    
    if (theme === "light") {
        theme = "dark";
        html.dataset.theme = "dark";
        themeButtonPath = "assets/theme/moon.png";
    } else {
        theme = "light";
        html.dataset.theme = "light";
        themeButtonPath = "assets/theme/sun.png";
    }
    if (pathHasStatic) {
        themeButtonPath = "static/" + themeButtonPath;
    }
    themeButton.src = themeButtonPath;
    
    localStorage.removeItem("theme");
    if (saveThemeToLocalStorage) {
        localStorage.setItem("theme", theme);
    }

    funcs.forEach(func => {
        func(theme);
    })
}

function getTheme() {
    return html.dataset.theme;
}

function addFunctionToTheme(func) {
    funcs.push(func);
}

function toggleSaveThemeToLocalStorage() {
    if (saveThemeToLocalStorage) {
        saveThemeToLocalStorage = false;
        localStorage.removeItem("theme");
    } else {
        saveThemeToLocalStorage = true;
        localStorage.setItem("theme", getTheme());
    }
}

function toggleThemePathHasStatic() {
    if (pathHasStatic) {
        pathHasStatic = false;
        themeButtonPath = themeButtonPath.slice(7, themeButtonPath.length);
    } else {
        pathHasStatic = true;
        themeButtonPath = "static/" + themeButtonPath;
    }
    themeButton.src = themeButtonPath;
}

if (localStorage.getItem("theme") === "dark") {
    setTimeout(() => {
        toggleTheme();
    }, 1);
}

themeButton.addEventListener("click", () => {
    toggleTheme();
})
