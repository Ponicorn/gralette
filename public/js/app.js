'use strict';

Vue.component('rouletteitem', {
  props: ['option', 'selected', 'grasdechoix'],
  template: '<div class="rouletteitem" :class="{ selected, grasdechoix }">{{ option }}</div>'
})

let app = new Vue({
  el: '#app',
  data: {
    roulette,
    showmodal: false
  },
  methods: {
    lancer: lancerRoulette,
    retirer: retirerOptionRoulette,
  }
})