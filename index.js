// Créer variables des boutons Voix et Musique

var boutonMusique =  document.querySelector('#boutonmusique')
var boutonVoix =  document.querySelector('#boutonvoix')


// Créer variables de chaque vidéo et voix

var showreel = document.querySelector('#showreel')

voixCouverture.volume = 0.5;

// Changer l'aspect des boutons quand click
//Passer de 0.4 à 1 d'opacité les 2 premiers boutons et mute/unmute les vidéos et les voix contées

function musiqueOnOff() {
    if (boutonMusique.style.opacity == 0.4){
        boutonMusique.style.opacity = 1;
        vidCouverture.muted = false;
    }
    else {
        boutonMusique.style.opacity = 0.4;
        vidCouverture.muted = true;
    }
}


                    // COUVERTURE


// ressources de création d'évènement pour la partie AR, target found etc, source : MindAR

document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	const targetCarte = document.querySelector('#targetcarte');
	
	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
	  // console.log("MindAR is ready")
	});
	// arError event triggered when something went wrong. Mostly browser compatbility issue
	sceneEl.addEventListener("arError", (event) => {
	  // console.log("MindAR failed to start")
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