import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { UserModel } from "../../models/user.model";
import { UserRepository } from "../../repositories/user.repository";

export class VerifyEmailUseCase implements UseCase<{ email: string; }, UserModel>{
    constructor(private userRepository: UserRepository) { }

    execute(params: { email: string; }): Observable<UserModel> {
        return this.userRepository.verifyEmail(params);
    }
}