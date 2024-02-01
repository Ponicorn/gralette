<script setup>
import Header from '../components/Header.vue';
import { useRouletteStore } from '../stores/roulette';

const roulette = useRouletteStore();

</script>

<template>

    <Header />

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
            <router-link tag="div" class="choice-edit" to="/edit" >
                ⚙️
            </router-link>
        </div>
    </div>    
</template>
