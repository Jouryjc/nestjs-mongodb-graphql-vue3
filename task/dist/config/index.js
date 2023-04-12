"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_PORT = exports.MONGO_SERVER = void 0;
console.log(process.env.MONGO_URI);
exports.MONGO_SERVER = (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017';
exports.SERVER_PORT = (_b = process.env.SERVER_PORT) !== null && _b !== void 0 ? _b : '3000';
//# sourceMappingURL=index.js.map