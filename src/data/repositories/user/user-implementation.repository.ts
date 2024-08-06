import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { UserModel } from "../../../domain/models/user.model";
import { UserRepository } from "../../../domain/repositories/user.repository"
import { UserEntity } from "./entities/user-entity";
import { UserImplementationRepositoryMapper } from "./mappers/user-repository.mapper";

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

    userMapper = inject(UserImplementationRepositoryMapper);

    constructor(private http: HttpClient) {
        super();
    }

    login(params: { email: string; password: string; }): Observable<UserModel> {
        return this.http
            .post<UserEntity>('https://example.com/login', { params })
            .pipe(map(this.userMapper.mapFrom));
    }

    register(params: { firstName: string; lastName: string; phoneNumber: string; password: string; }): Observable<UserModel> {
        return this.http
            .post<UserEntity>('https://example.com/register', { params })
            .pipe(map(this.userMapper.mapFrom));
    }

    forgotPassword(params: { email: string; password: string; }): Observable<UserModel> {
        return this.http.post<UserEntity>('https://example.com/user', { params }).pipe(
            map(this.userMapper.mapFrom));
    }

    verifyEmail(params: { email: string; }): Observable<UserModel> {
        return this.http.post<UserEntity>('https://example.com/user', { params }).pipe(
            map(this.userMapper.mapFrom));
    }

    getUserProfile(): Observable<UserModel> {
        return this.http.get<UserEntity>('https://example.com/user').pipe(
            map(this.userMapper.mapFrom));
    }

}