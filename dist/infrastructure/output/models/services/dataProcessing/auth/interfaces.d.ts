import { ObjectId } from "mongodb";
import { Role } from "../../../interfaces/IUserService";
export interface IPayload {
    _id: ObjectId;
    name: string;
    email: string;
    role: Role;
}
