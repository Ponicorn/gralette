'use strict';

Vue.component('rouletteitem', {
  props: ['option', 'selected', 'grasdechoix'],
  template: '<div class="rouletteitem" :class="{ selected, grasdechoix }">{{ option }}</div>'
})

let app = new Vue({
  el: '#app',
  data: {
    roulette,
    showmodal: false,
    nouvelleoption: '',
  },
  methods: {
    lancer: lancerRoulette,
    retirer: retirerOptionRoulette,
    ajouter () {
      let option = this.nouvelleoption.trim()
      if (!option.length) return
      ajouterOptionRoulette(option)
      this.nouvelleoption = ''
    }
  }
})