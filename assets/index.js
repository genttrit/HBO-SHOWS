import {Header} from './header.js'
import {SearchPreview} from './searchpreview.js'

// const x = document.getElementById('header');
// x.innerHTML = Header();

const input = document.getElementById('input');
input.addEventListener('input',()=>{
    console.log(input.value);
    getShow(input.value)
})

getShow('home')

function getShowCard() {
    return `
    <div class="card mx-2 mb-3 col-sm-2">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">xx</h5>
        <p class="card-text">Downloaded: yy times</p>
        <a href="view-book.html?id=$zz class="btn btn-sm btn-outline-secondary">Details</a>
    </div>  
    </div>`;
}


const content = document.getElementById('card');


// for(let i=0; i<10; i++){
//     content.innerHTML += getShowCard();
// }







async function getShow(title){
    const url = `https://api.tvmaze.com/search/shows?q=${title}`;
    const resp = await axios.get(url);
    console.log(resp.data)
    for(let i=0; i<10; i++){
        content.innerHTML += getShowCard();
    }
    const card_img = document.getElementsByClassName('card-img-top');
    const card_title = document.getElementsByClassName('card-title');
    const card_genres = document.getElementsByClassName('card-text');
    for(let i=0; i<resp.data.length; i++){
        card_title[i].innerHTML = resp.data[i].show.name;
        card_img[i].src = resp.data[i].show.image.medium;
        card_genres[i].innerHTML = `${resp.data[i].show.genres.toString()} <strong>${resp.data[i].show.premiered.slice(0,4)}</strong>`;
    }


    // console.log(resp)
    // card_title.innerHTML = resp.data[0].show.name;
    // card_img.src = resp.data[0].show.image.medium;
    // card_genres.innerHTML = `${resp.data[0].show.genres.toString()} ${resp.data[0].show.premiered.slice(0,4)}`;
    //console.log(resp.data[0].show)
}
