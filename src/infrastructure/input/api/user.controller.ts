import { Controller, Inject, Post, Body, Get, UsePipes, ValidationPipe, UseGuards, Put, Patch, Param } from '@nestjs/common';
import { IUserService } from '../../output/models/interfaces/IUserService';
import { CreateUserDto,
         LoginCredentialDTO,
         ChangePasswordDTO,
         checkRandomNumberDTO ,
         ChangePassWordDTO,
         UpdateProfleDTO     
        } from '../dto/input/user.dto';
import { USER_SERVICE } from '../../package/config/constantes/user'
import { UpdatedProfileDTO } from '../dto/output/user.dto';
import { identity } from 'rxjs';


/**
 *  This class is responsable for controlling and redirecting http request to the corresponding services
 */
@Controller('users')
export class UserController {

    constructor( @Inject(USER_SERVICE) 
    private readonly userService: IUserService,    
    ){}

    @Post('/register')
    async createUser(@Body() userCreateDtp: CreateUserDto) {
        return await this.userService.subscribbe(userCreateDtp);
    }
    
    @Post('/login')
    async login(@Body() credential: LoginCredentialDTO) {
        return await this.userService.login(credential);
    }

    @Post('/forgotPassword')
    async makeRequestForgetPassWord(@Body() request: ChangePasswordDTO) {
        return this.userService.requestForgotPassWord(request.email);
    }
    
    @Post('/forgotPassword/checkCode')
    async checkCodeSentByEmail(@Body() req: checkRandomNumberDTO) { 
        return this.userService.checkCode(req);
    }

    @Put('/updatePassWord')
    async changePassWord(@Body() req: ChangePassWordDTO) {
        return this.userService.changePassWord(req);
    }
    
  

    @Patch('/updateProfile')
    async updateProfile(@Body() profile: UpdateProfleDTO){
        return await this.userService.updateProfile(profile)
    }
   

}
