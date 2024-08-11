import { Mapper } from "../../../../base/utils/mapper";
import { UserModel } from "../../../../domain/models/user.model";
import { UserEntity } from "../entities/user-entity";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' // This registers the service at the root level
  })
export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel>{
    mapFrom(param: UserEntity): UserModel {
        return {
            id: param.id,
            email: param.email,
            tokenType: param.tokenType,
            accessToken: param.accessToken,
            expiresIn:param.expiresIn,
            refreshToken: param.refreshToken
        }
    }

    mapTo(param: UserModel): UserEntity {
        return {
            id: param.id,
            email: param.email,
            tokenType: param.tokenType,
            accessToken: param.accessToken,
            expiresIn:param.expiresIn,
            refreshToken: param.refreshToken
        }
    }
}