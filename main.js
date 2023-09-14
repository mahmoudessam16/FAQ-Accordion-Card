let questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', function () {
        this.firstElementChild.firstElementChild.style.cssText = 'color: hsl(237, 12%, 33%); font-weight: 700';
        this.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';
        this.lastElementChild.classList.toggle('active');
        for (let i = 0; i < questions.length; i++) {
            if (!questions[i].lastElementChild.classList.contains('active')) {
                questions[i].firstElementChild.firstElementChild.style.cssText = 'color: hsl(240, 6%, 50%); font-weight: 400';
                questions[i].firstElementChild.lastElementChild.style.transform = 'rotate(0deg)';
            }
        }
    });
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".image img").src = "./images/illustration-woman-online-mobile.svg"
    } else {
        document.querySelector(".image img").src = "./images/illustration-woman-online-desktop.svg"
    }
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes