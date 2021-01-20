'use strict';



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


function playGame() {

    // On redessine notre jeu
    displayGame();

    // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
    game.animationId = requestAnimationFrame(playGame);
}

/**
 Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte 
 * 
*/
function displayGame() {
    
    //GROUPE DISPLAY :
    // On vide le Canvas avant de redessiner
   /** Fond de la zone de jeu */

}


/** GROUPE DISPLAY : Fonction qui affiche le gameOver */
function displayGameOver()
{


   // EXEMPLE : On définie la police de caractère
    //On mesure la largeur du texte pour le centrer sur X
    // On ecrit Game Over
    
}


/** GROUPE DISPLAY : Fonction qui affiche le gameOver */
function displayWin() {
 
}



