import {Header} from './header.js'
import {Footer} from './footer.js'
// import {Search} from './search.js'

const header = document.getElementById('header');
header.innerHTML = Header();

const footer = document.getElementById('footer');
footer.innerHTML = Footer();

//show search results as we type
const input = document.getElementById('input');
input.addEventListener('input',()=>{
    console.log(input.value);
    getShow(input.value)
    // Search(input.value)
})

//Show results after pressing Enter or submit button
const form = document.querySelector('.submit');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(input.value)
    getShow(input.value)
    // Search(input.value)
})


//Search('home');

function getShowCard() {
    return `
    <div class="card mx-2 mb-3 col-sm-2">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">xx</h5>
        <p class="card-text">Downloaded: yy times</p>
        <a href="" class="details btn btn-sm btn-outline-secondary">Details</a>
    </div>  
    </div>`;
}



const content = document.getElementById('card');
for(let i=0; i<10; i++){
    content.innerHTML += getShowCard();
}

getShow('home');

async function getShow(title){
    const url = `https://api.tvmaze.com/search/shows?q=${title}`;
    const resp = await axios.get(url);
    console.log(resp.data)
    const card_img = document.getElementsByClassName('card-img-top');
    const card_title = document.getElementsByClassName('card-title');
    const card_genres = document.getElementsByClassName('card-text');
    const card_details = document.getElementsByClassName('details'); 


    for(let i=0; i<resp.data.length; i++){
        card_title[i].innerHTML = resp.data[i].show.name;
        card_img[i].src = resp.data[i].show.image.medium;
        card_genres[i].innerHTML = `${resp.data[i].show.genres.toString()} <strong>${resp.data[i].show.premiered.slice(0,4)}</strong>`;
        card_details[i].addEventListener('click', ()=>{
            const card_id = resp.data[i].show.externals.thetvdb;
            const url = `show.html?id=${card_id}`;
            window.open(url,'SHOW')
        })
    }
}
