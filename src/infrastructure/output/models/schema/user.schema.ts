import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document, SchemaType } from 'mongoose';
import { RoleUser } from '../../../package/config/constantes/user';


@Schema()
export class User extends Document {

@Prop({required: true, default: ObjectId})
_id!: ObjectId;

@Prop({required: true})
name!: String;

@Prop({ required: true, unique: true })
email!: string;

@Prop({required: true,unique: true })
password!: String;

@Prop({required: true, enum: RoleUser, default: RoleUser.USER })
role!: string;

@Prop({required: true })
salt!: string;

@Prop({required: false })
randomNumber?: number;

} 


export const UserSchema = SchemaFactory.createForClass(User);