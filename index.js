// Créer variables de chaque vidéo

var showreel = document.querySelector('#showreel')
showreel.volume = 0.5;

var boutonSon = document.querySelector('#boutonson')

boutonSon.onclick = function () {
  if(showreel.muted==false){
    showreel.muted = true;
    boutonSon.style.opacity = 0.5;
  }
else {
  showreel.muted = false;
  boutonSon.style.opacity = 1;
}};

                    // SHOWREEL

// ressources de création d'évènement pour la partie AR, target found etc, source : MindAR

document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  const targetCarte = document.querySelector('#targetcarte');
	
	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
    console.log("MindAR is ready")
});
// arError event triggered when something went wrong. Mostly browser compatbility issue
sceneEl.addEventListener("arError", (event) => {
  console.log("MindAR failed to start")
});

// detect target found
targetCarte.addEventListener("targetFound", event => {
  console.log("target found");
  showreel.play();
});

// detect target lost
targetCarte.addEventListener("targetLost", event => {
  console.log("target lost");
  showreel.pause();
 });
 
});