"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const todo_module_1 = require("./modules/todo/todo.module");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("./config");
const micro_controller_1 = require("./micro.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(config_1.MONGO_SERVER, {
                connectTimeoutMS: 10000,
                user: 'root',
                pass: 'root',
                dbName: 'test',
                autoCreate: true,
                keepAlive: true,
                keepAliveInitialDelay: 300000,
                retryAttempts: 10,
                retryDelay: 5000,
                family: 4,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                debug: true,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                cors: true,
            }),
            microservices_1.ClientsModule.register([
                { name: 'MATH_SERVICE', transport: microservices_1.Transport.TCP },
            ]),
            todo_module_1.TodoModule,
        ],
        providers: [
            {
                provide: 'TOKEN_SERVICE',
                useFactory: () => {
                    return microservices_1.ClientProxyFactory.create({
                        options: {
                            port: 8888,
                            host: 'localhost',
                        },
                        transport: microservices_1.Transport.TCP
                    });
                },
            },
        ],
        controllers: [micro_controller_1.MicroController]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map