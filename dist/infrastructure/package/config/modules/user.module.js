"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const userAccessDB_1 = require("../../../output/models/services/accessDB/userAccessDB");
const user_controller_1 = require("../../../input/api/user.controller");
const user_schema_1 = require("../../../output/models/schema/user.schema");
const userService_1 = require("../../../output/models/services/dataProcessing/userService");
const user_1 = require("../../config/constantes/user");
const dotenv = require("dotenv");
const serviceSendGrid_1 = require("../../../output/web-services-externe/serviceMail/serviceSendGrid");
const auth_middleware_1 = require("../middleware/auth.middleware");
dotenv.config();
let UserModule = class UserModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: '/users/updatePassWord', method: common_1.RequestMethod.PUT }, { path: '/users/updateProfile', method: common_1.RequestMethod.PATCH });
    }
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET,
                signOptions: {
                    expiresIn: 3600,
                }
            })
        ],
        providers: [
            {
                useClass: userService_1.UserService,
                provide: user_1.USER_SERVICE,
            },
            {
                useClass: userAccessDB_1.UserAccessMongoDB,
                provide: user_1.USER_ACCESS_MONGODB,
            },
            serviceSendGrid_1.EmailService,
            auth_middleware_1.AuthMiddleware,
        ],
        controllers: [user_controller_1.UserController],
    })
], UserModule);
exports.UserModule = UserModule;
;
//# sourceMappingURL=user.module.js.map