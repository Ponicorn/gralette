let roulette = document.querySelector('#roulette')
let listoption = document.querySelector('#list')
let options 
let tour = 2
let vitesse = 50
let vitesseIncremente = 50
let probamax = 0
let probaIncremente = 5
let stop = null
let selected = 1000
let running = false;

function initOptions() {
  if (!localStorage.options || localStorage.options.length === 0)  
    localStorage.setItem('options', ['KFC', 'McDo', 'BK', 'Pizza'])
  
  options = localStorage.options.split(',')
}

/**
 * On mets chaque div pour chaque options
 * ainsi que pour la partie edit
 */
function mettreOptions() {
  localStorage.setItem('options', options)
  roulette.innerHTML = ''
  listoption.innerHTML = ''
  options.forEach((option, index) => {
    // partie visu 
    let element = document.createElement('div')
    roulette.innerHTML += `<div class="option">${option}</div>`

    // partie option
    listoption.innerHTML += `<div class="listoption"><div>${option}</div> <div class="delete" data-index="${index}">❌</div></div>`
  })
}

/**
 * On fait tourner la roulette, en mettant bien la classe active
 */
function rouletteTick() {
  selected++
  if (selected > options.length - 1) selected = 0

  let actif = document.querySelector('.active')
  if (actif) actif.classList.remove('active')

  actif = document.querySelector(`.option:nth-child(${selected + 1})`)
  if (actif) actif.classList.add('active')
}

/**
 * initialisation de la roulette
 */
function initRoulette() {
  if (running) return
  tour = options.length * -Math.round(1 + Math.random() * 4)
  vitesse = 50
  probamax = 0
  stop = null
  selected = 100000
  running = true
  lancerRoulette()
}

/**
 * On lance la boucle roulette
 */
function lancerRoulette() {
  // Roulette
  rouletteTick()
  // incrementation du tour
  tour++

  // si on a fait un tour complet
  if (tour >= 0 && selected === 0) {
    vitesse += vitesseIncremente
    probamax += probaIncremente

    // On s'arrete? 
    let proba = Math.round(Math.random() * 100)
    if (proba <= probamax)
      stop = Math.floor(Math.random() * options.length)
  }

  if (stop != null && selected == stop) return niveauTermin()

  setTimeout(lancerRoulette, vitesse)
}

/**
 * fin de processus
 */
function niveauTermin() {
  running = false
}

(function () {
  initOptions()
  mettreOptions()
})()