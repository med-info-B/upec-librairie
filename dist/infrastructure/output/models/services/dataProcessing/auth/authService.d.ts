import { ILoginCredential, IUserService } from '../../../interfaces/IUserService';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: IUserService, jwtService: JwtService);
    login(login: ILoginCredential): Promise<any>;
}
