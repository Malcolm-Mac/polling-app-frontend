export interface UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    createdAt: Date;
    emailVerified: boolean;
}