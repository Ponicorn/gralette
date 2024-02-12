<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Header from '../components/Header.vue';
import { useRouletteStore } from '../stores/roulette';

const roulette = useRouletteStore();
const newChoice = ref('');

function addChoice() {
    if (!newChoice.value.trim().length) return;
    roulette.addChoice(newChoice.value);
    newChoice.value = '';
}

</script>

<template>
    <Header
        title="Gralette"
        subtitle="Édition du gras"
    />

    <div class="retour-wrap">
        <RouterLink to="/">
            ⬅ Retour
        </RouterLink>
    </div>

    <div class="choices-edit-wrapper">
        <div class="choice-add">
            <form @submit.prevent="addChoice()">
                <div class="input">
                    <input
                        type="text"
                        v-model="newChoice"
                    >
                </div>
                <div>
                    <button class="btn">
                        Ajouter
                    </button>
                </div>
            </form>
        </div>

        <div class="choices-edit">
            <div
                v-for="choice, key in roulette.choices"
                :key="key"
                class="choice"
                :class="{'winner': roulette.winner === choice}"
            >
                <div class="label">
                    {{ choice }}
                </div>
                <div class="choice-delete">
                    <span @click="roulette.removeChoice(choice)">❌</span>
                </div>
            </div>
        </div>
    </div>
</template>
