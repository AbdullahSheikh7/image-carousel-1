let slide = 0;

let click = true;

let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");

let slides = Array.from(document.getElementsByClassName("images")[0].children);

const editSlides = () => {
    slides.forEach((e) => {
        e.style.left = "0";
        e.style.display = "none";
    });

    if (slide <= 0) {
        slides[slides.length - 1].style.display = "";
        slides[slides.length - 1].style.left = "-100%";

        slides[slide].style.display = "";
        slides[slide].style.left = "0";

        slides[slide + 1].style.display = "";
        slides[slide + 1].style.left = "100%";
    } else if (slide >= (slides.length - 1)) {
        slides[slide - 1].style.display = "";
        slides[slide - 1].style.left = "-100%";
        
        slides[slide].style.display = "";
        slides[slide].style.left = "0";
        
        slides[0].style.display = "";
        slides[0].style.left = "100%";
    } else {
        slides[slide - 1].style.display = "";
        slides[slide - 1].style.left = "-100%";
        
        slides[slide].style.display = "";
        slides[slide].style.left = "0";

        slides[slide + 1].style.display = "";
        slides[slide + 1].style.left = "100%";
    }
}

btnLeft.addEventListener("click", (e) => {
    if (click == true) {
        slide -= 1;
        if (slide < 0) {
            slide = slides.length - 1;
        }
        slides[0].parentElement.style.transition = "left 500ms ease-in-out";
        slides[0].parentElement.style.left = "100%";
        setTimeout(() => {
            slides[0].parentElement.style.transition = "";
            slides[0].parentElement.style.left = "0";
            editSlides();
            click = true;
        }, 500);
    }
    click = false;
});

btnRight.addEventListener("click", (e) => {
    if (click == true) {
        slide += 1;
        if (slide > (slides.length - 1)) {
            slide = 0;
        }
        slides[0].parentElement.style.transition = "left 500ms ease-in-out";
        slides[0].parentElement.style.left = "-100%";
        setTimeout(() => {
            slides[0].parentElement.style.transition = "";
            slides[0].parentElement.style.left = "0";
            editSlides();
            click = true;
        }, 500);
    }
    click = false;
});

editSlides();
