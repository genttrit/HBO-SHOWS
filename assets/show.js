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

//marrja e ID se SHOW edhe thirrja e kartes se show
const show_url = window.location.href;
const url_index = show_url.indexOf('?')+4;
const show_code = show_url.slice(url_index);
//console.log(show_url.slice(url_index+4)); 

getShowCard(show_code);

//https://api.tvmaze.com/lookup/shows?thetvdb=81189

//Selektimi i elementeve ne DOM
const show_img = document.querySelector('.show-img');
const show_title = document.querySelector('.show-title');
const show_genre = document.querySelector('.show-genre');
const show_lang = document.querySelector('.show-lang');
const show_year = document.querySelector('.show-year');
const show_summary = document.querySelector('.show-summary');
const wl_button = document.getElementById('wl_button');
const d_button = document.getElementById('d_button');
const ls_wl = {};

//Thirrja e API
async function getShowCard(code){
    const url = `https://api.tvmaze.com/lookup/shows?thetvdb=${code}`;
    const resp = await axios.get(url);
    
    // console.log(resp.data.externals.thetvdb);
    show_img.setAttribute('src',resp.data.image.medium);
    show_title.innerHTML = resp.data.name;
    show_genre.innerHTML = resp.data.genres;
    show_lang.innerHTML = resp.data.language;
    show_year.innerHTML = resp.data.premiered.slice(0,4);
    show_summary.innerHTML = resp.data.summary;
    const show_ID = resp.data.externals.thetvdb;
    //Alert
    wl_button.addEventListener('click',(e)=>{
        e.preventDefault();
        //Alert(`'${resp.data.name}' show is added to you watch list`);
        // console.log(resp.data);
        const ls_wl = localStorage.getItem('wl_array'); //resp.data
        //console.log(`55 here : ${ls_wl}`);

        let wl_array=[];
        if(ls_wl === null) { 
            console.log('Watchlist is empty')
            wl_array =[];
        }
        else{
            //wl_array merr komplet vlerat e mehershme qe jan ne local storage
            wl_array = JSON.parse(ls_wl);
        }

        const show_exists = wl_array.filter((e) => e.externals.thetvdb === show_ID);

        if(show_exists.length > 0) {
            Alert(`${resp.data.name}' show is already in your watch list`)

        }else {
            Alert(`'${resp.data.name}' show is added to you watch list`);
            console.log(`else i 77: ${wl_array}`)
            localStorage.setItem('wl_array',JSON.stringify([...wl_array, resp.data]));
        }



        })

    d_button.addEventListener('click',(e)=>{
        e.preventDefault();
        Alert(`The download of'${resp.data.name}' show has started. Enjoy!`);
    })
}


//Show results after pressing Enter or submit button
const button = document.querySelector('#searchButton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = input.value;
//   console.log(searchValue);
  localStorage.setItem('search_title',searchValue);
    const url = `index.html`;
    window.open(url,'SHOW')
});



//
// const form = document.querySelector('.submit');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log(input.value)
//     const search_title = input.value;

//     localStorage.setItem('search_title',search_title);
//     const url = `index.html`;
//     window.open(url,'SHOW')
// })

//



