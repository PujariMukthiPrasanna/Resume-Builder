const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});


const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const cards = document.querySelectorAll('.card');

let currentCardIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
    if (i === index) {
        card.classList.add('active');
    } else {
        card.classList.remove('active');
    }
    });
}

prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
    currentCardIndex--;
    showCard(currentCardIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCardIndex < cards.length - 1) {
    currentCardIndex++;
    showCard(currentCardIndex);
    }
});
