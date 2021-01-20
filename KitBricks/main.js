'use strict';

// GROUPE BRICKS : On défini nos briques
let bricks;

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

/** On lance le jeu 
 * 
*/
function playGame() {

  
    // On redessine notre jeu
    displayGame();

    // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
    game.animationId = requestAnimationFrame(playGame);
}



/** GROUPE BRICKS :
 On va dessiner nos briques */

function displayBricks()
{
   
    // On affiche toutes les briques qui n'ont pas leur collision à 0 (qui ne sont pas cassées)
}
   

/** Cette fonction va détecter les collisions */
function detectCollisions()
{

    // On détecte si la balle touche une brique
 

}

