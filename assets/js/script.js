const addEventOnElem=function(elem,type,callback){
    if(elem.length>1){
        for(let i=0 ;i<elem.length; i++){
            elem[i].addEventListener(type,callback);
        }

    }
    else{
        elem.addEventListener(type,callback)
    }
}

const navTogglers=document.querySelectorAll("[data-nav-toggle]")
const navbar=document.querySelector("[data-navbar]")
const navbarLinks=document.querySelectorAll("[ data-nav-link]")
const overlay=document.querySelector("[data-overlay]")

const toggleNavbar=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}
addEventOnElem(navTogglers,'click',toggleNavbar);


const closeNavbar=function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}
addEventOnElem(navbarLinks,'click',closeNavbar);



const header=document.querySelector("[data-header]")
const backToTop=document.querySelector("[data-back-top-btn]")
const backToTop1=document.querySelector("[data-back-top-btn1]")

const headerActive=function(){
    if(window.scrollY>150){
        header.classList.add("active")
        backToTop.classList.add("active")
        backToTop1.classList.add("active")


    }else{
        header.classList.remove("active")
        backToTop.classList.remove("active")
        backToTop1.classList.remove("active")


    }
}
addEventOnElem(window , "scroll", headerActive);

let LastPositionScroll=0;
const headerCollant=function(){
    if(LastPositionScroll >= window.scrollY){
        header.classList.remove('header-hide')
    }else{
        header.classList.add('header-hide')

    }
    LastPositionScroll=window.scrollY;
}
addEventOnElem(window,"scroll",headerCollant)



/* effect de revelemnt lors du defilement */

const sections= document.querySelectorAll("[data-section]");
const scrollRelevement= function(){
    for (let i=0; i< sections.length;i++){
        if(sections[i].getBoundingClientRect().top < window.innerHeight/2){
            sections[i].classList.add("active")
        }
    }
}
scrollRelevement();
addEventOnElem(window, "scroll", scrollRelevement)


/*Contact*/

document.getElementById("rendezVousForm").addEventListener("submit",function(event){
    event.preventDefault();
    alert("Prise de rendez-vous confirmée !")
})
