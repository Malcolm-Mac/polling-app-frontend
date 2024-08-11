type refreshTokenProp = {
    token: string;
    userId: string;
    expiration: Date;
}
export interface UserEntity {
    id: string,
    email: string,
    tokenType: string,
    accessToken: string,
    expiresIn: string,
    refreshToken: refreshTokenProp
}