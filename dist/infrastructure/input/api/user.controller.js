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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto/input/user.dto");
const user_1 = require("../../package/config/constantes/user");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(userCreateDtp) {
        return await this.userService.subscribbe(userCreateDtp);
    }
    async login(credential) {
        return await this.userService.login(credential);
    }
    async makeRequestForgetPassWord(request) {
        return this.userService.requestForgotPassWord(request.email);
    }
    async checkCodeSentByEmail(req) {
        return this.userService.checkCode(req);
    }
    async changePassWord(req) {
        return this.userService.changePassWord(req);
    }
    async updateProfile(profile) {
        return await this.userService.updateProfile(profile);
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginCredentialDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/forgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ChangePasswordDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "makeRequestForgetPassWord", null);
__decorate([
    (0, common_1.Post)('/forgotPassword/checkCode'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.checkRandomNumberDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkCodeSentByEmail", null);
__decorate([
    (0, common_1.Put)('/updatePassWord'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ChangePassWordDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassWord", null);
__decorate([
    (0, common_1.Patch)('/updateProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UpdateProfleDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __param(0, (0, common_1.Inject)(user_1.USER_SERVICE)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map