const questions = document.querySelectorAll(".questions__question");
const questionTexts = document.querySelectorAll(".questions__question-text");
const questionTitles = document.querySelectorAll(".questions__question-title");
const rightButtons = document.querySelectorAll(".questions__question-button");
const leftButtons = document.querySelectorAll(".questions__question-button-left");

const closeItems = () => {
    questions.forEach((question, index) => {
        question.classList.remove("active");
        question.style.backgroundColor = "#DEE1E8";
        questionTitles[index].style.color = "#060606";
        questionTexts[index].classList.remove("active");
        rightButtons[index].style.display = "block"; // Показываем правую
        leftButtons[index].style.display = "none";  // Скрываем левую
    });
};

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        if (question.classList.contains("active")) {
            closeItems();
        } else {
            closeItems();
            question.classList.add("active");
            question.style.backgroundColor = "#6CA8EE";
            questionTitles[index].style.color = "#fff";
            questionTexts[index].classList.add("active");
            rightButtons[index].style.display = "none"; // Скрываем правую
            leftButtons[index].style.display = "block"; // Показываем левую
        }
    });
});