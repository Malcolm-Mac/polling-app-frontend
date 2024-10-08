import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { UserModel } from "../../models/user.model";
import { UserRepository } from "../../repositories/user.repository";

export class UserRegisterUseCase implements UseCase<
    {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string
    }, UserModel>{

    constructor(private userRepository: UserRepository) { }

    execute(params:
        {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            confirmPassword: string
        }): Observable<UserModel> {
        return this.userRepository.register(params);
    }
}