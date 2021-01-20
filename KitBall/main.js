'use strict';

// GROUPE BALL : On défini le propriété de notre balle dans un objet
let ball;

// On défini les propriété de notre jeu
let game;



// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {

    // On initialise notre jeu
    initGame();
    
    // On dessine notre jeu
    displayGame();

    // On lance notre jeu
    playGame();

});


/** TOUT LE MONDE : Initialisation du jeu 
 * 
*/
function initGame()
{
    // L'objet du DOM Canvas
  
    // On définie la largeur et hauteur de notre Canvas ici plutôt qu'en dur dans le HTML
   
    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
   
   
}


/* GROUPE BALL :
/** Initialisation de la position de plateau, de la balle et des directions*/
function initPositions()
{
    
    // position de la balle (sur le plateau)
   
    // Direction de la balle sur X et Y
   
}

/** On lance le jeu 
 * 
*/
function playGame() {

       
  
    /* GROUPE BALL : On modifie la position y de la balle si le jeu a commencé
    Sinon la balle reste accrochée au plateau */
   

    // On redessine notre jeu
    displayGame();

    // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
    game.animationId = requestAnimationFrame(playGame);
}

/** 
GROUPE BALL : Cette fonction va détecter les collisions */
function detectCollisions()
{

//QUELLES SONT LES COLLISIONS DE LA BALLE À GERER ?
  

}


/**
 Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte 
 * 
*/
function displayGame() {
    
   
   //GROUPE BALL :
    /** Dessin de la balle */
}


