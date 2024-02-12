// eslint-disable-next-line import/no-unresolved
import { mergeConfig, defineConfig } from 'vitest/config';
import viteconfig from './vite.config';

export default mergeConfig(
    viteconfig,
    defineConfig({
        test: {
            environment: 'jsdom',
        },
    }),
);
