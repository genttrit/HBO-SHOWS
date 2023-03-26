export function wlContent(){

    return `
    <div class="row card-body wl_card align-items-center justify-content-center space-between">
        <div class="col-2">
            <img class='wl_img' src="./assets/img/show-img.jfif">
        </div>
        <div class="col-6">
            <h5 class="card-title wl_title"></h5>
            <h6 class="card-title wl_genre">Comedy</h6>
            <h6 class="card-title wl_year">2023</h6>
        </div>
        <div class="col-2">
            <button class="btn btn-outline-dark wl_details">Details</button>
            <br>
            <br>
            <button class="btn btn-outline-danger wl_remove">Remove</button>
        </div>
    </div>
    `

}
