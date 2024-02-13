import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useRouletteStore = defineStore('roulette', () => {
    const defaultChoices = [
        'McDonalds',
        'Burger King',
        'Kentucky Fried Chicken',
        'Dominos',
        'Feuillette',
        'Poulet rôti du Cora',
        'Cantine',
    ];

    if (!localStorage.rouletteChoices || !localStorage.rouletteChoices.length) {
        localStorage.setItem('rouletteChoices', defaultChoices);
    }

    const choices = ref(localStorage.rouletteChoices.split(',') ?? defaultChoices);
    const winner = ref();
    const isSpinning = ref(false);

    const addChoice = (choice) => {
        choices.value.push(choice);
        localStorage.setItem('rouletteChoices', choices.value);
    };

    const removeChoice = (choice) => {
        choices.value = choices.value.filter((c) => c !== choice);
        localStorage.setItem('rouletteChoices', choices.value);
    };

    const pickWinner = () => choices.value[Math.floor(Math.random() * choices.value.length)];

    const loop = async (waiting, winning = false) => {
        const winnerTmp = winning ? pickWinner() : false;
        for (let i = 0; i < choices.value.length; i++) {
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, waiting));
            winner.value = choices.value[i];

            if (winner.value === winnerTmp) {
                break;
            }
        }
    };

    const spin = async (instant = false) => {
        if (isSpinning.value) return;

        isSpinning.value = true;
        const spinTotal = Math.floor(Math.random() * 4) + 5;
        let spinCounter = 0;
        let wait = instant ? 0 : 100;

        while (spinCounter < spinTotal) {
            await loop(wait);
            spinCounter++;
            if (!instant && spinCounter > 4) wait += 100;
        }
        await loop(wait, true);
        isSpinning.value = false;
    };

    return {
        choices,
        winner,
        addChoice,
        removeChoice,
        pickWinner,
        spin,
        loop,
        isSpinning,
    };
});
