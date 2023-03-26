import {Header} from './header.js'
import {Footer} from './footer.js'
import {wlContent} from './wl-content.js'
import {Alert} from './Alert.js'

const header = document.getElementById('header');
header.innerHTML = Header();

const footer = document.getElementById('footer');
footer.innerHTML = Footer();


const content = document.getElementById('wl_container');

wlFunction();

function wlFunction() {
const wl_array = JSON.parse(localStorage.getItem('wl_array'));
// console.log(wl_array);

wl_array.forEach(e => {
    content.innerHTML += wlContent();
    // console.log(e);
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
    wl_remove[i].setAttribute('data-id',wl_array[i].externals.thetvdb);
    wl_details[i].addEventListener('click', ()=>{
        const card_id = wl_array[i].externals.thetvdb;
        const url = `show.html?id=${card_id}`;
        window.open(url,'SHOW')
    })
    wl_remove[i].addEventListener('click',(e)=>{
        let wl_id = e.target.getAttribute('data-id');
        console.log(`Remoev button vas clicked:   ${wl_id}`);
        let index=0; 
        wl_array.filter((elem) => { 
            if(elem.externals.thetvdb == wl_id){
                console.log(`index :  ${index}`);
                wl_array.splice(index, 1);
                localStorage.setItem('wl_array',JSON.stringify(wl_array));
                location.reload();
            }else{
                index++;
            }

            // console.log(`Bolean result:  ${elem.externals.thetvdb}`);
            // console.log(`id prej filterit 2: ${elem.externals.thetvdb}`);}
        ;
        })
    })
}
}

//when we search it redicts us to main page and makes a search
const button = document.querySelector('#searchButton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = input.value;
  console.log(searchValue);
  localStorage.setItem('search_title',searchValue);
    const url = `index.html`;
    window.open(url,'SHOW')
});