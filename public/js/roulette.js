'use strict';

let roulette = {
  options : ['KFC', 'McDo', 'BK', 'Pizza', 'Kebab'] ,
  selected : -1,
  running: false,
  tour: 0,
  vitesse: 50,
  vitesseIteration: 50,
  probarange: 0,
  probarangeIteration: 5,
  grasdechoix: -1,
}

/**
 * On va checher dans un premier temps 
 * si il y a pas déjà les options
 * dans le localstorage
 */
function init () {
  if (!localStorage.optionsRoulette || !localStorage.optionsRoulette.length) {
    localStorage.setItem('optionsRoulette', roulette.options)
  }
  roulette.options = localStorage.optionsRoulette.split(',')
}
init ()

/**
 * On met un coup de roulette, 
 * on place bien le curseur 
 * en fonction de la taille du tableau d'options
 */
function avanceRoulette () {
  roulette.selected++
  
  // Si ça dépasse, retour au début
  if (roulette.selected >= roulette.options.length) 
    roulette.selected = 0
}

/**
 * Reinitialise les valeurs pour un nouveau départ
 */
function lancerRoulette () {
  if (roulette.running) return
  roulette.running = true // On est en route
  roulette.tour = -Math.floor(1 + Math.random() * 4) // On fait entre 1 et 4 tour dans le vent
  roulette.grasdechoix = -1 // On ne s'arrête pas tout de suite
  roulette.selected = -1 // On selectionne rien
  roulette.vitesse = 50 // Vitesse de base
  roulette.probarange = 0 // On reset les chance d'arrêt

  tickRoulette()
}

/**
 * Itération de roulette
 */
function tickRoulette () {
  avanceRoulette()

  // Nouveau tour si on passe par la premiere option du tableau
  if (roulette.selected === 0) {
    roulette.tour++
    roulette.vitesse += roulette.vitesseIteration

    // Si on est hors "tour de chauffe", on commence les proba
    if (roulette.tour>= 0) {

      roulette.probarange += roulette.probarangeIteration
      //On se lance un petit random
      let proba = Math.floor(Math.random() * 100)

      // Si on tombe dans les proba d'arrêt
      if (proba <= roulette.probarange) {
        roulette.grasdechoix = Math.floor(Math.random() * roulette.options.length)
      }
    }
  }

  if (roulette.grasdechoix === roulette.selected) 
    return terminRoulette()

  setTimeout(tickRoulette, roulette.vitesse)
}

/**
 * Fonction de fin de roulette
 */
function terminRoulette () {
  roulette.running = false
  console.log('fin')
}

/**
 * Retire l'option a l'index ciblé
 * @param {*} index 
 */
function retirerOptionRoulette (index) {
  if (roulette.running) return
  if (!roulette.options[index]) return
  roulette.options.splice(index, 1)
  localStorage.setItem('optionsRoulette', roulette.options)
}

function ajouterOptionRoulette (option) {
  roulette.options.push(option)
  localStorage.setItem('optionsRoulette', roulette.options)
}