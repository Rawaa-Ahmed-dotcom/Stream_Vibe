const singleMovieSlug = new URLSearchParams(location.search).get("slug");
async function fetchGenersSingleMovieApi() {
    let genersMovies = await fetch(`http://localhost:8080/movies?slug=${singleMovieSlug}`);
    let genersMoviesBody = await genersMovies.json();
    console.log(genersMoviesBody[0]);
    displaySingleMovie(genersMoviesBody[0]);
}
fetchGenersSingleMovieApi();
function displaySingleMovie(movie) {
    displayLandingImageSingleMovie(movie);
    displayLongInfoSingleMovie(movie);
    displayShortInfoSingleMovie(movie);
    loadingSwipers();
}
function displayLandingImageSingleMovie(movie) {
    let temp = ``;
    temp += `<img src="${movie.poster}" alt="">
                    <div class="info">
                    <div class="text">
                        <h2>${movie.title}</h2>
                        <p>${movie.description}</p>
                    </div>
                    <div class="options">
                        <button class="play"><i class="fa-solid fa-play"></i>Play Now</button>
                        <div class="icons">
                            <i class="fa-solid fa-plus plus"></i>
                            <i class="fa-solid fa-thumbs-up"></i>
                            <i class="fa-solid fa-volume-high"></i>
                        </div>
                    </div>
                    </div>`;
    document.querySelector(".landing .content").innerHTML += temp;
}
function displayLongInfoSingleMovie(movie) {
    let temp = ``;
    temp += `
                    <div class="description">
                        <div class="header">
                            <h3>Description</h3>
                        </div>
                        <p>${movie.description}</p>
                    </div>
                    <div class="cast">
                        <div class="header">
                            <h3 class="text">Cast</h3>
                            <div class="icons-swiper cast-section-icons">
                                <i class="fa-solid fa-arrow-left arrow pagination-left-11"></i>
                                <i class="fa-solid fa-arrow-right arrow pagination-right-11"></i>
                            </div>
                        </div>
                        <div class="content swiper swiper-11">
                            <div class="swiper-wrapper">
                            ${movie.cast.map((actor) => {
                                return `<div class="swiper-slide">
                                    <div class="image">
                                        <img src="${actor}" alt="">
                                    </div>
                                </div>`;
                            }).join(" ")}
                            </div>
                        </div>
                    </div>
                    <div class="reviews">
                        <div class="header">
                            <h3 class="text">Reviews</h3>
                            <button class="add-review">
                                <i class="fa-solid fa-plus"></i>
                                Add Your Review
                            </button>
                        </div>
                        <div class="content swiper swiper-7">
                        <div class="swiper-wrapper reviews-swiper">
                        ${movie.reviews.map((review) => {
                            return `<div class="swiper-slide">
                            <div class="card">
                                <div class="heading">
                                    <div class="text">
                                        <h2>${review.name}</h2>
                                        <span>${review.location}</span>
                                    </div>
                                    <div class="stars">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/half-star.png" alt="">
                                        <span>4.5</span>
                                    </div>
                                </div>
                                <p class="content">
                                    ${review.comment}
                                </p>
                            </div>
                            </div>`;
                        })}
                        </div>
                        </div>
                        <div class="review-icons">
                            <i class="fa-solid fa-arrow-left arrow pagination-left-7"></i>
                            <div class="pagination-7">
                                <span class="minus"></span>
                                <span class="minus"></span>
                                <span class="minus"></span>
                                <span class="minus"></span>
                            </div>
                            <i class="fa-solid fa-arrow-right arrow pagination-right-7"></i>
                        </div>
                    </div>
                `;
                document.querySelector(".movie-info .long-info").innerHTML += temp;
}
function displayShortInfoSingleMovie(movie) {
    let temp = ``;
    temp += `<div class="released-year">
                        <div class="header">
                            <h3><i class="fa-solid fa-calendar"></i>Released Year</h3>
                        </div>
                        <h2>${movie.year}</h2>
                    </div>
                    <div class="langs">
                        <div class="header">
                            <h3>
                                <i class="fa-solid fa-language"></i>
                                Available Languages
                            </h3>
                        </div>
                        <div class="content">
                        ${movie.languages.map((lang) => `<span>${lang}</span>`)}
                        </div>
                    </div>
                    <div class="ratings">
                        <div class="header">
                            <h3>
                                <i class="fa-regular fa-star"></i>
                                Ratings
                            </h3>
                        </div>
                        <div class="content">
                            <div class="card">
                                <div class="heading">
                                    <h2>IMDb</h2>
                                </div>
                                <div class="stars">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/half-star.png" alt="">
                                        <span>4.5</span>
                                </div>
                            </div>
                            <div class="card">
                                <div class="heading">
                                    <h2>Streamvibe</h2>
                                </div>
                                <div class="stars">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/full-star.png" alt="">
                                        <img src="./images/empty-star.png" alt="">
                                        <span>4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="geners">
                        <div class="header">
                            <h3>
                                <i><img src="./images/geners.png" alt=""></i>
                                Geners
                            </h3>
                        </div>
                        <div class="content">
                        ${movie.genre.map((genre) => `<span>${genre}</span>`)}
                        </div>
                    </div>
                    <div class="director">
                        <div class="header">
                            <h3>
                                Director
                            </h3>
                        </div>
                        <div class="content">
                            <img src="${movie.director.image}" alt="">
                            <div class="info">
                                <h3>${movie.director.name}</h3>
                                <span>${movie.director.location}</span>
                            </div>
                        </div>
                    </div>
                    <div class="director">
                        <div class="header">
                            <h3>
                                Music
                            </h3>
                        </div>
                        <div class="content">
                            <img src="${movie.music.image}" alt="">
                            <div class="info">
                                <h3>${movie.music.name}</h3>
                                <span>${movie.music.location}</span>
                            </div>
                        </div>
                    </div>`;
                    document.querySelector(".movie-info .short-info").innerHTML += temp;
}

function loadingSwipers() {
    let swiperMovieReviews = new Swiper(".swiper-7", {
        speed: 800,
        spaceBetween: 40,
        slidesPerView: 2,
        loop: true,
        // autoplay : {
        //     delay: 1000
        // },
        navigation: {
            nextEl: `.pagination-right-7`,
            prevEl: `.pagination-left-7`,
        },
        pagination : {
            el : '.pagination-7',
            type : 'bullets'
        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            600: {
                slidesPerView: "auto",
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
        },
    });
    
    let swiperMovieCast = new Swiper(".swiper-11", {
        speed: 800,
        spaceBetween: 40,
        slidesPerView: 5,
        loop: true,
        autoplay : {
            delay: 5000
        },
        navigation: {
            nextEl: `.pagination-right-11`,
            prevEl: `.pagination-left-11`,
        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            600: {
                slidesPerView: "auto",
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
        },
    });
}
