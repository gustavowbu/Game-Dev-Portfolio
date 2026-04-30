pathHasStatic = true;
saveThemeToLocalStorage = true;

// Functions
function openPopup() {
    overlay.classList.remove("hidden");
    popup.classList.remove("hidden");

    const imageWidth = popupImage.getBoundingClientRect().width;
    if (imageWidth > screen.width * 4.0 / 5.0) {
        popupImage.style.width = "80vw";
        popupImage.style.height = "fit-content";
    }
}

function closePopup() {
    overlay.classList.add("hidden");
    popup.classList.add("hidden");

    popupImage.style.width = "fit-content";
    popupImage.style.height = "80vh";
}

// Popup
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image")

overlay.addEventListener("click", () => {
    closePopup();
});

// Clickable images
const imageBoxes = document.querySelectorAll(".game-image-box");

imageBoxes.forEach(imageBox => {
    imageBox.addEventListener("click", () => {
        const image = imageBox.querySelector("img");
        popupImage.src = image.src;
        openPopup();
    })
});

// Hovering over arrows
const arrows = document.querySelectorAll(".arrow");
const albums = document.querySelectorAll(".game-album");
let mouseOvers = [];
let i = 0;
arrows.forEach(arrow => {
    function applyEffectWhenHovering (index) {
        if (screen.width > 768) {
            arrow.addEventListener("mouseover", () => {
                if (index % 2 == 0) {
                    arrow.style.left = "calc(7.5vw + 20px)";
                } else {
                    arrow.style.right = "calc(7.5vw + 20px)";
                }
            });
            arrow.addEventListener("mouseleave", () => {
                if (index % 2 == 0) {
                    arrow.style.left = "calc(7.5vw + 10px)";
                } else {
                    arrow.style.right = "calc(7.5vw + 10px)";
                }
            });
        }

        arrow.addEventListener("click", () => {
            const album = albums[Math.floor(index / 2)];
            if (index % 2 == 0) {
                album.scrollBy({
                    left: -266,
                    behavior: "smooth"
                });
            } else {
                album.scrollBy({
                    left: 266,
                    behavior: "smooth"
                });
            }
        });
    }
    applyEffectWhenHovering(i);
    i++;
    mouseOvers.push(false);
});

// Binding keys
document.addEventListener('keydown', function(event) {
    // console.log(`Key pressed: ${event.key}`);
    // console.log(`Key code: ${event.keyCode}`);

    if (event.key == "Escape") {
        closePopup();
    }
});
