import {Header} from './header.js'
import {Footer} from './footer.js'
import {ShowContent} from './showContent.js'
import {Alert} from './Alert.js'

const header = document.getElementById('header');
header.innerHTML = Header();

const content = document.getElementsByClassName('showContent')[0];
content.innerHTML = ShowContent();

const footer = document.getElementById('footer');
footer.innerHTML = Footer();



const show_url = window.location.href;
const url_index = show_url.indexOf('?')+4;
const show_code = show_url.slice(url_index);
//console.log(show_url.slice(url_index+4)); 

getShowCard(show_code);

//https://api.tvmaze.com/lookup/shows?thetvdb=81189

const show_img = document.querySelector('.show-img');
const show_title = document.querySelector('.show-title');
const show_genre = document.querySelector('.show-genre');
const show_lang = document.querySelector('.show-lang');
const show_year = document.querySelector('.show-year');
const show_summary = document.querySelector('.show-summary');
const wl_button = document.getElementById('wl_button');
const d_button = document.getElementById('d_button');


async function getShowCard(code){
    const url = `https://api.tvmaze.com/lookup/shows?thetvdb=${code}`;
    const resp = await axios.get(url);
    console.log(resp.data);

    show_img.setAttribute('src',resp.data.image.medium);
    show_title.innerHTML = resp.data.name;
    show_genre.innerHTML = resp.data.genres;
    show_lang.innerHTML = resp.data.language;
    show_year.innerHTML = resp.data.premiered.slice(0,4);
    show_summary.innerHTML = resp.data.summary;

    //Alert
    wl_button.addEventListener('click',(e)=>{
        e.preventDefault();
        Alert(`'${resp.data.name}' show is added to you watch list`);
    })
    d_button.addEventListener('click',(e)=>{
        e.preventDefault();
        Alert(`The download of'${resp.data.name}' show has started. Enjoy!`);
    })
}



// const input = document.getElementById('input');
// input.addEventListener('input',()=>{
//     content.innerHTML = '';
//     console.log(input.value);
//     Search(input.value)
// })

//Show results after pressing Enter or submit button
const form = document.querySelector('.submit');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(input.value)
    const search_title = input.value;

    localStorage.setItem('search_title',search_title);
    const url = `index.html`;
    window.open(url,'SHOW')
})





