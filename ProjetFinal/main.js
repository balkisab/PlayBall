'use strict';

// GROUPE BALL : On défini le propriété de notre balle dans un objet
let ball = {
    radius: 10,
    color: "blue",
    x: 40,
    y: 20,
    dx: 1,
    dy: 1,
}

let paddle = {
    x: 340,
    y: 650,
    width: 120,
    height: 10,
}

let bwidth;
let bheight;
let brickx;
let bricky;
// GROUPE BRICKS : On défini nos briques
let bricks = [
    { NbCollision: 1, couleur: "black" },
    { NbCollision: 1, couleur: "blue" },
    { NbCollision: 1, couleur: "yellow" },
    { NbCollision: 2, couleur: "blue" },
    { NbCollision: 1, couleur: "black" }
];

// On défini les propriété de notre jeu
let game = {
    victory : false,
    gameover: false,
    width: 800,
    height: 700,
    ctx: null,
    canvas: null
}



// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function() {


    document.addEventListener("keydown", keyboardEvent);
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
function initGame() {
    // L'objet du DOM Canvas
    game.canvas = document.getElementById('canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    game.ctx = game.canvas.getContext('2d');

    // On définie la largeur et hauteur de notre Canvas ici plutôt qu'en dur dans le HTML
    game.canvas.width = game.width
    game.canvas.height = game.height
    game.canvas.style.border = "1px solid red"






}


/* GROUPE BALL :
/** Initialisation de la position de plateau, de la balle et des directions*/
function initPositions() {

    // position de la balle (sur le plateau)

    // Direction de la balle sur X et Y
    ball.x = game.width / 2
    ball.y = game.height / 2
}

/** On lance le jeu 
 * 
 */
function playGame() {
    console.log("play");


    /* GROUPE BALL : On modifie la position y de la balle si le jeu a commencé
    Sinon la balle reste accrochée au plateau */
    ball.y += 4 * ball.dy
    ball.x += 4 * ball.dx

    detectCollisions();

    // On redessine notre jeu
    displayGame();

    if (game.gameover == false && game.victory == false) {
        // On demande à JS de relancer cette fonction à chaque rafraichissement de l'écran
        game.animationId = requestAnimationFrame(playGame);
    }
}

/** 
GROUPE BALL : Cette fonction va détecter les collisions */
function detectCollisions() {
    //COLLISIONS AVEC LES BORDS DU CANEVAS
    if (ball.x >= game.width) {
        ball.dx = -1;
    }
    if (ball.x <= 0) {
        ball.dx = 1;
    }
    if (ball.y >= game.height) {
        ball.dy = -1
        game.gameover = true;
        window.cancelAnimationFrame(game.animationId);
        displayGameOver();
        //ball.dy = -1;

    }
    if (ball.y <= 0) {
        ball.dy = 1;
    }

    //COLLISION AVEC LE PADDLE
    if (ball.y >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.width) {
        ball.dy = -1
    }

    //COLLISIONS AVEC LES BRIQUES
    for (let i = 0; i < bricks.length; i++) {

        if (bricks[i].NbCollision > 0) {
            if (bricks[i].y == ball.y + ball.radius ||
                bricks[i].y + bheight == ball.y + ball.radius ||
                bricks[i].y + bheight == ball.y - ball.radius ||
                bricks[i].y == ball.y - ball.radius) {

                if (ball.x + ball.radius >= bricks[i].x &&
                    ball.x - ball.radius <= bricks[i].x + bwidth) {
                    // bricks[i].NbCollision = bricks[i].NbCollision - 1;
                    bricks[i].NbCollision--;
                    ball.dy = -ball.dy //inverser la direction
                }
            }
        }

    }


}


/**
 Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte 
 * 
*/
function displayGame() {
    game.ctx.clearRect(0, 0, game.width, game.height);




    displayBricks();
    //DESSIN DE LA BALLE
    game.ctx.beginPath();
    game.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    game.ctx.fillStyle = "#0095DD";
    game.ctx.fill();
    //GROUPE BALL :
    /** Dessin de la balle */


    //DESSIN DU PADDLE
    game.ctx.fillStyle = 'red'
    game.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
    game.ctx.strokeStyle = 'green'
    game.ctx.strokeRect(paddle.x, paddle.y, paddle.left, paddle.height)
    game.ctx.strokeStyle = 'purple'
    game.ctx.strokeRect(paddle.x + paddle.left + 60, paddle.y, paddle.right, paddle.height)


}

function displayBricks() {

    bwidth = 100;
    bheight = 40;
    brickx = 0;
    bricky = 150;
    // savoir si une brique à été cassé
    let countBrokenBricks = 0;
    for (let i = 0; i < bricks.length; i++) {
        game.ctx.fillStyle = bricks[i].couleur;

        if (bricks[i].NbCollision > 0) {
            game.ctx.fillRect(brickx, bricky, bwidth, bheight);
            bricks[i].x = brickx;
            bricks[i].y = bricky;
        }
        else {
            countBrokenBricks++;
        }


        brickx = brickx + bwidth + 70;
    }
    if (countBrokenBricks == bricks.length) {
        game.victory = true;
        displayWin();
    }

    //console.log(bricks);
    // On affiche toutes les briques qui n'ont pas leur collision à 0 (qui ne sont pas cassées)
}


function keyboardEvent(e) {
    switch (e.which) { /** event.which **/

        case 37:

            paddle.x = paddle.x - 12
            if (paddle.x <= 0) {
                paddle.x = 0;
            }

            break;

        case 39:
            paddle.x = paddle.x + 12;
            if (paddle.x > game.canvas.width - paddle.width) {
                paddle.x = game.canvas.width - paddle.width
            }
            break;
    }
    console.log(paddle.x)

}



/** GROUPE DISPLAY : Fonction qui affiche le gameOver */
function displayGameOver() {

    // EXEMPLE : On définie la police de caractère
    //On mesure la largeur du texte pour le centrer sur X
    // On ecrit Game Over

    game.ctx.font = 'bold 50px Arial'; // On définie la police de caractère pour tous les textes

    game.ctx.fillStyle = '#f40a02'; // Couleur pour écrire GAME OVER

    game.ctx.fillText('GAME OVER', 250, 300); // On ecrit GAME OVER

    window.setTimeout(clearCanvas, 1000);

    window.setTimeout(displayGameOver, 1500);

}

/** GROUPE DISPLAY : Fonction qui affiche le YOU WON ! */
function displayWin() {

    game.ctx.font = 'bold 50px Arial'; // On définie la police de caractère pour tous les textes

    game.ctx.fillStyle = '#99cc34'; // Couleur pour écrire YOU WON !

    game.ctx.fillText('YOU WON !', 250, 300); // On ecrit YOU WON !

    window.setTimeout(clearCanvas, 1000);

    window.setTimeout(displayWin, 1500);

}

function clearCanvas() {

    game.ctx.clearRect(0, 0, 800, 700);

}