function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openFireCalculator() {
  window.open('./fire-calculator.html', '_blank', 'width=800,height=600');
}
