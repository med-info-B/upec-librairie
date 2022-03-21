import { IUserAccessDB } from "../../interfaces/IUserAccessDB";
import { Model } from 'mongoose';
import { IUser, IProfile } from "../../interfaces/IUserService";
import { User } from '../../schema/user.schema';
export declare class UserAccessMongoDB implements IUserAccessDB {
    private readonly userModel;
    constructor(userModel: Model<User>);
    updateProfile(profile: IProfile): Promise<IProfile | void>;
    updatePassWord(email: string, pwd: String, salt: string): Promise<void>;
    getOneUserFiltredBy(email: string): Promise<Object | void>;
    push(user: IUser): Promise<void>;
    existUserFiltredBy(email: String): Promise<Boolean | void>;
    setRandomNumber(email: string, nbr: number): Promise<void>;
    removeKeyRandomNumber(email: string): Promise<void>;
}
