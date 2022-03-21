declare class UserDTO {
    email: string;
    password: string;
}
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
}
export declare class ChangePasswordDTO {
    email: string;
}
export declare class checkRandomNumberDTO {
    Iemail: string;
    IrandomeNumber: number;
}
export declare class LoginCredentialDTO extends UserDTO {
}
export declare class ChangePassWordDTO extends UserDTO {
}
export declare class UpdateProfleDTO {
    name: string;
    email: string;
    password?: string;
}
export {};
