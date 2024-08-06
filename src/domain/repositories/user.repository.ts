import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

export abstract class UserRepository {
    abstract login(params:
        {
            email: string,
            password: string
        }): Observable<UserModel>;
    abstract register(params:
        {
            firstName: string,
            lastName: string,
            phoneNumber: string,
            password: string
        }): Observable<UserModel>;
    abstract forgotPassword(params:
        {
            email: string,
            password: string
        }): Observable<UserModel>;
    abstract verifyEmail(params:
        {
            email: string
        }): Observable<UserModel>;
    abstract getUserProfile(): Observable<UserModel>;
}