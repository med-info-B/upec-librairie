import { User } from './../../../output/models/schema/user.schema';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class UserDTO {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}
export class CreateUserDto  {
    
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    password!: string;

}

export class ChangePasswordDTO {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsEmail()
    email!: string;
}

export class checkRandomNumberDTO{
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsEmail()
    Iemail!: string;
    
    @ApiProperty({
        required: true,
        type: Number,
    })
    @IsNotEmpty()
    @IsNumber()
    IrandomeNumber!: number;
}
export class LoginCredentialDTO extends UserDTO {}
export class ChangePassWordDTO extends UserDTO{}
export class UpdateProfleDTO {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsOptional()
    @IsEmail()
    email!: string;

    @ApiProperty({
        required: true,
        type: String,
    })

    @ApiProperty({
        required: false,
        type: String,
    })
    @IsOptional()
    @IsString()
    password?: string;
}