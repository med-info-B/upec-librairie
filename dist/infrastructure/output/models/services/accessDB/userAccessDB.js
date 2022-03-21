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
exports.UserAccessMongoDB = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../schema/user.schema");
let UserAccessMongoDB = class UserAccessMongoDB {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async updateProfile(profile) {
        const { email } = profile;
        await this.userModel.updateOne({ email }, profile).catch((err) => console.log('Error to write in DB : ', err));
        return await this.getOneUserFiltredBy(email);
    }
    async updatePassWord(email, pwd, salt) {
        await this.userModel.updateOne({ email }, { password: pwd }).catch((err) => console.log('Error to write in DB : ', err));
    }
    async getOneUserFiltredBy(email) {
        return await this.userModel.findOne({ email }).catch((err) => console.log('Error to read from DB : ', err));
    }
    async push(user) {
        const userCreated = await new this.userModel(user);
        await userCreated.save();
    }
    async existUserFiltredBy(email) {
        return await this.userModel.exists({ email }).catch(err => console.log("Error of reading from Db :", err));
    }
    async setRandomNumber(email, nbr) {
        await this.userModel.updateOne({ email }, { randomNumber: nbr }).catch(err => console.log("Error of writing in DB:", err));
    }
    async removeKeyRandomNumber(email) {
        await this.userModel.updateOne({ email }, { randomNumber: undefined }).catch(err => console.log("Error of writing in DB:", err));
    }
};
UserAccessMongoDB = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserAccessMongoDB);
exports.UserAccessMongoDB = UserAccessMongoDB;
//# sourceMappingURL=userAccessDB.js.map