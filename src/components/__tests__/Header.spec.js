import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
    it('should render', () => {
        const wrapper = mount(Header, {
            props: {
                title: 'Titre',
                subtitle: 'Sous Titre',
            },
        });
        expect(wrapper.exists()).toBe(true);
    });

    it('should render a title', () => {
        const wrapper = mount(Header, {
            props: {
                title: 'Titre',
                subtitle: 'Sous Titre',
            },
        });
        expect(wrapper.html()).toContain('<header>');
        expect(wrapper.html()).toContain('<h1>');
        expect(wrapper.html()).toContain('<h2>');
    });
});
