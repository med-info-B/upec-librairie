import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module'


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {dbName: 'test'}),
    UserModule,
  ],
  
})
export class AppModule {}
