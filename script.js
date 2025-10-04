const answers = {
    q1: "Г", q2: "А", q3: "A", q4: "А", q5: "А",
    q6: "Б", q7: "А", q8: "Б", q9: "Д", q10: "Г",
    q11: "Г", q12: "Б", q13: "Б", q14: "Б", q15: "А",
    q16: "А", q17: "В", q18: "В", q19: "В", q20: "Б"
};

const questions = document.querySelectorAll('.question');
let current = 0;
questions[current].style.display = 'block';
questions.forEach(q => {
    const options = q.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.addEventListener('change', () => {
            options.forEach(o => o.parentNode.classList.remove('correct', 'wrong'));
            if (option.value === answers[option.name]) {
                option.parentNode.classList.add('correct');
            } else {
                option.parentNode.classList.add('wrong');
            }
        });
    });
});

function nextQuestion() {
    const selected = questions[current].querySelector('input[type="radio"]:checked');
    if (!selected) { alert("Хариултаа сонгоно уу!"); return; }
    questions[current].style.display = 'none';
    current++;
    if (current < questions.length) {
        questions[current].style.display = 'block';
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    let score = 0;
    questions.forEach(q => {
        const selected = q.querySelector('input[type="radio"]:checked');
        if (selected && selected.value === answers[selected.name]) {
            score++;
        }
    });
    document.getElementById('result').innerText = `✅ Таны оноо: ${score} / ${questions.length}`;
}
