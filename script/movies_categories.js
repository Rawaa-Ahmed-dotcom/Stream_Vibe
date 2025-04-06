const movieSlug = new URLSearchParams(location.search).get("slug");
async function fetchGenersApi() {
    let genersMovies = await fetch(`http://localhost:8080/geners?slug=${movieSlug}`);
    let genersMoviesBody = await genersMovies.json();
    console.log(genersMoviesBody[0]);
    displayNavigation(genersMoviesBody[0]);
    generateMoviesCards(genersMoviesBody[0].movies);
}
function displayNavigation(genersObject) {
    let temp = ``;
        temp += `<a href = "movies.html">${genersObject.name}</a>
        <span>&gt;</span>
        <a href = "movies_categories.html?slug=${genersObject.slug}&category=${genersObject.category}">${genersObject.category}</a>`;
    document.querySelector(".navigation .container .links").innerHTML += temp;
}
function generateMoviesCards (movies_cards) {
    let temp = ``;
    movies_cards.map((movies_card) => {
        temp += `<div class="single_movie">
        <div class="single_movie_image">
            <img src="${movies_card.poster}" alt="">
        </div>
        <a class="single_movie_name" href="single_movie_geners.html?slug=${movies_card.slug}">${movies_card.title}</a>
        <div class="single_movie_info">
            <span class="single_movie_year">${movies_card.year}</span>
            <span class="single_movie_rate">${movies_card.rating}</span>
        </div>
        <div class="single_movie_tags">
            ${generateMovieTags(movies_card.genre)}
        </div>
    </div>`;
    })
    document.querySelector(".movie_category_branch_content").innerHTML += temp;
}
function generateMovieTags(tags) {
    let temp = ``;
    tags.map((tag) => {
        temp += `<span class="single_movie_tag">${tag}</span>`;
    }).join(" ");
    return temp;
}

fetchGenersApi();