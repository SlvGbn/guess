const words = [
    "маяк",
    "завод",
    "берег"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const elIndex = getRandomInt(words.length);
const answerIndex = getRandomInt(words[elIndex].length);
const word = words[elIndex];

console.log(
    word, 
    word[answerIndex], 
    answerIndex
);


window.addEventListener("load", () => {
    const contEl = document.querySelector("#container");

    word.split("").forEach((v) => {
        console.log(v);
        const button = document.createElement("button");
        button.textContent = v;
        contEl.appendChild(button);
    });


    
    
})