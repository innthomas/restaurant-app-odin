import home from './home';
import contact from './contact';
import menu from './menu';

const container = document.getElementById('content');
const header = document.createElement('header');

const nav = document.createElement('nav');
const homeDiv = document.createElement('button');
homeDiv.setAttribute('class', 'homeNav');
const menuDiv = document.createElement('button');
menuDiv.setAttribute('class', 'menuNav');
const contactDiv = document.createElement('button');
const mainElement = document.createElement('main');
contactDiv.setAttribute('class', 'contactNav');

nav.appendChild(homeDiv);
nav.appendChild(menuDiv);
nav.appendChild(contactDiv);
header.appendChild(nav)
container.appendChild(header);

container.appendChild(mainElement);

homeDiv.innerHTML = 'home';
menuDiv.innerHTML = 'menu';
contactDiv.innerHTML = 'contact';

homeDiv.addEventListener('click',home);
menuDiv.addEventListener('click',menu);
contactDiv.addEventListener('click',contact);