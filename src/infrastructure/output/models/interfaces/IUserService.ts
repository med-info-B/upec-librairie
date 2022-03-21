import { ObjectId } from "mongodb";

export interface  IUserService {
    subscribbe(user: IUser) :Promise<void>;
    findOneUserFilteredBy(Iemail: string):Promise<IUser>;
    requestForgotPassWord(Iemail: string);
    checkCode(req: ICheckRandonNumber): Promise<any>;
    changePassWord(user: ILoginCredential): Promise<void>;
    updateProfile(user: IProfile): Promise<IProfile>;
    login(login: ILoginCredential): Promise<any> ;
}



export const enum Role {
    USER,
    ADMIN,
}
export interface IUser {
    _id?: string,
    name: string,
    email: string,
    salt?: string,
    role?: Role,  
    password: string,
    randomNumber?: number
}

export interface ILoginCredential {
    email: string,
    password: string,
}

export interface ICheckRandonNumber {
    Iemail: string,
    IrandomeNumber: number,
}


export interface IProfile {
    name: string,
    email: string,
    password?: string,
    salt?:string;
}


export interface IPayload {
    _id: ObjectId,
    name: string,
    email: string,
    role: Role,
}