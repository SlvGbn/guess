const words = [
    "маяк",
    "завод",
    "берег"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const elIndex = getRandomInt(words.length);
const word = words[elIndex];
const answerIndex = getRandomInt(word.length);
let tryCount = 3;

console.log(
    word, 
    word[answerIndex], 
    answerIndex
);
function createRepeatButton() {
    const aEl = document.createElement("a");
    aEl.href = "javascript:window.location.reload(true)";
    aEl.textContent = "Начать заного";
    return aEl;
}

function handleTryDecrease() {
    if (tryCount == 0) {
        const infoEl = document.querySelector("#info");

        const messageEl = document.createElement("h2");
        messageEl.textContent = "Попытки исчерпаны!";
        infoEl.appendChild(messageEl);

        const answerEl = document.createElement("h2");
        answerEl.textContent = "Правильная ответ: \"" + word[answerIndex] + "\" по счету " + (answerIndex + 1);
        infoEl.appendChild(answerEl);

        infoEl.appendChild(createRepeatButton());
    }
}

function handleWin() {
    console.log("verno");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.style.backgroundColor = "blue";
    })

    const infoEl = document.querySelector("#info");

    const messageEl = document.createElement("h2");
    messageEl.textContent = "Вы угадали!";
    infoEl.appendChild(messageEl);

    infoEl.appendChild(createRepeatButton());
}

function handleClick(button, buttonIndex) {
    console.log("sad");
    if (buttonIndex == answerIndex) {
        handleWin();
    }
    else {
        button.style.backgroundColor = "red";
        tryCount--;
        setTimeout(() => { 
            button.style.backgroundColor = "beige";
        }, 2000); 
        handleTryDecrease();
    }
}

window.addEventListener("load", () => {
    const contEl = document.querySelector("#container");

    word.split("").forEach((v, i) => {
        const button = document.createElement("button");
        button.textContent = v;
        button.addEventListener("click", () => {
            handleClick(button, i);
        })
        contEl.appendChild(button);
    });
})