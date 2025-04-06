import {removeActiveCLass, handlingActiveLinks} from "./main.js";

function renderSwipers() {
    let swiperOne= new Swiper(".swiper-1", {
        speed: 800,
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: `.pagination-right-1`,
            prevEl: `.pagination-left-1`,
        },
        scrollbar: {
            el: '.swiper-scrollbar-1',
            draggable: true,
        },
        pagination: {
            el: `.pagination-1`,
            type: "bullets",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
    
    let swiperTwo = new Swiper(".swiper-2", {
        speed: 800,
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: `.pagination-right-2`,
            prevEl: `.pagination-left-2`,
        },
        scrollbar: {
            el: `.swiper-scrollbar-2`,
            draggable: true,
        },
        pagination: {
            el: `.pagination-2`,
            type: "bullets",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    let swiperThree = new Swiper(".swiper-3", {
        speed: 800,
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: `.pagination-right-3`,
            prevEl: `.pagination-left-3`,
        },
        pagination: {
            el: `.pagination-3`,
            type: "bullets",
        },
        scrollbar: {
            el: '.swiper-scrollbar-3',
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
    let swiperFour = new Swiper(".swiper-4", {
        speed: 800,
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: `.pagination-right-4`,
            prevEl: `.pagination-left-4`,
        },
        pagination: {
            el: `.pagination-4`,
            type: "bullets",
        },
        scrollbar: {
            el: '.swiper-scrollbar-4',
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
    let swiperFive = new Swiper(".swiper-5", {
        speed: 800,
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: `.pagination-right-5`,
            prevEl: `.pagination-left-5`,
        },
        pagination: {
            el: `.pagination-5`,
            type: "bullets",
        },
        scrollbar: {
            el: '.swiper-scrollbar-5',
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    let swiperMoviesLanding = new Swiper(".swiper-6", {
        speed: 800,
        spaceBetween: 200,
        slidesPerView: 1,
        loop: true,
        autoPlay : {
            delay: 5000
        },
        navigation: {
            nextEl: `.pagination-right-6`,
            prevEl: `.pagination-left-6`,
        },
        pagination: {
            el: `.pagination-6`,
            type: "bullets",
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
const apisArray = [
    fetch("http://localhost:8080/geners"),
    fetch("http://localhost:8080/top"),
    fetch("http://localhost:8080/trending"),
    fetch("http://localhost:8080/releases"),
    fetch("http://localhost:8080/must_watch"),
    fetch("http://localhost:8080/landingImages")
];
async function fetchingApis() {
    const apis = await Promise.all(apisArray);
    const apisBody = await Promise.all(apis.map((item) => item.json()));
    let [geners, tops, trendings, releases, must_watch, landingImages] = apisBody;
    displayTopMovies(tops); 
    displayTrendingMovies(trendings);
    displayReleasesMovies(releases);
    displayGenersInMovies(geners);
    displayMustWatchMovies(must_watch);
    displayLandingImages(landingImages);
    renderSwipers();
}
fetchingApis();
function displayGenersInMovies(movies) {
    let temp = ``;
    movies.map((movie) => {
    temp += `
    <div class="swiper-slide">
    <a href= "movies_categories.html?slug=${movie.slug}&category=${movie.category}">
    <div class="card">
            <div class="image">
                <img src="${movie.geners_image}" alt="">
            </div>
            <div class="info">
                <span>${movie.category}</span>
                <i class="fa-solid fa-arrow-right arrow"></i>
            </div>
        </div>
    </a>
    </div>
    `;
    });
    document.querySelector(".geners-swiper").innerHTML += temp;
}
function displayTopMovies(topMovies) {
    let temp = ``;
    topMovies.map((topMovie) => {
    temp += `<div class="swiper-slide">
    <a href= "top_movies.html?slug=${topMovie.slug}&category=${topMovie.category}">
            <div class="card">
                <div class="image">
                    <img src="${topMovie.top_image}" alt="">
                </div>
                <div class="info">
                    <div class="text">
                        <span>Top 10 in</span>
                        <span>${topMovie.category}</span>
                    </div>
                    <i class="fa-solid fa-arrow-right arrow"></i>
                </div>
            </div>
        </a>
            </div>`;
    });
    document.querySelector(".top-swiper").innerHTML += temp;
}
function displayTrendingMovies(trendingMovies) {
    let temp = ``;
    trendingMovies.map((trendingMovie) => {
        temp += `<div class="swiper-slide">
        <a href="./single_movie_geners.html?slug=${trendingMovie.slug}">
        <div class="card">
            <div class="image">
                <img src="${trendingMovie.trending_image}" alt="">
            </div>
                <div class="text">
                    <span>
                        <i class="fa-solid fa-clock"></i>
                        ${trendingMovie.duration}
                    </span>
                    <span>
                        <i class="fa-solid fa-eye"></i>
                        ${trendingMovie.views}
                    </span>
                </div>
        </div>
        </a>
        
        </div>`;
    })
    
    document.querySelector(".trending-swiper").innerHTML += temp;
    
}
function displayReleasesMovies(releasesMovies) {
    let temp = ``;
    releasesMovies.map((releaseMovie) => {
    temp += ` <div class="swiper-slide">
    <a href="../single_movie_geners.html?slug=${releaseMovie.slug}">
    <div class="card">
                <div class="image">
                    <img src="${releaseMovie.releases_image}" alt="">
                </div>
                    <div class="text">
                        <span>
                            Released at ${releaseMovie.date}
                        </span>
                    </div>
            </div>
    </a>
            
        </div>`;
    });
    document.querySelector(".releases-swiper").innerHTML += temp;
}
function displayMustWatchMovies(mustWatchMovies) {
    let temp = ``;
    let rating ;
    mustWatchMovies.map((mustWatchMovie) => {
    temp += `<div class="swiper-slide">
    <a href="single_movie_geners.html?slug=${mustWatchMovie.slug}">
    <div class="card">
                    <div class="image">
                        <img src="${mustWatchMovie.must_watch_image}" alt="">
                    </div>
                        <div class="text">
                            <span>
                                <i class="fa-solid fa-clock"></i>
                                ${mustWatchMovie.duration}
                            </span>
                            <div class="stars">
                            <div id ="stars-container"></div>
                                
                                <span>20K</span>
                            </div>
                        </div>
                </div>
    </a>
                
            </div>`;
            
    })
    
    document.querySelector(".must-swiper").innerHTML += temp;
    
}

function displayLandingImages(landingImages) {
    let temp = ``;
    landingImages.map((landingImage) => {
        temp += `<div class = "swiper-slide">
                    <img src="${landingImage.image}" alt="">
                    <div class="info">
                    <div class="text">
                        <h2>${landingImage.title}</h2>
                        <p>${landingImage.description}</p>
                    </div>
                    <div class="options">
                        <button class="play"><i class="fa-solid fa-play"></i>Play Now</button>
                        <div class="icons">
                            <i class="fa-solid fa-plus plus"></i>
                            <i class="fa-solid fa-thumbs-up"></i>
                            <i class="fa-solid fa-volume-high"></i>
                        </div>
                    </div></div>
                </div>`
    });
    document.querySelector(".landing-swiper").innerHTML += temp;
}
removeActiveCLass();
handlingActiveLinks();