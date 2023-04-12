"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_vue_1 = require("@vitejs/plugin-vue");
const path_1 = require("path");
const resolvers_1 = require("unplugin-vue-components/resolvers");
const vite_2 = require("unplugin-vue-components/vite");
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_vue_1.default)(),
        (0, vite_2.default)({
            resolvers: [(0, resolvers_1.IduxResolver)()],
        }),
    ],
    resolve: {
        alias: {
            '@': path_1.default.resolve('./src'),
        },
    },
});
//# sourceMappingURL=vite.config.js.map