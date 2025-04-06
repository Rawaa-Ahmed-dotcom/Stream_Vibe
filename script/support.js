import {removeActiveCLass, handlingQuestions, handlingActiveLinks} from "./main.js";
async function fetchingQuestions() {
    const data = await fetch(`http://localhost:8080/questions`);
    const questions = await data.json();
}
fetchingQuestions();
async function fetchPhoneCodeApi() {
    let data = await fetch(`https://rawaa-ahmed-dotcom.github.io/phoneCodeApi/phone-code.json`);
    let phoneCode = await data.json();
    displayPhoneCode(phoneCode);
    document.querySelector(".below-arrow").addEventListener("click",displayCountry);
    
}
fetchPhoneCodeApi();

function displayPhoneCode(phoneCode) {
    let temp = ``;
    phoneCode.map((code,index) =>  temp += `<li><img src="${code.image}" class="flag">${index == 0 ? `<i class="fa-solid fa-chevron-down below-arrow"></i>` : ``}</li>`);
    document.querySelector("#country").innerHTML += temp;
}

function displayCountry() {
    if(document.querySelector(".flags").classList.contains("active-flags")) {
        document.querySelector(".below-arrow").classList.remove("fa-chevron-up");
        document.querySelector(".below-arrow").classList.add("fa-chevron-down");
        document.querySelector(".flags").classList.remove("active-flags");
        document.querySelector("#country").classList.remove("active");
    }
    else if(!document.querySelector(".flags").classList.contains("active-flags")) {
        document.querySelector(".below-arrow").classList.remove("fa-chevron-down");
        document.querySelector(".below-arrow").classList.add("fa-chevron-up");
        document.querySelector(".flags").classList.add("active-flags");
        document.querySelector("#country").classList.add("active");
    }
}

removeActiveCLass();
handlingActiveLinks();
handlingQuestions();

