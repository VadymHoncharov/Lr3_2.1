let pattern = [];
const correctPattern = ["1", "5", "9", "8"]; // Очікувана послідовність

document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
        const id = dot.dataset.id;
        if (!pattern.includes(id)) {
            pattern.push(id);
            dot.classList.add("selected");
        }
    });
});

function checkPattern() {
    const message = document.getElementById("message");
    
    if (JSON.stringify(pattern) === JSON.stringify(correctPattern)) {
        message.style.color = "green";
        message.textContent = "Ключ вірний! Вітаємо!";
    } else {
        message.style.color = "red";
        message.textContent = "Невірний ключ. Спробуйте ще.";
    }

    // Очистити
    pattern = [];
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("selected"));
}
