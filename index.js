// Créer variables des boutons Voix et Musique

var boutonMusique =  document.querySelector('#boutonmusique')
var boutonVoix =  document.querySelector('#boutonvoix')


// Créer variables de chaque vidéo et voix

var vidCouverture = document.querySelector('#vidcouverture')
var voixCouverture = document.querySelector('#voixcouverture');
voixCouverture.volume = 0.5;

var vidPoeme1 = document.querySelector('#vidpoeme1')
var voixPoeme1 = document.querySelector('#voixpoeme1');
voixPoeme1.volume = 0.6;

var vidPoeme2 = document.querySelector('#vidpoeme2')
var voixPoeme2 = document.querySelector('#voixpoeme2');
voixPoeme2.volume = 0.6;

var vidPoeme3 = document.querySelector('#vidpoeme3')
var voixPoeme3 = document.querySelector('#voixpoeme3');
voixPoeme3.volume = 0.6;

var vidPoeme4 = document.querySelector('#vidpoeme4')
var voixPoeme4 = document.querySelector('#voixpoeme4');
voixPoeme4.volume = 1;

var vidPoeme5 = document.querySelector('#vidpoeme5')
var voixPoeme5 = document.querySelector('#voixpoeme5');
voixPoeme5.volume = 0.6;

var vidPoeme6 = document.querySelector('#vidpoeme6')
var voixPoeme6 = document.querySelector('#voixpoeme6');
voixPoeme6.volume = 0.6;

var vidPoeme7 = document.querySelector('#vidpoeme7')
var voixPoeme7 = document.querySelector('#voixpoeme7');
voixPoeme7.volume = 0.6;

var vidPoeme8 = document.querySelector('#vidpoeme8')
var voixPoeme8 = document.querySelector('#voixpoeme8');
voixPoeme8.volume = 0.6;

var vidPoeme9 = document.querySelector('#vidpoeme9')
var voixPoeme9 = document.querySelector('#voixpoeme9');
voixPoeme9.volume = 0.6;

// Changer l'aspect des boutons quand click
//Passer de 0.4 à 1 d'opacité les 2 premiers boutons et mute/unmute les vidéos et les voix contées

function musiqueOnOff() {
    if (boutonMusique.style.opacity == 0.4){
        boutonMusique.style.opacity = 1;
        vidCouverture.muted = false;
        vidPoeme1.muted = false;
        vidPoeme2.muted = false;
        vidPoeme3.muted = false;
        vidPoeme4.muted = false;
        vidPoeme5.muted = false;
        vidPoeme6.muted = false;
        vidPoeme7.muted = false;
        vidPoeme8.muted = false;
        vidPoeme9.muted = false;
    }
    else {
        boutonMusique.style.opacity = 0.4;
        vidCouverture.muted = true;
        vidPoeme1.muted = true;
        vidPoeme2.muted = true;
        vidPoeme3.muted = true;
        vidPoeme4.muted = true;
        vidPoeme5.muted = true;
        vidPoeme6.muted = true;
        vidPoeme7.muted = true;
        vidPoeme8.muted = true;
        vidPoeme9.muted = true;
    }
}

function voixOnOff() {
    if (boutonVoix.style.opacity == 0.4){
        boutonVoix.style.opacity = 1;
        voixCouverture.muted = false;
        voixPoeme1.muted = false;
        voixPoeme2.muted = false;
        voixPoeme3.muted = false;
        voixPoeme4.muted = false;
        voixPoeme5.muted = false;
        voixPoeme6.muted = false;
        voixPoeme7.muted = false;
        voixPoeme8.muted = false;
        voixPoeme9.muted = false;
    }
    else {
        boutonVoix.style.opacity = 0.4;
        voixCouverture.muted = true;
        voixPoeme1.muted = true;
        voixPoeme2.muted = true;
        voixPoeme3.muted = true;
        voixPoeme4.muted = true;
        voixPoeme5.muted = true;
        voixPoeme6.muted = true;
        voixPoeme7.muted = true;
        voixPoeme8.muted = true;
        voixPoeme9.muted = true;
    }
}


                    // COUVERTURE


// ressources de création d'évènement pour la partie AR, target found etc, source : MindAR

document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	const targetCouverture = document.querySelector('#targetcouverture');
	
	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
	  // console.log("MindAR is ready")
	});
	// arError event triggered when something went wrong. Mostly browser compatbility issue
	sceneEl.addEventListener("arError", (event) => {
	  // console.log("MindAR failed to start")
	});

	// detect target found
	targetCouverture.addEventListener("targetFound", event => {
	  console.log("target couv found");
      vidCouverture.play();
      voixCouverture.play();
	});

	// detect target lost
	targetCouverture.addEventListener("targetLost", event => {
	  console.log("target couv lost");
      vidCouverture.pause();
      vidCouverture.currentTime = 0;
      voixCouverture.pause();
      voixCouverture.currentTime = 0;
    });
});

                    // POEME1

// TARGET Found Poeme 1

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme1 = document.querySelector('#targetpoeme1');
	
	// detect target found
	targetPoeme1.addEventListener("targetFound", event => {
	  console.log("target poeme1 found");
      vidPoeme1.currentTime = 0;
      vidPoeme1.play();
      voixPoeme1.currentTime = 0;
      voixPoeme1.play();
      STPoeme1.currentTime = 0;
      STPoeme1.play();
      STPoeme1.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme1.style.visibility="visible";
      }
      else {STPoeme1.style.visibility="hidden";}
	});

	// detect target lost
	targetPoeme1.addEventListener("targetLost", event => {
	  console.log("target poeme1 lost");
      vidPoeme1.pause();
      voixPoeme1.pause();
      STPoeme1.pause();
      STPoeme1.style.opacity= 0;
    });
});

                        // POEME2

// TARGET Found Poeme 2

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme2 = document.querySelector('#targetpoeme2');
	
	// detect target found
	targetPoeme2.addEventListener("targetFound", event => {
	  console.log("target poeme2 found");
      vidPoeme2.currentTime = 0;
      vidPoeme2.play();
      voixPoeme2.currentTime = 0;
      voixPoeme2.play();
      STPoeme2.currentTime = 0;
      STPoeme2.play();
      STPoeme2.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme2.style.visibility="visible";
      }
      else {STPoeme2.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme2.addEventListener("targetLost", event => {
	  console.log("target poeme2 lost");
      vidPoeme2.pause();
      voixPoeme2.pause();
      STPoeme2.pause();
      STPoeme2.style.opacity= 0;
    });
});


                        // POEME3

// TARGET Found Poeme 3

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme3 = document.querySelector('#targetpoeme3');
	
	// detect target found
	targetPoeme3.addEventListener("targetFound", event => {
	  console.log("target poeme3 found");
      vidPoeme3.currentTime = 0;
      vidPoeme3.play();
      voixPoeme3.currentTime = 0;
      voixPoeme3.play();
      STPoeme3.currentTime = 0;
      STPoeme3.play();
      STPoeme3.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme3.style.visibility="visible";
      }
      else {STPoeme3.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme3.addEventListener("targetLost", event => {
	  console.log("target poeme3 lost");
      vidPoeme3.pause();
      voixPoeme3.pause();
      STPoeme3.pause();
      STPoeme3.style.opacity= 0;
    });
});


                        // POEME4

// TARGET Found Poeme 4

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme4 = document.querySelector('#targetpoeme4');
	
	// detect target found
	targetPoeme4.addEventListener("targetFound", event => {
	  console.log("target poeme4 found");
      vidPoeme4.currentTime = 0;
      vidPoeme4.play();
      voixPoeme4.currentTime = 0;
      voixPoeme4.play();
      STPoeme4.currentTime = 0;
      STPoeme4.play();
      STPoeme4.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme4.style.visibility="visible";
      }
      else {STPoeme4.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme4.addEventListener("targetLost", event => {
	  console.log("target poeme4 lost");
      vidPoeme4.pause();
      voixPoeme4.pause();
      STPoeme4.pause();
      STPoeme4.style.opacity= 0;
    });
});


                        // POEME5

// TARGET Found Poeme 5

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme5 = document.querySelector('#targetpoeme5');
	
	// detect target found
	targetPoeme5.addEventListener("targetFound", event => {
	  console.log("target poeme5 found");
      vidPoeme5.currentTime = 0;
      vidPoeme5.play();
      voixPoeme5.currentTime = 0;
      voixPoeme5.play();
      STPoeme5.currentTime = 0;
      STPoeme5.play();
      STPoeme5.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme5.style.visibility="visible";
      }
      else {STPoeme5.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme5.addEventListener("targetLost", event => {
	  console.log("target poeme5 lost");
      vidPoeme5.pause();
      voixPoeme5.pause();
      STPoeme5.pause();
      STPoeme5.style.opacity= 0;
    });
});




                       // POEME6

// TARGET Found Poeme 6

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme6 = document.querySelector('#targetpoeme6');
	
	// detect target found
	targetPoeme6.addEventListener("targetFound", event => {
	  console.log("target poeme6 found");
      vidPoeme6.currentTime = 0;
      vidPoeme6.play();
      voixPoeme6.currentTime = 0;
      voixPoeme6.play();
      STPoeme6.currentTime = 0;
      STPoeme6.play();
      STPoeme6.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme6.style.visibility="visible";
      }
      else {STPoeme6.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme6.addEventListener("targetLost", event => {
	  console.log("target poeme6 lost");
      vidPoeme6.pause();
      voixPoeme6.pause();
      STPoeme6.pause();
      STPoeme6.style.opacity= 0;
    });
});



                       // POEME7

// TARGET Found Poeme 7

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme7 = document.querySelector('#targetpoeme7');
	
	// detect target found
	targetPoeme7.addEventListener("targetFound", event => {
	  console.log("target poeme7 found");
      vidPoeme7.currentTime = 0;
      vidPoeme7.play();
      voixPoeme7.currentTime = 0;
      voixPoeme7.play();
      STPoeme7.currentTime = 0;
      STPoeme7.play();
      STPoeme7.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme7.style.visibility="visible";
      }
      else {STPoeme7.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme7.addEventListener("targetLost", event => {
	  console.log("target poeme7 lost");
      vidPoeme7.pause();
      voixPoeme7.pause();
      STPoeme7.pause();
      STPoeme7.style.opacity= 0;
    });
});



                       // POEME8

// TARGET Found Poeme 8

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme8 = document.querySelector('#targetpoeme8');
	
	// detect target found
	targetPoeme8.addEventListener("targetFound", event => {
	  console.log("target poeme8 found");
      vidPoeme8.currentTime = 0;
      vidPoeme8.play();
      voixPoeme8.currentTime = 0;
      voixPoeme8.play();
      STPoeme8.currentTime = 0;
      STPoeme8.play();
      STPoeme8.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme8.style.visibility="visible";
      }
      else {STPoeme8.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme8.addEventListener("targetLost", event => {
	  console.log("target poeme8 lost");
      vidPoeme8.pause();
      voixPoeme8.pause();
      STPoeme8.pause();
      STPoeme8.style.opacity= 0;
    });
});




                       // POEME9

// TARGET Found Poeme 9

document.addEventListener("DOMContentLoaded", function() {
	const targetPoeme9 = document.querySelector('#targetpoeme9');
	
	// detect target found
	targetPoeme9.addEventListener("targetFound", event => {
	  console.log("target poeme9 found");
      vidPoeme9.currentTime = 0;
      vidPoeme9.play();
      voixPoeme9.currentTime = 0;
      voixPoeme9.play();
      STPoeme9.currentTime = 0;
      STPoeme9.play();
      STPoeme9.style.opacity= 1;
      if (boutonSoustitre.style.opacity==1) {
        STPoeme9.style.visibility="visible";
      }
      else {STPoeme9.style.visibility="hidden";}
	});
	// detect target lost
	targetPoeme9.addEventListener("targetLost", event => {
	  console.log("target poeme9 lost");
      vidPoeme9.pause();
      voixPoeme9.pause();
      STPoeme9.pause();
      STPoeme9.style.opacity= 0;
    });
});



// Pour les sous titres

var boutonSoustitre = document.querySelector('#boutonsoustitre');

// ST 1
var STPoeme1 = document.querySelector('#STpoeme1');

function soustitre1(){
    if(STPoeme1.style.visibility=="hidden") {
        STPoeme1.style.visibility="visible";
        console.log("Sous titres poeme 1 visibles");
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme1.style.visibility="hidden";
        console.log("Sous titres poeme 1 masqués");
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 2
var STPoeme2 = document.querySelector('#STpoeme2');

function soustitre2(){
    if(STPoeme2.style.visibility=="hidden") {
        STPoeme2.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme2.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 3
var STPoeme3 = document.querySelector('#STpoeme3');

function soustitre3(){
    if(STPoeme3.style.visibility=="hidden") {
        STPoeme3.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme3.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 4
var STPoeme4 = document.querySelector('#STpoeme4');

function soustitre4(){
    if(STPoeme4.style.visibility=="hidden") {
        STPoeme4.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme4.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 5
var STPoeme5 = document.querySelector('#STpoeme5');

function soustitre5(){
    if(STPoeme5.style.visibility=="hidden") {
        STPoeme5.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme5.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}


// ST 6
var STPoeme6 = document.querySelector('#STpoeme6');

function soustitre6(){
    if(STPoeme6.style.visibility=="hidden") {
        STPoeme6.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme6.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 7
var STPoeme7 = document.querySelector('#STpoeme7');

function soustitre7(){
    if(STPoeme7.style.visibility=="hidden") {
        STPoeme7.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme7.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 8
var STPoeme8 = document.querySelector('#STpoeme8');

function soustitre8(){
    if(STPoeme8.style.visibility=="hidden") {
        STPoeme8.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme8.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}

// ST 9
var STPoeme9 = document.querySelector('#STpoeme9');

function soustitre9(){
    if(STPoeme9.style.visibility=="hidden") {
        STPoeme9.style.visibility="visible";
        boutonSoustitre.style.opacity = 1;
    }
    else {
        STPoeme9.style.visibility="hidden";
        boutonSoustitre.style.opacity = 0.4;
    }
}