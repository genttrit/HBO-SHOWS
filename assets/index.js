import {Header} from './header.js';
import {Footer} from './footer.js';
//ALERT
import {Alert} from './Alert.js';  

const header = document.getElementById('header');
header.innerHTML = Header();

const footer = document.getElementById('footer');
footer.innerHTML = Footer();

//Search prej faqes show.html kur bohet
// if(localStorage.getItem('search_title') != null){
//     let src_title = localStorage.getItem('search_title');
//     getShow(src_title);
//     localStorage.removeItem('search_title');
// } else {
//     getShow('home');
// }

//Show results as we type
const input = document.getElementById('input');
// input.addEventListener('input',()=>{
//     console.log(input.value);
//     //getShow(input.value);
// })



//Show results after pressing Enter or submit button
const button = document.querySelector('#searchButton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const searchValue = input.value;
  console.log(searchValue);
  getShow(input.value);
});

//show search results as we type
// const input = document.getElementById('input');
// // input.addEventListener('input',()=>{
// //     console.log(input.value);
// //     getShow(input.value)
// // })

function getShowCard() {
    return `
    <div class="card mx-2 mb-3 col-sm-2">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <a href="#" class="details btn btn-sm btn-outline-secondary">Details</a>
        <a href="#" class="watch-later btn btn-sm btn-outline-dark">Watch later</a>
    </div>  
    </div>`;
}

const content = document.getElementById('card');

for(let i=0; i<10; i++){ //resp.data.length
    content.innerHTML += getShowCard();
}

getShow('home');


async function getShow(title){
    const url = `https://api.tvmaze.com/search/shows?q=${title}`;
    const resp = await axios.get(url);
    console.log(resp.data)
    
    //localStorage.removeItem('search_title');
    // content.innerHTML ='';
    
    const card_img = document.getElementsByClassName('card-img-top');
    const card_title = document.getElementsByClassName('card-title');
    const card_genres = document.getElementsByClassName('card-text');
    const card_details = document.getElementsByClassName('details');
    const card_watchLater = document.getElementsByClassName('watch-later');


    for(let i=0; i<10; i++){ //resp.data.length
        card_title[i].innerHTML = resp.data[i].show.name;
        
        card_img[i].src = resp.data[i].show.image.medium;
        
        card_genres[i].innerHTML = `${resp.data[i].show.genres.toString()} <strong>${resp.data[i].show.premiered.slice(0,4)}</strong>`;
        
        card_details[i].addEventListener('click', ()=>{
            const card_id = resp.data[i].show.externals.thetvdb;
            const url = `show.html?id=${card_id}`;
            window.open(url,'SHOW')
        })

        card_watchLater[i].addEventListener('click',(e)=>{
            e.preventDefault();
            Alert(`'${resp.data[i].show.name}' show is added to you watch list`)
        })
        
    }
}
