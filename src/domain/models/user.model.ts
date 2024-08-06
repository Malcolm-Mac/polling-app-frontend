export interface UserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    emailVerified: boolean;
}