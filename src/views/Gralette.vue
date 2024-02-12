<script setup>
import { RouterLink } from 'vue-router';
import Header from '../components/Header.vue';
import { useRouletteStore } from '../stores/roulette';

const roulette = useRouletteStore();

</script>

<template>
    <Header
        title="Gralette"
        subtitle="La roulette du gras"
    />

    <div class="gralette">
        <!-- loop on graletteStore choice -->
        <div class="choices">
            <div
                v-for="choice, key in roulette.choices"
                :key="key"
                class="choice"
                :class="{'winner': roulette.winner === choice}"
            >
                {{ choice }}
            </div>
        </div>

        <div class="button-spin">
            <button
                @click="roulette.spin()"
                :disabled="roulette.isSpinning"
            >
                Roulez jeunesse !
            </button>
            <RouterLink
                class="choice-edit"
                to="/edit"
            >
                ⚙️
            </RouterLink>
        </div>
    </div>
</template>
