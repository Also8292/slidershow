
//initialisation de l'index
var slideIndex = 1;

//afficher le premier slide
showSlides(slideIndex);

/**
 * défilement automatique des slides : periode = 2.5s
 */
window.setInterval(function() {
    slideFunction(-1);
}, 2500);


/**
 * cette fonction permet de passer directement au slide suivant ou précedant
 */
function slideFunction(n) {
    showSlides(slideIndex += n);
}


/**
 * touche gauche et droite du clavier
 */
function clavier(event) {
    if(event.keyCode == 37) {
        slideFunction(-1);
    }
    else if(event.keyCode == 39) {
        slideFunction(1);
    }
}


/**
 * fonction princile
 */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    
    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}