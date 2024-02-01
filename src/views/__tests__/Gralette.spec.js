import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing";
import Gralette from "../Gralette.vue";
import { useRouletteStore } from "../../stores/roulette";



describe("Gralette", () => {

    let wrapper, store;

    beforeEach(() => {
        wrapper = mount(Gralette, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn
                })],
            }
        });
        store = useRouletteStore();
    });

    it("should render", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should have choices", () => {
        expect(wrapper.findAll('.choice').length).toBe(store.choices.length);
    });

    it("should have a spin button", async () => {
        await wrapper.find('.btn-spin').trigger('click');
        expect(store.spin).toHaveBeenCalled();
    });
});