document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
    // Array con los nombres de las imágenes de los dados
    var diceImages = [
        "dado1.png",
        "dado2.png",
        "dado3.png",
        "dado4.png",
        "dado5.png",
        "dado6.png"
    ];

    // Obtener un número aleatorio entre 0 y 5
    var randomIndex = Math.floor(Math.random() * diceImages.length);

    // Mostrar la imagen del dado correspondiente
    var diceImage = document.getElementById("diceImg");
    diceImage.src = "img/" + diceImages[randomIndex];

    // Mostrar el número obtenido
    var resultText = document.getElementById("resultText");
    resultText.textContent = "Has obtenido el número " + (randomIndex + 1) + ".";
}
