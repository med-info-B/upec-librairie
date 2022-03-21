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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const sendGrid = require("@sendgrid/mail");
const user_1 = require("../../../package/config/constantes/user");
const userAccessDB_1 = require("../../models/services/accessDB/userAccessDB");
let EmailService = class EmailService {
    constructor(db) {
        this.db = db;
        this.resetKeySendGrid();
    }
    resetKeySendGrid() {
        sendGrid.setApiKey(process.env.API_KEY);
    }
    async send(email, name, randNumber) {
        await sendGrid.send({
            to: email,
            from: "mohammed.bouajaja@etu.u-pec.fr",
            subject: "Forgot password",
            text: `Bonjour`,
            html: `<h1> Bonjour ${name} </h1>
            <p> Nous avons reçu une demande réinitialisation de votre mot de passe </p>
            <p> Entrez le code de réinitialisation du mot de passe suivant : ${randNumber} </p>`
        });
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_1.USER_ACCESS_MONGODB)),
    __metadata("design:paramtypes", [userAccessDB_1.UserAccessMongoDB])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=serviceSendGrid.js.map