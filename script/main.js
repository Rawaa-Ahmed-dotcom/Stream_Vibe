
// Adding links to menu-bar and navBar
export function removeActiveCLass(linksArray, className) {
    linksArray.forEach((link) => {
        link.classList.remove(className);
    })
}
//handling links in menu-bar and navbar


export function handlingActiveLinks() {
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
}
handlingActiveLinks();



//handling plans 
export function handlingPlans() {
    let plansContent = document.querySelector(".plans-content");
    let plansBtns = document.querySelectorAll(".plans-header .btn button");
    const plans = [
        fetch("http://localhost:8080/monthlyPlans"),
        fetch("http://localhost:8080/yearlyPlans")
    ]
    async function fetchPlans() {
        const data = await Promise.all(plans);
        const result  = await Promise.all(data.map((item) => item.json()));
        let [monthlyPlans, yearlyPlans] = result;
        clickonBtnsPlans(monthlyPlans, yearlyPlans);
        renderPlans(monthlyPlans, yearlyPlans);
    }
    function clickonBtnsPlans(monthlyPlans, yearlyPlans) {
        plansBtns.forEach((btn) => {
            btn.onclick = function() {
                removeActiveCLass(plansBtns,"active");
                btn.classList.add("active");
                
                localStorage.setItem("activeBtn", btn.dataset.slug);
                plansContent.innerHTML = ``;
                if(localStorage.getItem("activeBtn") == "monthly") {
                    generatingMonthlyPlans(monthlyPlans);
                }
                else if(localStorage.getItem("activeBtn") == "yearly") {
                    generatingYearlyPlans(yearlyPlans);
                }
            }
        })
    }
    
    function renderPlans(monthlyPlans, yearlyPlans) {
        if(localStorage.getItem("activeBtn")  ) {
            removeActiveCLass(plansBtns,"active");
            if(localStorage.getItem("activeBtn") == "monthly") {
                document.querySelector(`.plans-header .btn button[data-slug="monthly"]`).classList.add("active");
                plansContent.innerHTML = ``;
                generatingMonthlyPlans(monthlyPlans);
            }
            else if(localStorage.getItem("activeBtn") == "yearly") {
                document.querySelector(`.plans-header .btn button[data-slug="yearly"]`).classList.add("active");
                plansContent.innerHTML = ``;
                generatingYearlyPlans(yearlyPlans);
            }
        }
        else if( ! localStorage.getItem("activeBtn")) {
            removeActiveCLass(plansBtns,"active");
            document.querySelector(`.plans-header .btn button[data-slug="monthly"]`).classList.add("active");
            plansContent.innerHTML = ``;
            generatingMonthlyPlans(monthlyPlans);
        }
    }
    function generatingMonthlyPlans(monthlyPlans) {
        let temp = ``;
        monthlyPlans.map((plan) => {
            temp += `<div class="box">
                    <div class="info">
                        <h3>${plan.type}</h3>
                        <p>${plan.discription}</p>
                    </div>
                    <h2 class="price">${plan.price}<span>/${plan.duration}</span></h2>
                    <div class="options">
                        <button>Start Free Trial</button>
                        <button>Choose Plan</button>
                    </div>
                </div>`;
                
            })  
            plansContent.innerHTML += temp;
    } 
    function generatingYearlyPlans(yearlyPlans) {
        let temp = ``;
        yearlyPlans.map((plan) => {
            temp += `<div class="box">
                    <div class="info">
                        <h3>${plan.type}</h3>
                        <p>${plan.discription}</p>
                    </div>
                    <h2 class="price">${plan.price}<span>/${plan.duration}</span></h2>
                    <div class="options">
                        <button>Start Free Trial</button>
                        <button>Choose Plan</button>
                    </div>
                </div>`;
                
            }); 
            plansContent.innerHTML += temp;
    } 
    
    
    fetchPlans();
}
handlingPlans();


// function for  handlingQuestions
export function handlingQuestions() {
    async function fetchquestions() {
        const data = await fetch("http://localhost:8080/questions");
        const result  = await data.json();
        displayQuestions(result);
        clickonFaq();
    }
    fetchquestions();
    
    
    function displayQuestions(faqs) {
        let temp = ``;
        faqs.map((faq) => {
        temp += `<div class="row">
                    <div class="text">
                        <h3>${faq.question}</h3>
                        <div class="para">
                            <p>${faq.answer}</p>
                        </div>  
                    </div>
                    <div class="icon faq-icon">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>`;
        });
        document.querySelector(".questions .container .rows").innerHTML += temp;
    }
    function clickonFaq() {
        let faqRow = document.querySelectorAll(".questions .container .rows .row");
    
    
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
    }
    
}


handlingQuestions();
