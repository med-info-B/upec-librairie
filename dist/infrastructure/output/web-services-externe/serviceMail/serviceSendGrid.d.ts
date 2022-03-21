import { UserAccessMongoDB } from '../../models/services/accessDB/userAccessDB';
export declare class EmailService {
    private readonly db;
    constructor(db: UserAccessMongoDB);
    private resetKeySendGrid;
    send(email: string, name: string, randNumber: number): Promise<void>;
}
