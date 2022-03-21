import { Strategy } from 'passport-jwt';
import { IPayload } from './interfaces';
import { IUserService } from '../../../interfaces/IUserService';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: IUserService);
    validate(payload: IPayload): Promise<{
        _id?: string;
        name: string;
        email: string;
        role?: import("../../../interfaces/IUserService").Role;
        randomNumber?: number;
    }>;
}
export {};
