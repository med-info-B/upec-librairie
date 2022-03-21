import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { IUserService } from 'src/infrastructure/output/models/interfaces/IUserService';
import { JwtService } from '@nestjs/jwt';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    private jwtService;
    constructor(userService: IUserService, jwtService: JwtService);
    private checkToken;
    private checkOwner;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
