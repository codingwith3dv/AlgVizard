var slideIndex = 1;
showSlides(1)

function gotoNextPage(id) {
    document.getElementById(id).click();
}

function pushSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}

function gotoPage(id) {
    document.getElementById(id).click();
}

function mainscrollToBottom() {
    /*var scrollDiv = document.getElementById("about").offsetHeight;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });*/
    window.scrollTo(0,document.querySelector("#about").scrollHeight);
}