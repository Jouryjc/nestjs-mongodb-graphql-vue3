"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
let MicroController = class MicroController {
    constructor(client) {
        this.client = client;
    }
    sum() {
        console.log('call sum fn');
        const pattern = { cmd: 'sum' };
        const payload = [1, 2, 3];
        return this.client.send(pattern, payload);
    }
};
__decorate([
    (0, common_1.Get)('sum'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], MicroController.prototype, "sum", null);
MicroController = __decorate([
    (0, swagger_1.ApiTags)('micro'),
    (0, common_1.Controller)('micro'),
    __param(0, (0, common_1.Inject)('MATH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MicroController);
exports.MicroController = MicroController;
//# sourceMappingURL=micro.controller.js.map