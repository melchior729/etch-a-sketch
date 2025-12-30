
function randomRGB(length) {
    const BASE = 16;
    const letter = Math.floor(Math.random() * BASE).toString(BASE);
    if (length == 1) {
        return letter;
    }

    return letter + randomRGB(length - 1);
}

function drawGrid(sideLength) {
    const container = document.querySelector('.container');
    container.innerHTML = "";
    container.style.maxWidth = 108 * sideLength + "px";
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const item = document.createElement('div');
            item.addEventListener('mouseover', () => {
                const backgroundColor = item.style.backgroundColor;
                const rgb = randomRGB(6);
                if (!backgroundColor) {
                    item.style.backgroundColor = "#" + rgb;
                    item.style.filter = 'brightness(100%)';
                } else {
                    const brightness = Number(item.style.filter.replace(/\D/g, ''));
                    item.style.filter = `brightness(${brightness - 10}%)`
                }
            });
            item.classList.add('item');
            container.appendChild(item);
        }
    }
}

const button = document.querySelector('.side-length-button');
button.addEventListener("click", () => {
    try {
        const sideLength = Number(prompt("Enter the number of sides."));
        if (sideLength <= 100 && sideLength >= 1) {
            drawGrid(sideLength);
        }
    } catch (error) {
        alert('Invalid number of sides! Try again!');
    }
});

const defaultSize = 16;
drawGrid(defaultSize);
