import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { UserModel } from "../../../domain/models/user.model";
import { UserRepository } from "../../../domain/repositories/user.repository"
import { environment } from "../../../presentation/environments/environment.development";
import { UserEntity } from "./entities/user-entity";
import { UserImplementationRepositoryMapper } from "./mappers/user-repository.mapper";

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

    constructor(private http: HttpClient, private userMapper: UserImplementationRepositoryMapper) {
        super();
    }

    login(params: { email: string; password: string; }): Observable<UserModel> {
        return this.http
            .post<UserEntity>(`${environment.baseUri}/Auth/login`, params)
            .pipe(map(this.userMapper.mapFrom));
    }

    register(params: { firstName: string; lastName: string; password: string; }): Observable<UserModel> {
        return this.http
            .post<UserEntity>(`${environment.baseUri}/Auth/register`, { params })
            .pipe(map(this.userMapper.mapFrom));
    }

    forgotPassword(params: { email: string; password: string; }): Observable<UserModel> {
        return this.http.post<UserEntity>(`${environment.baseUri}/Auth/forgot-password`, { params }).pipe(
            map(this.userMapper.mapFrom));
    }

    verifyEmail(params: { email: string; }): Observable<UserModel> {
        return this.http.post<UserEntity>(`${environment.baseUri}/Auth/verify-email`, { params }).pipe(
            map(this.userMapper.mapFrom));
    }

    getUserProfile(): Observable<UserModel> {
        return this.http.get<UserEntity>(`${environment.baseUri}/Auth/get-user-profile`).pipe(
            map(this.userMapper.mapFrom));
    }

}