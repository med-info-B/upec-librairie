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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_1 = require("../../../../package/config/constantes/user");
const userAccessDB_1 = require("../accessDB/userAccessDB");
const bcrypt = require("bcrypt");
const serviceSendGrid_1 = require("../../../web-services-externe/serviceMail/serviceSendGrid");
let UserService = class UserService {
    constructor(db, serviceMail, jwtService) {
        this.db = db;
        this.serviceMail = serviceMail;
        this.jwtService = jwtService;
    }
    async updateProfile(user) {
        this.checkIfEmailExist(user.email);
        if (user.password) {
            const { newPasswordEncrypted, newSalt } = (await this.encryptPassWord(user.password));
            user.password = newPasswordEncrypted;
            user.salt = newSalt;
        }
        const { name, email } = await this.db.updateProfile(user);
        return {
            name,
            email
        };
    }
    async checkIfEmailExist(email) {
        const userExist = await this.db.existUserFiltredBy(email).then(predicate => predicate);
        if (!userExist) {
            throw new common_1.BadRequestException();
        }
    }
    async encryptPassWord(pwd) {
        const salt = await bcrypt.genSalt();
        const pwdEncrypted = await bcrypt.hash(pwd, salt).catch(err => console.log('Error of encrypting password'));
        return {
            newSalt: salt,
            newPasswordEncrypted: pwdEncrypted,
        };
    }
    async changePassWord(user) {
        const { email, password } = user;
        this.checkIfEmailExist(email);
        const { newPasswordEncrypted, newSalt } = (await this.encryptPassWord(password));
        if (newPasswordEncrypted && newSalt) {
            await this.db.updatePassWord(email, newPasswordEncrypted, newSalt);
        }
    }
    async checkCode(req) {
        const { Iemail, IrandomeNumber } = req;
        const { email, randomNumber, name, role, _id } = await this.db.getOneUserFiltredBy(Iemail);
        if (email !== Iemail || randomNumber !== IrandomeNumber) {
            throw new common_1.BadRequestException();
        }
        await this.db.removeKeyRandomNumber(email);
        const payload = { _id, email, name, role };
        const token = await this.jwtService.sign(payload);
        return {
            "access_token": token,
        };
    }
    generateRandomNumber() {
        return Math.floor(Math.random() * 999999);
    }
    async requestForgotPassWord(Iemail) {
        const { email, name } = await this.db.getOneUserFiltredBy(Iemail);
        if (email !== Iemail) {
            throw new common_1.BadRequestException('This email is not recognized');
        }
        const numberGenerated = this.generateRandomNumber();
        await this.db.setRandomNumber(email, numberGenerated);
        await this.serviceMail.send(email, name, numberGenerated);
    }
    async login(login) {
        try {
            var { email, name, password, salt, role, _id } = await this.findOneUserFilteredBy(login.email);
        }
        catch (err) {
            throw new common_1.NotFoundException("Email or Password is wrong");
        }
        const pwdHashed = await bcrypt.hash(login.password, salt);
        if (pwdHashed !== password) {
            throw new common_1.NotFoundException("Email or Password is wrong");
        }
        const payload = { _id, email, name, role };
        const token = await this.jwtService.sign(payload);
        return {
            "access_token": token,
        };
    }
    async findOneUserFilteredBy(Iemail) {
        const { name, email, password, salt, role, _id } = await this.db.getOneUserFiltredBy(Iemail);
        if (email) {
            return { _id, name, email, password, salt, role };
        }
        throw new common_1.NotFoundException("User filtred by Email don't exist");
    }
    async subscribbe(user) {
        const userExist = await this.db.existUserFiltredBy(user.email).then(predicate => predicate);
        if (!userExist) {
            user.salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(user.password, user.salt);
            await this.db.push(user);
        }
        else
            throw new common_1.ConflictException("This account already exist");
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_1.USER_ACCESS_MONGODB)),
    __metadata("design:paramtypes", [userAccessDB_1.UserAccessMongoDB,
        serviceSendGrid_1.EmailService,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map