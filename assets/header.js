export function Header() {
    return `
    <nav class="navbar navbar-expand-lg bg-light navbar-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="./index.html">
                <img src="./assets/img/logo.png" alt="" class="logo">
                SHOWS
                </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="./wl.html">Watch later</a>
                        </li>
                    </ul>
                    <form class="d-flex ml-auto m-1 submit" role="search">
                      <input id="input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success search" id='searchButton' type="submit">Search</button>
                    </form>
                </div>
            </div>
          </nav>
    `;
}