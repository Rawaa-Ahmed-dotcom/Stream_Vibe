// Adding links to menu-bar and navBar
let menuLinksArray = [
    {
        href : "index.html",
        title: "Home",
    },
    {
        href : "movies.html",
        title: "Movies&Shows",
    },
    {
        href : "support.html",
        title: "Support",
    },
    {
        href : "subscription.html",
        title: "Subscription",
    },

];
// setting links in localStorage
function savingLinksInLS() {
    let temp = ``;
menuLinksArray.forEach((link) => {
    temp += `<a href="${link.href}">${link.title}</a>`;
});
localStorage.setItem("links", temp);
document.querySelector("header .links").innerHTML += localStorage.getItem("links");
document.querySelector(".menu-side-bar").innerHTML += localStorage.getItem("links");
}
savingLinksInLS();



// global function for removing active class
function removeActiveCLass(linksArray, className) {
    linksArray.forEach((link) => {
        link.classList.remove(className);
    })
}


// activating links on navBar on clicking
let linkNavBar = document.querySelectorAll(".links a");
linkNavBar.forEach((link) => {
    link.addEventListener("click",() => {
        removeActiveCLass(linkNavBar,"active");
        localStorage.setItem("activeLink",link.getAttribute("href"));
    })
})


// opening and Closing menuSideBar
let menuSideBar = document.querySelector(".menu-side-bar");
let iconMobile = document.querySelector(".icon-mobile");
let menuSideBarLinks =  document.querySelectorAll(".menu-side-bar a");

iconMobile.addEventListener("click", () => {
    menuSideBar.classList.toggle("active-menu");
});

// activating links on sideBar on clicking
menuSideBarLinks.forEach((link) => {
    link.addEventListener("click", () => {
        removeActiveCLass(menuSideBarLinks, "active-link-menu");
        localStorage.setItem("activeLink", link.getAttribute("href"));
    })
})

// rendreing active link while loading or clicking on any link(navbar, sidebar)
function renderActiveLink() {
    linkNavBar.forEach((link) => {
        if(link.getAttribute("href") == localStorage.getItem("activeLink")) {
            link.classList.add("active");
        }
    })
    menuSideBarLinks.forEach((link) => {
        if(link.getAttribute("href") == localStorage.getItem("activeLink")) {
            link.classList.add("active-link-menu");
        }
    })
}

renderActiveLink();


// Swiper 
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

let swiperSix= new Swiper(".swiper-6", {
    speed: 800,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: `.pagination-right-6`,
        prevEl: `.pagination-left-6`,
    },
    pagination: {
        el: `.pagination-6`,
        type: "bullets",
    },
    scrollbar: {
        el: '.swiper-scrollbar-6',
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
let swiperSeven = new Swiper(".swiper-7", {
    speed: 800,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: `.pagination-right-7`,
        prevEl: `.pagination-left-7`,
    },
    pagination: {
        el: `.pagination-7`,
        type: "bullets",
    },
    scrollbar: {
        el: '.swiper-scrollbar-7',
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
let swiperEight = new Swiper(".swiper-8", {
    speed: 800,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: `.pagination-right-8`,
        prevEl: `.pagination-left-8`,
    },
    pagination: {
        el: `.pagination-8`,
        type: "bullets",
    },
    scrollbar: {
        el: '.swiper-scrollbar-8',
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
let swiperNine = new Swiper(".swiper-9", {
    speed: 800,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: `.pagination-right-9`,
        prevEl: `.pagination-left-9`,
    },
    scrollbar: {
        el: '.swiper-scrollbar-9',
        draggable: true,
    },
    pagination: {
        el: `.pagination-9`,
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
let swiperTen = new Swiper(".swiper-10", {
    speed: 800,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: `.pagination-right-10`,
        prevEl: `.pagination-left-10`,
    },
    scrollbar: {
        el: '.swiper-scrollbar-10',
        draggable: true,
    },
    pagination: {
        el: `.pagination-10`,
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
let swiperEleven = new Swiper(".swiper-11", {
    speed: 800,
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: `.pagination-right-11`,
        prevEl: `.pagination-left-11`,
    },
    breakpoints: {
        0: {
            slidesPerView: "auto",
            spaceBetween: 15,
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

// Start FAQS
let faqRow = document.querySelectorAll(".questions .row");

faqRow.forEach((row) => {
    row.onclick = function() {
        row.classList.toggle("faq-active");
        if(row.querySelector(".faq-icon i").classList.contains("fa-plus")) {
            row.querySelector(".faq-icon i").classList.remove("fa-plus");
            row.querySelector(".faq-icon i").classList.add("fa-minus");
        }
        else if(row.querySelector(".faq-icon i").classList.contains("fa-minus")) {
            row.querySelector(".faq-icon i").classList.remove("fa-minus");
            row.querySelector(".faq-icon i").classList.add("fa-plus");
        }
}});

// End FAQS
// Start Plans
let plansContent = document.querySelector(".plans-content");
let plansBtns = document.querySelectorAll(".plans-header .btn button");
// Monthly plans cards
let monthlyPlans = [
    {
        title : "Basic Plan",
        description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price : 9.99,
        type : "month",
        freeTrialBtn : "Start Free Trial",
        choosePlanBtn : "Choose Plan"
    },
    {
        title : "Basic Plan",
        description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price : 9.99,
        type : "month",
        freeTrialBtn : "Start Free Trial",
        choosePlanBtn : "Choose Plan"
    },
    {
        title : "Basic Plan",
        description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price : 9.99,
        type : "month",
        freeTrialBtn : "Start Free Trial",
        choosePlanBtn : "Choose Plan"
    },

];

// Yearly plans cards
let YearlyPlans = [
    {
        title : "Basic Plan",
        description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price : 9.99,
        type : "Year",
        freeTrialBtn : "Start Free Trial",
        choosePlanBtn : "Choose Plan"
    },
    {
        title : "Basic Plan",
        description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price : 9.99,
        type : "Year",
        freeTrialBtn : "Start Free Trial",
        choosePlanBtn : "Choose Plan"
    },
    {
        title : "Basic Plan",
        description : "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price : 9.99,
        type : "Year",
        freeTrialBtn : "Start Free Trial",
        choosePlanBtn : "Choose Plan"
    },

];


// function for generating Monthly plans 
function generatingMonthlyPlans() {
    monthlyPlans.forEach((plan) => {
        let temp = ``;
        temp += `<div class="box">
                <div class="info">
                    <h3>${plan.title}</h3>
                    <p>${plan.description}</p>
                </div>
                <h2 class="price">$${plan.price}<span>/${plan.type}</span></h2>
                <div class="options">
                    <button>${plan.freeTrialBtn}</button>
                    <button>${plan.choosePlanBtn}</button>
                </div>
            </div>`;
        plansContent.innerHTML += temp;
        
    })  
}
// function for generatinf Yearly Plans
function generatinYearlyPlans() {
    YearlyPlans.forEach((plan) => {
        let temp = ``;
        temp += `<div class="box">
                <div class="info">
                    <h3>${plan.title}</h3>
                    <p>${plan.description}</p>
                </div>
                <h2 class="price">$${plan.price}<span>/${plan.type}</span></h2>
                <div class="options">
                    <button>${plan.freeTrialBtn}</button>
                    <button>${plan.choosePlanBtn}</button>
                </div>
            </div>`;
        plansContent.innerHTML += temp;
        
    })  
} 
plansBtns.forEach((btn) => {
    btn.onclick = function() {
        removeActiveCLass(plansBtns,"active");
        btn.classList.add("active");
        
        localStorage.setItem("activeBtn", btn.dataset.slug);
        plansContent.innerHTML = ``;
        if(localStorage.getItem("activeBtn") == "monthly") {
            generatingMonthlyPlans();
        }
        else if(localStorage.getItem("activeBtn") == "yearly") {
            generatinYearlyPlans();
        }
    }
})
function renderPlans() {
    plansBtns.forEach((btn) => {
        if(localStorage.getItem("activeBtn") === "monthly" && localStorage.getItem("activeBtn") == btn.innerHTML.toLowerCase()) {
            removeActiveCLass(plansBtns,"active");
            btn.classList.add("active");
            plansContent.innerHTML = ``;
            generatingMonthlyPlans();
        }
        else if(localStorage.getItem("activeBtn") === "yearly" && localStorage.getItem("activeBtn") == btn.innerHTML.toLowerCase()) {
            removeActiveCLass(plansBtns,"active");
            btn.classList.add("active");
            plansContent.innerHTML = ``;
            generatinYearlyPlans();
        }
    })
    
}
renderPlans();

// End Plans 
function displayMoviesInHome(movies) {
    let temp = ``;
    movies.map((movie) => {
        temp += `<div class="swiper-slide box">
        <div class="image">
            <img src="${movie.gallary}" alt="">
        </div>
        <div class="info">
            <h3>${movie.title}</h3>
            <i class="fa-solid fa-arrow-right arrow"></i>
        </div>
    </div>
    `;
    })
    
    
        document.querySelector(".categories .swiper-wrapper").innerHTML += temp;
        
        
}

function displayMoviesInMovies(movies) {
    let temp = ``;
    movies.map((movie) => {
    temp += `
    <div class="swiper-slide">
    <div class="card">
            <div class="image">
                <img src="${movie.gallary}" alt="">
            </div>
            <div class="info">
                <span>${movie.title}</span>
                <i class="fa-solid fa-arrow-right arrow"></i>
            </div>
        </div>
    </div>
    `;
    });
    console.log(document.querySelector(".geners-swiper"));
    // document.querySelector(".geners-swiper").innerHTML += temp;
}


// // adding movies on movies&shows page 

// displaing movies in home page
async function getMoviesInHome() {
    try {
        let data = await fetch("http://localhost:8080/movies");
        let movies = await data.json();
        localStorage.setItem("geners",JSON.stringify(movies));
        displayMoviesInHome(JSON.parse(localStorage.getItem("geners")));
        displayMoviesInMovies(JSON.parse(localStorage.getItem("geners")));
    }
    catch(error) {
        console.log(error);
    }
    
}
getMoviesInHome();


