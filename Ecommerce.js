//click in Svg card and show card
let showCard = document.querySelector(".profile svg");
let card =document.querySelector(".card");
let cont = 2;
showCard.addEventListener("click", show);
function show () {
    if(cont % 2 == 0){
        card.style.display = "block";
    }else{
        card.style.display = "none";
    }
    cont++;
}
// click in menu in phone 
let menu = document.querySelector(".container svg");
let menuBare = document.querySelector(".navPh");
let closeMenu = document.querySelector(".navPh svg");
let blackP = document.querySelector(".contBlack");
console.log(menu);
menu.addEventListener("click",showmenu);
function showmenu () {
    menuBare.style.display = "block";
    blackP.style.display = "block";
}
closeMenu.addEventListener("click",closemenu);
function closemenu () {
    menuBare.style.display = "none";
    blackP.style.display = "none";
}
// Slide Images
let mainImg = document.querySelector(".pictrs img");
let slideimg = document.querySelectorAll(".slideImg img");
slideimg.forEach((el) => {
    el.addEventListener("click",removecls);
    el.addEventListener("click",changeImg);
});
function removecls() {
    slideimg.forEach((lo) => {
        lo.classList.remove("activeImg");
        this.classList.add("activeImg");
    })
}
function changeImg () {
    slideimg.forEach((le) => {
        switch(this.dataset.im){
            case "i1":
                mainImg.setAttribute("src","images/image-product-1.jpg");
                break;
            case "i2":
                mainImg.setAttribute("src","images/image-product-2.jpg");
                break;
            case "i3":
                mainImg.setAttribute("src","images/image-product-3.jpg");
                break;
            case "i4":
                mainImg.setAttribute("src","images/image-product-4.jpg");
                break;
            default:
                console.log("error");    
        }
    })
    
}
//Open Slide Imgs
let mainImg2 = document.querySelector(".pictrs .mainimg");
let slide2 = document.querySelector(".pictrs2");
let closeSlide2 = document.querySelector(".pictrs2 svg");
let slideimg2 = document.querySelectorAll(".slideImg2 img");
let mainimg22 = document.querySelector(".pictrs2 .mainimg2");
mainImg2.addEventListener("click",showImgS);
function showImgS () {
    if(window.innerWidth >= 750) {
        slide2.style.display = "block";
        blackP.style.display = "block";
    }
}
closeSlide2.addEventListener("click",closeslide);
function closeslide () {
    slide2.style.display = "none";
    blackP.style.display = "none";
}
//
slideimg2.forEach((ep) => {
    ep.addEventListener("click",removecls2);
    ep.addEventListener("click",changeImg2);
});
function removecls2() {
    slideimg2.forEach((lm) => {
        lm.classList.remove("activeImg");
        this.classList.add("activeImg");
    })
}
function changeImg2 () {
    slideimg2.forEach((lh) => {
        switch(this.dataset.im){
            case "i1":
                mainimg22.setAttribute("src","images/image-product-1.jpg");
                break;
            case "i2":
                mainimg22.setAttribute("src","images/image-product-2.jpg");
                break;
            case "i3":
                mainimg22.setAttribute("src","images/image-product-3.jpg");
                break;
            case "i4":
                mainimg22.setAttribute("src","images/image-product-4.jpg");
                break;
            default:
                console.log("error");    
        }
    })}
    //
let next = document.querySelector(".ss2");
let pre = document.querySelector(".ss1");
let imgactive = document.querySelector(".slideImg2 .activeImg");
console.log(imgactive.dataset.im[1]);
let imgArray = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
let imgArray2 = document.querySelectorAll(".slideImg2 img");
let i = 0;
next.addEventListener("click",nexx);
next.addEventListener("click",activeh);
pre.addEventListener("click",pree);
pre.addEventListener("click",activeh);
////
function activeh () {
    slideimg2.forEach((ls) => {
        ls.classList.remove("activeImg");
        imgArray2[i].classList.add("activeImg");
    })
}
function pree() {
    if(i <= 0) i=imgArray.length;
    i--;
    return setimg();
}
function nexx() {
    if(i >= imgArray.length - 1) i= -1;
    i++;
    return setimg();
}
function setimg () {
    return mainimg22.setAttribute("src",imgArray[i]);
}
////
/////////////////////////////////////////////
//Cont Product 
let p0 = document.querySelector(".content .p2");
let cmoin = document.querySelector(".buttons .s1");
let cplus = document.querySelector(".buttons .s2");
let njm = document.querySelector(".profile span");
let plus1 = 0;
p0.innerText = plus1;
njm.innerHTML = plus1;
cplus.addEventListener("click",addC);
function addC ()  {
    if(plus1 != 0) {
        njm.style.display = "block";
    }
        p0.innerText = eval(plus1++);
        njm.innerText = p0.innerText;
}
cmoin.addEventListener("click",moisC);
function moisC ()  {
    if(plus1 != 0) {
        njm.style.display = "block";
    }
    p0.innerText = eval(plus1--);
    njm.innerText = p0.innerText;
}
