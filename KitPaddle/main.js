'use strict';

// On défini les propriété de notre jeu
let game = {
    canvas : null,
    ctx : null
}

// GROUPE Paddle : On défini le propriété de notre raquette dans un objet
let paddle = {
    x : 340,
    y : 650,
    width : 120,
    height : 10,
    left : 30,
    right : 30
}



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
    game.canvas = document.querySelector('#canvas')
    // On définie la largeur et hauteur de notre Canvas ici plutôt qu'en dur dans le HTML
    game.canvas.width = 800;
    game.canvas.height = 700;
    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    game.ctx = game.canvas.getContext('2d')

}

/** Initialisation de la position de plateau, de la balle et des directions*/
function initPositions()
{
    // position du plateau
   
}

/** On lance le jeu 
 * 
*/
function playGame() {

    //GROUPE PADDLE :  on modifie la position du plateau en fonction de sa direction et on le repositionne si il sort de la zone
    game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height)
       
    // On redessine notre jeu
    displayGame();

    // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
    game.animationId = requestAnimationFrame(playGame);
}

/** 
Cette fonction va détecter les collisions */
function detectCollisions()
{
    /**CENTRE RED**/
   if(ball.y == paddle.y && ball.x >= paddle.x && ball.x <= paddle.x +paddle.width ){
       alert('plateau touche')
    y = y-5;
   }
   
   // Si la balle touche le plateau elle rebondit
}

/**
 Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte 
 * 
*/
function displayGame() {

//GROUPE PADDLE :
    /** Dessin du plateau */
   
   game.ctx.fillStyle = 'red'
   game.ctx.fillRect(paddle.x,paddle.y,paddle.width,paddle.height)
   game.ctx.strokeStyle = 'green'
   game.ctx.strokeRect(paddle.x ,paddle.y,paddle.left,paddle.height)
   game.ctx.strokeStyle = 'purple'
   game.ctx.strokeRect(paddle.x+paddle.left +60,paddle.y, paddle.right ,paddle.height)
}


/** GROUPE PADDLE : Gestionnaire des évènement du clavier
 * @param {event} e l'évènement keydown
 * 
 * 
 */
   
function keyboardEvent(e)
{
  switch(e.which){  /** event.which **/
          
    case 37:
        
        paddle.x = paddle.x -12
        if(paddle.x <= 0){ 
        paddle.x = 0;
        }
           
        break;
    
    case 39:
        paddle.x = paddle.x +12;
        if(paddle.x >game.canvas.width-paddle.width){
        paddle.x=game.canvas.width-paddle.width
            }
        break;
  }
    console.log(paddle.x)
 
}
    
document.addEventListener("keydown",keyboardEvent);