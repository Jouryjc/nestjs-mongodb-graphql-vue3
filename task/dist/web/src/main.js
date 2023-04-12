"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
require("./style.css");
require("@idux/cdk/index.css");
require("@idux/components/default.css");
const App_vue_1 = require("./App.vue");
const index_1 = require("./router/index");
const cdk_1 = require("@idux/cdk");
const components_1 = require("@idux/components");
(0, vue_1.createApp)(App_vue_1.default).use(components_1.default).use(cdk_1.default).use(index_1.router).mount('#app');
//# sourceMappingURL=main.js.map