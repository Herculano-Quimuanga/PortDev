const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});


const portfolio = document.querySelector('.portfolio-image');

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("arial-hidden", true);
    portfolio.appendChild(duplicateNode);
});

function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop, 
            behavior: 'smooth' // Animação suave
        });
    }
}