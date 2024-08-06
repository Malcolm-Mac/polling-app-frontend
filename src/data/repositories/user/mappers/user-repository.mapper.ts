import { Mapper } from "../../../../base/utils/mapper";
import { UserModel } from "../../../../domain/models/user.model";
import { UserEntity } from "../entities/user-entity";

export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel>{
    mapFrom(param: UserEntity): UserModel {
        return {
            id: param.id,
            firstName: param.firstName,
            lastName: param.lastName,
            phoneNumber: param.phoneNumber,
            email: param.email,
            emailVerified: param.emailVerified,
            createdAt: param.createdAt
        }
    }

    mapTo(param: UserModel): UserEntity {
        return {
            id: param.id,
            firstName: param.firstName,
            lastName: param.lastName,
            phoneNumber: param.phoneNumber,
            email: param.email,
            emailVerified: param.emailVerified,
            createdAt: param.createdAt
        }
    }
}