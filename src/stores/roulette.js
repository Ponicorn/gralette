import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRouletteStore = defineStore('roulette', () => {

    const defaultChoices = [
        'Bacon',
        'Eggs',
        'Toast',
        'Sausage',
        'Hash Browns'
    ]

    const choices = ref(defaultChoices)
    const winner = ref(-1)
    const isSpinning = ref(false)

    const addChoice = (choice) => {
        choices.value.push(choice)
    }

    const removeChoice = (choice) => {
        choices.value = choices.value.filter(c => c !== choice)
    }

    const pickWinner = () => {
        return choices.value[Math.floor(Math.random() * choices.value.length)]
    }

    const loop = async (waiting, winning = false) => {
        const winnerTmp = winning ? pickWinner() : false
        for (let i = 0; i < choices.value.length; i++) {
            await new Promise(resolve => setTimeout(resolve, waiting))
            winner.value = choices.value[i]

            if (winner.value === winnerTmp) {
                break
            }
        }
    }

    const spin = async () => {
        if (isSpinning.value) return
        isSpinning.value = true
        const spinCount = Math.floor(Math.random() * 4) + 5
        let spin = 0
        let wait = 100

        while (spin < spinCount) {
            await loop(wait)
            spin++
            if (spin > 4) wait += 100
        }
        loop(wait, true)
        isSpinning.value = false
    }

    return {
        choices,
        winner,
        addChoice,
        removeChoice,
        pickWinner,
        spin
    }
})