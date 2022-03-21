import { ObjectId } from "mongodb";
import { IUser, IProfile } from "./IUserService";

export interface  IUserAccessDB {
    push(user: IUser) :Promise<void>;
    existUserFiltredBy(email: string): Promise<Boolean |void>;
    getOneUserFiltredBy(email: string): Promise<Object| void>;
    updatePassWord(email: string, pwd: String, salt:string): Promise<void>;
    updateProfile(profile: IProfile): Promise<object | void>;
}