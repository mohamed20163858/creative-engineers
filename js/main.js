const menu1 = document.querySelector('.home .landing-page img');
const menu2 = document.querySelector('.about .contact-us img');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const footer = document.querySelector('footer');
const ul = document.createElement('ul');
let flag = '';
ul.classList.add('menu-decoration', 'hidden');
ul.innerHTML = `
<img src="images/Close.png" alt="close-icon">
<li><a href="#home-page">Home</a></li>
<li><a href="#about-page">About</a></li>
<li><a href="#home-page">Program</a></li>
<li><a href="#home-page">Sponsors</a></li>
<li><a href="#home-page">News</a></li>
<li><a href="#home-page">Campaign</a></li>
`;
document.body.appendChild(ul);
function addMenu() {
  ul.classList.remove('hidden');
  home.classList.add('hidden');
  about.classList.add('hidden');
  footer.classList.add('hidden');
}
function removeMenu() {
  ul.classList.add('hidden');
  if (this.textContent.toLowerCase() === 'about') {
    about.classList.remove('hidden');
    flag = 'about';
  } else if (this.textContent.toLowerCase() === '') {
    if (flag === 'about') {
      about.classList.remove('hidden');
    } else {
      home.classList.remove('hidden');
    }
  } else {
    home.classList.remove('hidden');
    flag = 'not about';
  }
  footer.classList.remove('hidden');
}

function menuAction() {
  addMenu();
  const closeTab = document.querySelector('.menu-decoration img');
  const listItems = document.querySelectorAll('.menu-decoration li');
  for (let i = 0; i < listItems.length; i += 1) {
    const li = listItems[i];
    const itemName = li.textContent.toLowerCase();
    if (itemName === 'about') {
      li.addEventListener('click', removeMenu);
    } else {
      li.addEventListener('click', removeMenu);
    }
  }
  closeTab.addEventListener('click', removeMenu);
}
menu1.addEventListener('click', menuAction);
menu2.addEventListener('click', menuAction);
