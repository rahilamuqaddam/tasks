console.log("Loaded new script");

document.querySelector('.cta').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
  // Fade-in animation on scroll
const elements = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('fade-in');
    }
  });
});
// Typing effect
const text = " Front-End Developer";
let i = 0;
const typingElement = document.querySelector(".typing");



function type() {
  if (!typingElement) return; 

  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      i = 0;
      type();
    }, 500); 
  }
}

window.addEventListener("load", type);


// Scroll to projects
function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// Scroll reveal
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const isVisible = cardTop < window.innerHeight - 100;
    if (isVisible) {
      card.classList.add('show');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const contactData = {
        firstName: document.getElementById("firstName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
      };

      let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      contacts.push(contactData);
      localStorage.setItem("contacts", JSON.stringify(contacts));

      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    });
  } else {
    console.error("contactForm not found!");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector('.cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', function (event) {
      event.preventDefault(); 
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
  } else {
    console.error("Element with class 'cta' not found!");
  }
});




