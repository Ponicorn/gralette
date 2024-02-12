import { createPinia, setActivePinia } from 'pinia';
import {
    beforeEach, describe, expect, it,
} from 'vitest';
import { useRouletteStore } from '../roulette';

describe('Roulette', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should add a choice', () => {
        const store = useRouletteStore();
        store.addChoice('Pizza');
        expect(store.choices).toContain('Pizza');
    });

    it('should remove a choice', () => {
        const store = useRouletteStore();
        store.addChoice('Pizza');
        expect(store.choices).toContain('Pizza');
        store.removeChoice('Pizza');
        expect(store.choices).not.toContain('Pizza');
    });

    it('should pick a winner', () => {
        const store = useRouletteStore();
        store.choices.value = ['Pizza'];
        expect(store.choices).toContain(store.pickWinner());
    });

    it('should spin and win', async () => {
        const store = useRouletteStore();
        await store.spin(true);
        expect(store.choices).toContain(store.winner);
    });

    it('should loop and end on last', async () => {
        const store = useRouletteStore();
        await store.loop(0);
        expect(store.winner).toBe(store.choices[store.choices.length - 1]);
    });

    it('should loop and win', async () => {
        const store = useRouletteStore();
        await store.loop(0, true);
        expect(store.choices).toContain(store.winner);
    });
});
