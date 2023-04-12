"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloClient = void 0;
const core_1 = require("@apollo/client/core");
const error_1 = require("@apollo/client/link/error");
const apollo_util_1 = require("@vue/apollo-util");
const httpLink = (0, core_1.createHttpLink)({
    uri: 'http://localhost:3000/graphql',
});
(0, error_1.onError)((error) => {
    (0, apollo_util_1.logErrorMessages)(error);
});
const cache = new core_1.InMemoryCache();
exports.apolloClient = new core_1.ApolloClient({
    link: httpLink,
    cache,
});
//# sourceMappingURL=graphql.js.map