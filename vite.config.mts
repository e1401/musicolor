import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), svgrPlugin(), viteTsconfigPaths()],
    server: {
        port: 3000,
    },
    build: {
        outDir: 'build',
    },
});
