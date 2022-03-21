import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
export declare class User extends Document {
    _id: ObjectId;
    name: String;
    email: string;
    password: String;
    role: string;
    salt: string;
    randomNumber?: number;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
