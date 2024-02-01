<script setup>
import Header from '../components/Header.vue';
import { useRouletteStore } from '../stores/roulette';

const roulette = useRouletteStore();

</script>

<template>
    <Header />

    <!-- loop on graletteStore choice -->
    <div class="gralette">
        <div
            v-for="choice, key in roulette.choices"
            :key="key"
            class="choice"
            :class="{'winner': roulette.winner === choice}"
        >
            {{ choice }}
        </div>
    </div>

    <div>
        <button
            class="btn-spin"
            @click="roulette.spin()"
        >
            Roulez jeunesse !
        </button>
    </div>
</template>
