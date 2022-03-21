import { ICheckRandonNumber, ILoginCredential, IUser, IUserService, IProfile } from "../../interfaces/IUserService";
import { JwtService } from '@nestjs/jwt';
import { UserAccessMongoDB } from "../accessDB/userAccessDB";
import { EmailService } from "../../../web-services-externe/serviceMail/serviceSendGrid";
export declare class UserService implements IUserService {
    private readonly db;
    private serviceMail;
    private jwtService;
    constructor(db: UserAccessMongoDB, serviceMail: EmailService, jwtService: JwtService);
    updateProfile(user: IProfile): Promise<IProfile>;
    private checkIfEmailExist;
    private encryptPassWord;
    changePassWord(user: ILoginCredential): Promise<void>;
    checkCode(req: ICheckRandonNumber): Promise<any>;
    private generateRandomNumber;
    requestForgotPassWord(Iemail: string): Promise<void>;
    login(login: ILoginCredential): Promise<any>;
    findOneUserFilteredBy(Iemail: string): Promise<IUser>;
    subscribbe(user: IUser): Promise<void>;
}
