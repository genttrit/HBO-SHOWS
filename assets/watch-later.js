import {Header} from './header.js'
import {Footer} from './footer.js'
import {wlContent} from './wl-content.js'
import {Alert} from './Alert.js'

const header = document.getElementById('header');
header.innerHTML = Header();

const footer = document.getElementById('footer');
footer.innerHTML = Footer();


const content = document.getElementById('wl_container');

const wl_array = JSON.parse(localStorage.getItem('wl_array'));
console.log(wl_array);

wl_array.forEach(e => {
    content.innerHTML += wlContent();
    console.log(e);
});

const wl_img = document.getElementsByClassName('wl_img');
const wl_title = document.getElementsByClassName('wl_title');
const wl_genre = document.getElementsByClassName('wl_genre');
const wl_year = document.getElementsByClassName('wl_year');
const wl_details = document.getElementsByClassName('wl_details');
const wl_remove = document.getElementsByClassName('wl_remove');

for(let i=0; i<wl_array.length; i++){
    wl_img[i].setAttribute('src',wl_array[i].image.medium)
    wl_title[i].innerHTML = wl_array[i].name;
    wl_genre[i].innerHTML = wl_array[i].genres;
    wl_year[i].innerHTML = wl_array[i].premiered.slice(0,4);
    wl_details[i].addEventListener('click', ()=>{
        const card_id = wl_array[i].externals.thetvdb;
        const url = `show.html?id=${card_id}`;
        window.open(url,'SHOW')
    })
}

// const content = document.querySelector('.container');

// // content.innerHTML = "HELLO";
// // content.innerHTML = ShowContent();

const button = document.querySelector('#searchButton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = input.value;
  console.log(searchValue);
  localStorage.setItem('search_title',searchValue);
    const url = `index.html`;
    window.open(url,'SHOW')
});