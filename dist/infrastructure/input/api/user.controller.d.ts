import { IUserService } from '../../output/models/interfaces/IUserService';
import { CreateUserDto, LoginCredentialDTO, ChangePasswordDTO, checkRandomNumberDTO, ChangePassWordDTO, UpdateProfleDTO } from '../dto/input/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: IUserService);
    createUser(userCreateDtp: CreateUserDto): Promise<void>;
    login(credential: LoginCredentialDTO): Promise<any>;
    makeRequestForgetPassWord(request: ChangePasswordDTO): Promise<any>;
    checkCodeSentByEmail(req: checkRandomNumberDTO): Promise<any>;
    changePassWord(req: ChangePassWordDTO): Promise<void>;
    updateProfile(profile: UpdateProfleDTO): Promise<import("../../output/models/interfaces/IUserService").IProfile>;
}
