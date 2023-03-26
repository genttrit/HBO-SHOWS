import {Header} from './header.js'
import {Footer} from './footer.js'
import {wlContent} from './wl-content.js'
import {Alert} from './Alert.js'

const header = document.getElementById('header');
header.innerHTML = Header();

const footer = document.getElementById('footer');
footer.innerHTML = Footer();


const content = document.getElementById('wl_container');

content.innerHTML = wlContent();
content.innerHTML += wlContent();
content.innerHTML += wlContent();

// const content = document.querySelector('.container');

// // content.innerHTML = "HELLO";
// // content.innerHTML = ShowContent();