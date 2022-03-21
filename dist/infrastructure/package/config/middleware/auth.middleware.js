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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../constantes/user");
const jwt_1 = require("@nestjs/jwt");
let AuthMiddleware = class AuthMiddleware {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async checkToken(req) {
        var _a;
        const Token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (Token) {
            try {
                const token = req.headers.authorization.split(' ')[1];
                return await this.jwtService.verify(token, { secret: process.env.SECRET });
            }
            catch (err) {
                throw new common_1.UnauthorizedException();
            }
        }
        throw new common_1.UnauthorizedException();
    }
    async checkOwner(req) {
        const { _id, email } = await this.checkToken(req);
        const user = await this.userService.findOneUserFilteredBy(email);
        if (user && String(user._id) === String(_id)) {
            return user;
        }
        throw new common_1.UnauthorizedException();
    }
    async use(req, res, next) {
        if (await this.checkToken(req) && await this.checkOwner(req)) {
            next();
        }
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_1.USER_SERVICE)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map