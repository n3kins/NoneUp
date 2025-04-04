const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('toggle');
  });
});

const sections = document.querySelectorAll('section');
sections.forEach((sec, i) => {
  sec.classList.add(i % 2 === 0 ? 'left' : 'right');
});

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) {
      sec.classList.add('reveal');
    }
  });
}

function revealTyping() {
  const paragraphs = document.querySelectorAll('.typing p');
  const triggerBottom = window.innerHeight * 0.85;

  paragraphs.forEach((p) => {
    const top = p.getBoundingClientRect().top;
    if (top < triggerBottom && !p.classList.contains('typed')) {
      p.classList.add('typed');
      typeText(p);
    }
  });
}

function typeText(element) {
  const text = element.textContent;
  element.textContent = '';  // Очистка тексту, щоб ми могли друкувати його по одному символу
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);  // Додаємо один символ за раз
      i++;
      setTimeout(typeChar, 40);  // Швидкість друку
    }
  }

  typeChar();
}

window.addEventListener('scroll', () => {
  revealSections();
  revealTyping();
});
window.addEventListener('load', () => {
  revealSections();
  revealTyping();
});

// Показувати кнопку при скролі
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Скролити нагору при кліку
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
