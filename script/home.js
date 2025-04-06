import {removeActiveCLass, handlingActiveLinks, handlingPlans, handlingQuestions} from "./main.js";
async function fetchingGeners() {
    const data = await fetch("http://localhost:8080/geners");
    const geners = await data.json();
    displayMoviesInHome(geners);
    renderSwiper();
}
function displayMoviesInHome(movies) {
    let temp = ``;
    movies.map((movie) => {
        temp += `<div class="swiper-slide box">
        <a href="movies_categories.html?slug=${movie.slug}&category=${movie.category}">
        <div class="image">
            <img src="${movie.geners_image}" alt="">
        </div>
        <div class="info">
            <h3>${movie.category}</h3>
            <i class="fa-solid fa-arrow-right arrow"></i>
        </div>
        </a>
    </div>
    `;
    })
        document.querySelector(".categories .swiper-wrapper").innerHTML += temp;
}
fetchingGeners();
function renderSwiper() {
    let swiperZero = new Swiper(".swiper-0", {
        speed: 800,
        spaceBetween: 20,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: `.pagination-right-0`,
            prevEl: `.pagination-left-0`,
        },
        pagination: {
            el: `.pagination-0`,
            type: "bullets",
        },
        scrollbar: {
            el: '.swiper-scrollbar-0',
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
    
}
removeActiveCLass();
handlingActiveLinks();
handlingPlans();
handlingQuestions();
