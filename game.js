// Laddar in bilder till spelet
let birdImg = new Image();
birdImg.src = "img/bird.png";

// Position
let xPos = 260, yPos = 220;

/** Körs då sidan är laddad */
function init(){
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);
   
    gameLoop();
}

window.addEventListener("load",init);

//Lagrar tangent-händelser
let keysDown = {};

/** Sparar undan en tangentryckning för bearbetning  */
function keyDown(e){
    keysDown[e.key] = true;
  }
  
  /**
  * Tar bort händelsen när knappen släpps. Detta så inte händelsen 
  * ligger kvar och återupprepas. 
  * Fågeln skulle då flytta sig hela tiden efter ett tryck.
  */
  function keyUp(e){
    delete keysDown[e.key];
  }

  /** Spellopen */
function gameLoop() {
    update();
    render();
  
    // Bytt till requestAnimFrame istället för setInterval
    requestAnimationFrame(function() {
         gameLoop();
       });
}

/** Uppdaterar läget på fågeln */
function update(){
    if ('ArrowLeft' in keysDown) { // Vänster     
       xPos -= 5;
    }
    if ('ArrowRight' in keysDown) { // Höger
       xPos += 5;
    }
    if ('ArrowUp' in keysDown) { // Upp
       yPos -= 5;
    }
    if ('ArrowDown' in keysDown) { // Ner
       yPos += 5;
    }
  }
  
  
  